/* ===== ORRYN — Authentification & sauvegarde cloud (Supabase) ===== */

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let ORRYN_USER = null;          // l'utilisateur connecté
let orrynCloudReady = false;    // true une fois les données chargées depuis le cloud

/* Garde : si pas connecté, on renvoie vers la page de login.
   Renvoie l'utilisateur connecté, ou null (et redirige). */
async function requireAuth() {
  const { data } = await sb.auth.getSession();
  if (!data.session) {
    window.location.href = 'login.html';
    return null;
  }
  ORRYN_USER = data.session.user;
  return ORRYN_USER;
}

/* Charge les données de l'utilisateur depuis Supabase dans OrrynData.
   Si rien en base (premier login), on garde les valeurs par défaut. */
async function loadOrrynCloud() {
  if (!ORRYN_USER) return;
  const { data, error } = await sb
    .from('orryn_data')
    .select('data')
    .eq('user_id', ORRYN_USER.id)
    .maybeSingle();

  if (error) { console.warn('Orryn cloud: chargement', error); return; }

  if (data && data.data) {
    const d = data.data;
    if (Array.isArray(d.habits))           OrrynData.habits = d.habits;
    if (Array.isArray(d.tasks))            OrrynData.tasks = d.tasks;
    if (Array.isArray(d.projects))         OrrynData.projects = d.projects;
    if (Array.isArray(d.affirmations))     OrrynData.affirmations = d.affirmations;
    if (typeof d.whyText === 'string')     OrrynData.whyText = d.whyText;
    if (typeof d.mantra === 'string')      OrrynData.mantra = d.mantra;
    if (Array.isArray(d.gratitudeHistory)) OrrynData.gratitudeHistory = d.gratitudeHistory;
  }
  // S'assurer que les tâches de projet ont de vraies dates (après écrasement par le cloud)
  if (typeof migrateProjectTaskDates === 'function') migrateProjectTaskDates();
  orrynCloudReady = true;
}

/* Sauvegarde OrrynData dans Supabase (remplace le localStorage). */
async function saveOrrynCloud() {
  if (!ORRYN_USER || !orrynCloudReady) return; // on ne sauve pas avant d'avoir chargé
  const payload = {
    habits: OrrynData.habits,
    tasks: OrrynData.tasks,
    projects: OrrynData.projects,
    affirmations: OrrynData.affirmations,
    whyText: OrrynData.whyText || null,
    mantra: OrrynData.mantra || null,
    gratitudeHistory: OrrynData.gratitudeHistory || null,
  };
  const { error } = await sb
    .from('orryn_data')
    .upsert({ user_id: ORRYN_USER.id, data: payload, updated_at: new Date().toISOString() });
  if (error) console.warn('Orryn cloud: sauvegarde', error);
}

/* Déconnexion */
async function orrynLogout() {
  await saveOrrynCloud();
  await sb.auth.signOut();
  window.location.href = 'login.html';
}

/* Initialise la session sur une page : vérifie l'auth, charge le cloud,
   puis appelle le callback de rendu de la page. */
async function initOrrynPage(renderCallback) {
  const user = await requireAuth();
  if (!user) return; // redirigé vers login
  await loadOrrynCloud();
  if (typeof renderCallback === 'function') renderCallback();

  // Sauvegarde auto vers le cloud (remplace celle du localStorage)
  setInterval(() => { if (!document.hidden) saveOrrynCloud(); }, 4000);
  document.addEventListener('visibilitychange', () => { if (document.hidden) saveOrrynCloud(); });
  window.addEventListener('pagehide', saveOrrynCloud);

  // L'avatar de la sidebar permet de se déconnecter
  const avatar = document.querySelector('.sidebar-avatar');
  if (avatar) {
    avatar.style.cursor = 'pointer';
    avatar.title = 'Se déconnecter';
    avatar.addEventListener('click', () => {
      if (confirm('Se déconnecter ?')) orrynLogout();
    });
  }
}
