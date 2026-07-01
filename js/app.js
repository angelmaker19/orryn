/* ===== ORRYN — Données & Logique partagée ===== */

/* Bibliothèque d'icônes SVG pour les projets (au trait, style épuré).
   Clé = identifiant, valeur = contenu du <svg> (paths). */
const ORRYN_ICONS = {
  rocket:   '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  store:    '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M2 7h20"/><path d="M12 7v15"/>',
  cart:     '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  camera:   '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  chart:    '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
  pen:      '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  briefcase:'<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  heart:    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  book:     '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
  dumbbell: '<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/>',
  globe:    '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  target:   '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  bulb:     '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  code:     '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
};

/* Palette de couleurs assignables à un projet */
const ORRYN_PROJECT_COLORS = [
  '#059669', // vert (défaut)
  '#2563EB', // bleu
  '#7C3AED', // violet
  '#DB2777', // rose
  '#EA580C', // orange
  '#0891B2', // cyan
  '#CA8A04', // ambre
  '#475569', // ardoise
];

function orrynIconSvg(key, size = 18) {
  const paths = ORRYN_ICONS[key] || ORRYN_ICONS.target;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

const OrrynData = {
  habits: [
    { id: 'med',   label: 'Méditation',  detail: '10 minutes · respiration consciente', time: '07:00', streak: 12, done: true,  moment: 'matin'   },
    { id: 'sport', label: 'Sport',       detail: 'Run 5 km ou séance de force',         time: '07:30', streak: 8,  done: true,  moment: 'matin'   },
    { id: 'cold',  label: 'Cold shower', detail: '2 minutes minimum',                   time: '08:00', streak: 6,  done: true,  moment: 'matin'   },
    { id: 'read',  label: 'Lecture',     detail: "20 pages · pas d'écrans",             time: '21:00', streak: 14, done: false, moment: 'soir'    },
    { id: 'jour',  label: 'Journal',     detail: '3 lignes minimum sur ma journée',     time: '22:00', streak: 9,  done: false, moment: 'soir'    },
    { id: 'sleep', label: 'Coucher 23h', detail: 'Téléphone hors de la chambre',        time: '23:00', streak: 5,  done: false, moment: 'soir'    },
  ],

  tasks: [
    { id: 1, title: 'Finaliser pitch deck',    description: 'Slides 8 à 14, ajouter la roadmap produit Q3 + finances.', dDay: 0,    done: false, priority: 'urgent', scope: 'pro',   project: 'Orryn' },
    { id: 2, title: 'Appeler le notaire',      description: 'Signature compromis appartement, vérifier état des lieux.', dDay: 1,    done: false, priority: 'urgent', scope: 'perso', project: null    },
    { id: 3, title: 'Préparer 1:1 avec Léa',  description: 'Feedback Q2, objectifs trimestre, formation à valider.',   dDay: 4,    done: false, priority: 'medium', scope: 'pro',   project: 'Orryn' },
    { id: 4, title: 'Lire rapport marché',     description: 'Analyse concurrents secteur B2B.',                         dDay: 7,    done: false, priority: 'normal', scope: 'pro',   project: 'Boutique solo' },
    { id: 5, title: 'Mise à jour roadmap',     description: 'Aligner avec les retours clients.',                        dDay: 3,    done: true,  priority: 'normal', scope: 'pro',   project: 'Orryn' },
    { id: 6, title: 'Réserver dentiste',       description: 'Contrôle annuel, appeler avant 18h.',                      dDay: 2,    done: false, priority: 'medium', scope: 'perso', project: null    },
    { id: 7, title: 'Courses de la semaine',   description: 'Liste sur le frigo + protéines.',                          dDay: 0,    done: false, priority: 'normal', scope: 'perso', project: null    },
    { id: 8, title: 'Réserver vol Lisbonne',   description: 'Départ 14 août, comparer TAP / easyJet.',                  dDay: null, done: false, priority: 'normal', scope: 'perso', project: null    },
    { id: 9, title: 'Commander 2 livres',      description: '« Atomic Habits », « The Mom Test ».',                     dDay: -2,   done: true,  priority: 'normal', scope: 'perso', project: null    },
  ],

  projects: [
    {
      id: 1, name: 'Orryn', area: 'Pro · Micro SaaS', scope: 'pro', color: '#2563EB', icon: 'rocket',
      objective: "Lancer la V1 d'Orryn et obtenir les 10 premiers utilisateurs. App de productivité personnelle, pensée pour le focus.",
      goal: { label: 'Premiers utilisateurs', current: 1, target: 10, unit: 'users', dueLabel: '31 juil.' },
      status: 'active', progress: 68, deadlineShort: '12 juil.', dDay: -13, startedShort: '4 mars', age: 'il y a 4 mois',
      note: "Cible : finir les 5 pages, brancher la sauvegarde, puis tester sur moi 2 semaines avant de montrer à quelqu'un. La promesse : suivre sa journée dans l'ordre, sans bruit.",
      resources: [{ letter: 'F', label: 'Maquettes Claude Design' }, { letter: 'B', label: 'BRIEF.md' }],
      activity: [{ label: 'Pages Dashboard + Tâches codées', when: 'Cette semaine', dotColor: '#10B981' }, { label: 'Maquettes v2 validées', when: 'Il y a 3 jours', dotColor: '#D1D5DB' }],
      tasks: [
        { id: 'orryn-1', title: 'Coder la page Projets',      desc: 'Dernière page de la V1, vue détaillée par projet.',       tag: 'high', date: '2 juil.', link: null, done: false },
        { id: 'orryn-2', title: 'Brancher le localStorage',   desc: 'Sauvegarder tâches, habitudes, affirmations, gratitude.', tag: 'high', date: '4 juil.', link: null, done: false },
        { id: 'orryn-3', title: 'Tester 2 semaines sur moi',  desc: 'Usage quotidien réel avant de montrer à quelqu\'un.',     tag: 'med',  date: null,     link: null, done: false },
        { id: 'orryn-4', title: 'Choisir un hébergement',     desc: 'Vercel ou Netlify, déploiement statique simple.',         tag: 'low',  date: null,     link: null, done: false },
      ],
    },
    {
      id: 2, name: 'Boutique solo', area: 'Pro · E-commerce', scope: 'pro', color: '#EA580C', icon: 'store',
      objective: "Ouvrir ma propre boutique avant le Big Four (Q4), avec un catalogue de 50 produits et une marque qui tient debout.",
      goal: { label: "Chiffre d'affaires", current: 0, target: 5000, unit: '€', dueLabel: '15 sept.' },
      status: 'active', progress: 42, deadlineShort: '15 sept.', dDay: -105, startedShort: '1 juin', age: 'il y a 1 mois',
      note: "Repartir de ce que j'ai appris en dropshipping avec l'associé. Cette fois, marque propre, pas de produit au hasard. Tester 3 angles marketing avant de scaler.",
      resources: [{ letter: 'S', label: 'Store Shopify' }, { letter: 'N', label: 'Recherche produits' }],
      activity: [{ label: 'Niche identifiée', when: 'Il y a 5 jours', dotColor: '#10B981' }],
      tasks: [
        { id: 'bs-1', title: 'Valider la niche',        desc: 'Vérifier la demande, la concurrence, les marges.',     tag: 'high', date: '5 juil.', link: null, done: true  },
        { id: 'bs-2', title: 'Sourcer 10 produits test', desc: 'Fournisseurs fiables, délais corrects.',               tag: 'high', date: '12 juil.', link: null, done: false },
        { id: 'bs-3', title: 'Créer la boutique Shopify', desc: 'Thème propre, pages légales, tunnel d\'achat.',        tag: 'med',  date: null,      link: null, done: false },
      ],
    },
    {
      id: 3, name: 'Vinted scale', area: 'Pro · Achat-revente', scope: 'pro', color: '#0891B2', icon: 'cart',
      objective: "Atteindre 500 € de bénéfice par mois en achat-revente sur Vinted, de façon régulière et systématisée.",
      goal: { label: 'Bénéfice mensuel', current: 120, target: 500, unit: '€', dueLabel: '31 déc.' },
      status: 'paused', progress: 23, deadlineShort: '31 déc.', dDay: -184, startedShort: '10 janv.', age: 'il y a 6 mois',
      note: "En pause le temps de lancer Orryn et la boutique. Reprendre avec un vrai système : sourcing le week-end, photos en lot, mise en ligne le dimanche soir.",
      resources: [{ letter: 'V', label: 'Compte Vinted' }, { letter: 'E', label: 'Suivi Excel ventes' }],
      activity: [{ label: 'Projet mis en pause', when: 'Il y a 2 semaines', dotColor: '#F59E0B' }],
      tasks: [
        { id: 'v-1', title: 'Système de sourcing',   desc: 'Lister 3 sources fiables (friperies, déstockage).', tag: 'med', date: null, link: null, done: false },
        { id: 'v-2', title: 'Template de photos',    desc: 'Fond neutre, lumière, cadrage répétable.',          tag: 'low', date: null, link: null, done: false },
      ],
    },
    {
      id: 4, name: 'TikTok content', area: 'Pro · Création', scope: 'pro', color: '#DB2777', icon: 'camera',
      objective: "Publier 3 vidéos par semaine et atteindre 1000 abonnés. Construire une présence pour documenter le parcours entrepreneur.",
      goal: { label: 'Abonnés', current: 40, target: 1000, unit: 'abonnés', dueLabel: '30 sept.' },
      status: 'active', progress: 15, deadlineShort: '30 sept.', dDay: -90, startedShort: '15 juin', age: 'ce mois-ci',
      note: "Format : documenter le réel, pas la mise en scène. Le lancement d'Orryn et de la boutique sont du contenu en soi. Filmer même quand c'est imparfait.",
      resources: [{ letter: 'T', label: 'Compte TikTok' }, { letter: 'I', label: 'Banque d\'idées' }],
      activity: [{ label: 'Compte créé', when: 'Il y a 2 semaines', dotColor: '#10B981' }],
      tasks: [
        { id: 'tt-1', title: 'Définir 3 piliers de contenu', desc: 'Build in public, productivité, mindset entrepreneur.', tag: 'high', date: '3 juil.', link: null, done: false },
        { id: 'tt-2', title: 'Filmer 5 vidéos d\'avance',     desc: 'Avoir du stock pour ne pas casser le rythme.',         tag: 'med',  date: null,      link: null, done: false },
      ],
    },
  ],

  currentScope: 'perso',

  // Phrase mantra affichée en haut du dashboard (éditable).
  mantra: "Chaque jour compte. Avance, même petit.",

  // Affirmations ajoutées par Simon uniquement (max 10). Vide au départ.
  affirmations: [],

  statusMap: {
    active: { label: 'En cours',  bg: '#ECFDF5', color: '#047857', dot: '#10B981' },
    paused: { label: 'En pause',  bg: '#FFFBEB', color: '#B45309', dot: '#F59E0B' },
    late:   { label: 'En retard', bg: '#FEF2F2', color: '#DC2626', dot: '#EF4444' },
    done:   { label: 'Terminé',   bg: '#F3F4F6', color: '#6B7280', dot: '#9CA3AF' },
  },
};

/* ============================================================
   PERSISTANCE — Sauvegarde locale (localStorage)
   Étape avant le cloud : les données survivent au rafraîchissement,
   par navigateur/appareil. La synchro cloud viendra par-dessus.
   ============================================================ */
const ORRYN_STORAGE_KEY = 'orryn-data-v1';

// Ce qu'on sauvegarde (les données qui changent, pas les constantes de config)
function saveOrryn() {
  try {
    const payload = {
      habits: OrrynData.habits,
      tasks: OrrynData.tasks,
      projects: OrrynData.projects,
      affirmations: OrrynData.affirmations,
      whyText: OrrynData.whyText || null,
      mantra: OrrynData.mantra || null,
      gratitudeHistory: OrrynData.gratitudeHistory || null,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(ORRYN_STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn('Orryn: sauvegarde impossible', e);
  }
}

// Sauvegarde combinée : local (immédiat) + cloud (si connecté).
// À appeler après chaque modification de données pour tout garder synchronisé.
function persistOrryn() {
  saveOrryn();
  if (typeof saveOrrynCloud === 'function') { try { saveOrrynCloud(); } catch (e) {} }
}

// Recharge au démarrage : écrase les valeurs par défaut si une sauvegarde existe
function loadOrryn() {
  try {
    const raw = localStorage.getItem(ORRYN_STORAGE_KEY);
    if (!raw) return; // premier lancement : on garde les données de démo
    const data = JSON.parse(raw);
    if (Array.isArray(data.habits))       OrrynData.habits = data.habits;
    if (Array.isArray(data.tasks))        OrrynData.tasks = data.tasks;
    if (Array.isArray(data.projects))     OrrynData.projects = data.projects;
    if (Array.isArray(data.affirmations)) OrrynData.affirmations = data.affirmations;
    if (typeof data.whyText === 'string') OrrynData.whyText = data.whyText;
    if (typeof data.mantra === 'string') OrrynData.mantra = data.mantra;
    if (Array.isArray(data.gratitudeHistory)) OrrynData.gratitudeHistory = data.gratitudeHistory;
  } catch (e) {
    console.warn('Orryn: chargement impossible', e);
  }
}

/* Migration : donne une vraie date (dueDate ISO) aux tâches de projet qui n'en ont pas,
   ET un couple start/end pour la timeline (Gantt). */
function migrateProjectTaskDates() {
  let offset = 1;
  OrrynData.projects.forEach(p => {
    (p.tasks || []).forEach(t => {
      if (t.dueDate === undefined) {
        // Pas encore migrée : on lui assigne une date à venir échelonnée (sauf si terminée)
        t.dueDate = t.done ? null : dDayToIso(offset);
        if (!t.done) offset += 2;
      }
      // Timeline : start/end. Par défaut, une tâche dure 3 jours et finit à son échéance.
      if (t.start === undefined || t.end === undefined) {
        const end = t.dueDate || dDayToIso(offset);
        const endD = new Date(end + 'T00:00:00');
        const startD = new Date(endD); startD.setDate(endD.getDate() - 2); // 3 jours
        t.start = t.start || startD.toISOString().slice(0, 10);
        t.end = t.end || end;
        if (!t.done && (offset = offset)) offset += 1;
      }
    });
  });
}

// On recharge immédiatement le cache local, pour un affichage instantané
// le temps que le cloud (Supabase) réponde. Le cloud écrase ensuite.
loadOrryn();
migrateProjectTaskDates();

// NB : l'auto-sauvegarde cloud est gérée par auth.js (initOrrynPage).
// On garde une sauvegarde locale de secours (cache hors-ligne), peu fréquente.
setInterval(() => { if (!document.hidden) saveOrryn(); }, 5000);
window.addEventListener('pagehide', saveOrryn);

/* ============================================================
   MODALE RÉUTILISABLE — saisie de texte stylée (remplace prompt())
   Utilisée pour le mantra, les affirmations, etc. Éditeur riche optionnel.
   ============================================================ */
function ensureOrrynModalRoot() {
  let root = document.getElementById('orryn-modal-root');
  if (root) return root;
  root = document.createElement('div');
  root.id = 'orryn-modal-root';
  root.className = 'orryn-modal-overlay';
  root.innerHTML = `
    <div class="orryn-modal" role="dialog" aria-modal="true">
      <div class="orryn-modal-head">
        <h3 class="orryn-modal-title"></h3>
        <button class="orryn-modal-close" aria-label="Fermer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <p class="orryn-modal-sub"></p>
      <div class="orryn-rte-toolbar" style="display:none;">
        <button type="button" data-cmd="bold" title="Gras"><b>G</b></button>
        <button type="button" data-cmd="italic" title="Italique"><i>I</i></button>
        <button type="button" data-cmd="hilite" title="Surligner"><span class="rte-hl">S</span></button>
      </div>
      <div class="orryn-modal-field-wrap"></div>
      <div class="orryn-modal-actions">
        <button class="orryn-modal-cancel">Annuler</button>
        <button class="orryn-modal-ok">Enregistrer</button>
      </div>
    </div>`;
  document.body.appendChild(root);
  return root;
}

/* Ouvre une modale de saisie.
   opts : { title, sub, value, rich (bool), multiline (bool), placeholder, okLabel }
   onSave(valeur) est appelé si l'utilisateur valide (valeur = HTML si rich, sinon texte). */
function openOrrynInput(opts, onSave) {
  const root = ensureOrrynModalRoot();
  const modal = root.querySelector('.orryn-modal');
  root.querySelector('.orryn-modal-title').textContent = opts.title || 'Saisie';
  const sub = root.querySelector('.orryn-modal-sub');
  sub.textContent = opts.sub || '';
  sub.style.display = opts.sub ? '' : 'none';
  root.querySelector('.orryn-modal-ok').textContent = opts.okLabel || 'Enregistrer';

  const toolbar = root.querySelector('.orryn-rte-toolbar');
  const wrap = root.querySelector('.orryn-modal-field-wrap');
  wrap.innerHTML = '';
  let field;

  if (opts.rich) {
    toolbar.style.display = 'flex';
    field = document.createElement('div');
    field.className = 'orryn-rte';
    field.contentEditable = 'true';
    field.innerHTML = opts.value || '';
    field.dataset.placeholder = opts.placeholder || 'Écris ici…';
    wrap.appendChild(field);
    toolbar.querySelectorAll('button').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        field.focus();
        applyRteCommand(btn.dataset.cmd);
      };
    });
  } else {
    toolbar.style.display = 'none';
    field = document.createElement(opts.multiline ? 'textarea' : 'input');
    field.className = 'orryn-modal-input' + (opts.multiline ? ' multiline' : '');
    if (!opts.multiline) field.type = 'text';
    field.value = opts.value || '';
    field.placeholder = opts.placeholder || '';
    wrap.appendChild(field);
  }

  const close = () => { root.classList.remove('open'); };
  root.querySelector('.orryn-modal-close').onclick = close;
  root.querySelector('.orryn-modal-cancel').onclick = close;
  root.onclick = (e) => { if (e.target === root) close(); };
  root.querySelector('.orryn-modal-ok').onclick = () => {
    const val = opts.rich ? field.innerHTML : field.value;
    close();
    onSave(val);
  };
  // Entrée valide (sauf multiline/rich où Entrée = nouvelle ligne)
  if (!opts.multiline && !opts.rich) {
    field.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); root.querySelector('.orryn-modal-ok').click(); } };
  }
  document.onkeydown = (e) => { if (e.key === 'Escape' && root.classList.contains('open')) close(); };

  root.classList.add('open');
  requestAnimationFrame(() => { field.focus(); if (field.select) field.select(); });
}

/* ============================================================
   DRAG & DROP — réordonner des éléments dans une liste (point 6)
   container : élément parent
   itemSelector : sélecteur des lignes déplaçables (elles doivent avoir draggable=true)
   onReorder(fromIndex, toIndex) : callback appelé après le drop
   ============================================================ */
function enableListReorder(container, itemSelector, onReorder) {
  let dragEl = null;
  let dragFrom = -1;

  const items = () => Array.from(container.querySelectorAll(itemSelector));

  items().forEach((el) => {
    el.addEventListener('dragstart', (e) => {
      dragEl = el;
      dragFrom = items().indexOf(el);
      el.classList.add('drag-ghost');
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', String(dragFrom)); } catch (err) {}
    });
    el.addEventListener('dragend', () => {
      el.classList.remove('drag-ghost');
      items().forEach(x => x.classList.remove('drag-over'));
    });
    el.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (el !== dragEl) el.classList.add('drag-over');
    });
    el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
    el.addEventListener('drop', (e) => {
      e.preventDefault();
      el.classList.remove('drag-over');
      if (el === dragEl) return;
      const to = items().indexOf(el);
      if (dragFrom < 0 || to < 0 || dragFrom === to) return;
      onReorder(dragFrom, to);
    });
  });
}

/* Applique une commande d'édition riche (gras / italique / surligner). */
function applyRteCommand(cmd) {
  if (cmd === 'bold') document.execCommand('bold');
  else if (cmd === 'italic') document.execCommand('italic');
  else if (cmd === 'hilite') document.execCommand('hiliteColor', false, '#FDE68A');
}

// Raccourci pour le mantra (une ligne)
function openMantraModal(value, onSave) {
  openOrrynInput({
    title: 'Ma phrase du jour',
    sub: 'Une phrase à garder en tête chaque fois que tu ouvres Orryn.',
    value, multiline: true, placeholder: 'Ex : Chaque jour compte. Avance, même petit.',
  }, onSave);
}

/* ===== NAVIGATION ===== */
function initNav(activePage) {
  const pages = {
    dashboard: { path: '../index.html',         title: 'Dashboard' },
    tasks:     { path: '../pages/tasks.html',   title: 'Tâches'    },
    mindset:   { path: '../pages/mindset.html', title: 'Mindset'   },
    routine:   { path: '../pages/routine.html', title: 'Routine'   },
    projects:  { path: '../pages/projects.html',title: 'Projets'   },
  };

  document.querySelectorAll('.sidebar-nav-btn[data-page]').forEach(btn => {
    const page = btn.dataset.page;
    if (page === activePage) {
      btn.classList.add('active');
    }
    if (pages[page]) {
      btn.addEventListener('click', () => {
        window.location.href = btn.dataset.href || pages[page].path;
      });
    }
  });
}

/* ===== MOTION : compteur animé (chiffre qui monte) ===== */
function animateCount(el, to, opts = {}) {
  if (!el) return;
  const suffix = opts.suffix || '';
  const dur = opts.duration || 900;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = to + suffix; return; }
  const start = performance.now();
  const from = 0;
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = to + suffix;
  }
  requestAnimationFrame(tick);
}

/* ===== DATE HELPERS ===== */
function getTodayLabel() {
  const now = new Date();
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const hour = now.getHours();
  const moment = hour < 12 ? 'matin' : hour < 18 ? 'après-midi' : 'soir';
  return `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} · ${moment}`;
}

/* ===== DATES RÉELLES (ISO 'YYYY-MM-DD') ===== */
const ORRYN_MONTHS_SHORT = ['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];

// Nombre de jours entre aujourd'hui et une date ISO (négatif = passé). null si pas de date.
function daysUntil(iso) {
  if (!iso) return null;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const d = new Date(iso + 'T00:00:00'); d.setHours(0, 0, 0, 0);
  return Math.round((d - today) / 86400000);
}

// Une tâche est "urgente" si elle n'est pas faite ET qu'il reste ≤ 2 jours
// (aujourd'hui, demain, J-2) OU qu'elle est en retard.
// Gère les deux formats : dueDate (ISO) et dDay (relatif, ancien format).
function isTaskUrgent(task) {
  if (!task || task.done) return false;
  let n = null;
  if (task.dueDate) {
    n = daysUntil(task.dueDate);
  } else if (typeof task.dDay === 'number') {
    n = task.dDay; // dDay négatif = passé, positif = à venir
  }
  if (n === null) return false;
  return n <= 2; // inclut le retard (négatif), aujourd'hui, demain, J-2
}

// Vrai si la tâche est carrément EN RETARD (échéance dépassée, pas faite).
function isTaskLate(task) {
  if (!task || task.done) return false;
  let n = null;
  if (task.dueDate) n = daysUntil(task.dueDate);
  else if (typeof task.dDay === 'number') n = task.dDay;
  return n !== null && n < 0;
}

// Libellé COURT pour le badge urgent (jamais long, pour ne pas déborder).
// Ex : "EN RETARD", "AUJOURD'HUI", "DEMAIN", "J-2".
function urgentShortLabel(task) {
  let n = null;
  if (task.dueDate) n = daysUntil(task.dueDate);
  else if (typeof task.dDay === 'number') n = task.dDay;
  if (n === null) return 'URGENT';
  if (n < 0) return 'EN RETARD';
  if (n === 0) return "AUJOURD'HUI";
  if (n === 1) return 'DEMAIN';
  return 'J-' + n;
}

// SVG éclair (urgent) et triangle d'alerte (retard)
const ORRYN_BOLT_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>';
const ORRYN_ALERT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

// Retourne le HTML du badge d'alerte pour une tâche urgente/en retard, ou '' sinon.
function urgentBadgeHtml(task) {
  if (!isTaskUrgent(task)) return '';
  if (isTaskLate(task)) {
    return `<span class="late-badge">${ORRYN_ALERT_SVG}EN RETARD</span>`;
  }
  return `<span class="urgent-badge">${ORRYN_BOLT_SVG}${urgentShortLabel(task)}</span>`;
}

// Retourne la classe CSS à ajouter à la ligne ('urgent-task', 'urgent-task late-task', ou '').
function urgentRowClass(task) {
  if (!isTaskUrgent(task)) return '';
  return isTaskLate(task) ? 'urgent-task late-task' : 'urgent-task';
}

// Nombre de jours restant pour une tâche (dueDate ISO ou dDay). null si pas de date.
function taskDaysLeft(task) {
  if (task.dueDate) return daysUntil(task.dueDate);
  if (typeof task.dDay === 'number') return task.dDay;
  return null;
}

// Score d'urgence : plus il est BAS, plus la tâche est prioritaire.
// - en retard / échéance proche = score bas (remonte)
// - priorité "urgent" pèse un peu
// - projet en pause = fortement dépriorisé (grosse pénalité)
function urgencyScore(task, opts = {}) {
  let n = taskDaysLeft(task);
  if (n === null) n = 999;              // sans date = tout en bas
  let score = n;                        // base : jours restants
  const prio = task.priority || task.tag;
  if (prio === 'urgent' || prio === 'high') score -= 1.5;
  else if (prio === 'medium' || prio === 'med') score -= 0.5;
  if (opts.paused) score += 1000;       // projet en pause : passe après tout le reste
  return score;
}

// Trie une liste de tâches par urgence (ne modifie pas l'original).
// opts.pausedByTask : fonction (task) -> bool pour savoir si le projet est en pause.
function sortByUrgency(tasks, opts = {}) {
  const pausedByTask = opts.pausedByTask || (() => false);
  return tasks.slice().sort((a, b) => {
    return urgencyScore(a, { paused: pausedByTask(a) }) - urgencyScore(b, { paused: pausedByTask(b) });
  });
}

// Label court d'une date ISO : "Auj.", "Demain", "2 juil.", ou null
function isoShortLabel(iso) {
  if (!iso) return null;
  const n = daysUntil(iso);
  if (n === 0) return "Auj.";
  if (n === 1) return "Demain";
  if (n === -1) return "Hier";
  const d = new Date(iso + 'T00:00:00');
  return d.getDate() + ' ' + ORRYN_MONTHS_SHORT[d.getMonth()];
}

// Badge d'échéance "J-X" + couleur selon l'urgence (pour les tâches projet)
// Palette pensée pour la vision daltonienne (magenta / cyan / vert) et
// lisible sur fond clair comme sur fond sombre (mode Pro).
function dueBadge(iso) {
  const n = daysUntil(iso);
  if (n === null) return { label: 'Sans date', color: '#94A3B8', dotColor: '#94A3B8' };
  if (n < 0)  return { label: 'En retard', color: '#EC4899', dotColor: '#EC4899' };
  if (n === 0) return { label: "Aujourd'hui", color: '#EC4899', dotColor: '#EC4899' };
  if (n === 1) return { label: 'Demain', color: '#0EA5E9', dotColor: '#0EA5E9' };
  if (n <= 3) return { label: 'J-' + n, color: '#0EA5E9', dotColor: '#0EA5E9' };
  if (n <= 14) return { label: 'J-' + n, color: '#0EA5E9', dotColor: '#0EA5E9' };
  return { label: isoShortLabel(iso), color: '#10B981', dotColor: '#10B981' };
}

// Convertit un dDay relatif (ancien format) en date ISO, pour migrer les données de démo
function dDayToIso(dDay) {
  if (dDay === null || dDay === undefined) return null;
  const d = new Date(); d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + dDay);
  return d.toISOString().slice(0, 10);
}

function formatDDay(d) {
  if (d === 0) return "Auj.";
  return 'J' + d;
}

function dateLabelFor(dDay) {
  if (dDay === null || dDay === undefined) return "Pas de date";
  if (dDay === 0) return "Aujourd'hui";
  if (dDay === 1) return "Demain";
  if (dDay > 0 && dDay < 7) return "Cette semaine";
  if (dDay < 0) return "Fait";
  return "J+" + dDay;
}

function dDayColor(d, status) {
  // Même palette daltonienne que dueBadge : magenta / cyan / vert.
  if (status === 'done')   return '#94A3B8';
  if (status === 'paused') return '#94A3B8';
  if (d >= -3 && d <= 0)  return '#EC4899'; // urgent : magenta vif
  if (d >= -14 && d < -3) return '#0EA5E9'; // proche : cyan vif
  return '#10B981';                         // large : vert
}

/* ===== AFFIRMATION DU JOUR ===== */
/* Retourne le texte de l'affirmation du jour, ou null si la collection est vide. */
function getDailyAffirmation() {
  if (!OrrynData.affirmations.length) return null;
  const today = new Date();
  const idx = (today.getDate() + today.getMonth()) % OrrynData.affirmations.length;
  return OrrynData.affirmations[idx].quote;
}

/* ===== HABIT TOGGLE ===== */
function bindHabitToggles() {
  document.querySelectorAll('.habit-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.habitId;
      const habit = OrrynData.habits.find(h => h.id === id);
      if (!habit) return;
      habit.done = !habit.done;
      renderHabits();
      updateRoutineStats();
    });
  });
}

/* ===== TASK TOGGLE ===== */
function bindTaskToggles(onToggle) {
  document.querySelectorAll('.task-check-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.taskId);
      const task = OrrynData.tasks.find(t => t.id === id);
      if (!task) return;
      task.done = !task.done;
      const row = btn.closest('.task-row');
      applyTaskState(row, task);
      if (typeof onToggle === 'function') onToggle();
      else updateTaskStats();
    });
  });
}

function applyTaskState(row, task) {
  if (!row) return;
  const check = row.querySelector('.task-check');
  const title = row.querySelector('.task-title');
  const desc  = row.querySelector('.task-desc');
  if (check) check.classList.toggle('done', task.done);
  if (title) title.classList.toggle('done', task.done);
  if (desc)  desc.classList.toggle('done', task.done);
  const svg = check ? check.querySelector('svg') : null;
  if (svg) svg.style.display = task.done ? '' : 'none';
}

function updateTaskStats() {
  const done = OrrynData.tasks.filter(t => t.done).length;
  const total = OrrynData.tasks.length;
  const pct = Math.round(done / total * 100);

  const elDone = document.getElementById('tasks-done');
  const elTotal = document.getElementById('tasks-total');
  const elBar = document.getElementById('tasks-bar');
  if (elDone)  elDone.textContent  = done;
  if (elTotal) elTotal.textContent = total;
  if (elBar)   elBar.style.width   = pct + '%';
}

function updateRoutineStats() {
  const done  = OrrynData.habits.filter(h => h.done).length;
  const total = OrrynData.habits.length;
  const pct   = Math.round(done / total * 100);

  document.querySelectorAll('.routine-pct').forEach(el => el.textContent = pct + '%');
  document.querySelectorAll('.routine-done').forEach(el => el.textContent = done);
  document.querySelectorAll('.routine-total').forEach(el => el.textContent = total);
  const bar = document.getElementById('routine-bar');
  if (bar) bar.style.width = pct + '%';
}

function renderHabits() {
  const container = document.getElementById('habit-list');
  if (!container) return;
  container.innerHTML = '';
  OrrynData.habits.forEach(h => {
    const btn = document.createElement('button');
    btn.className = 'habit-row';
    btn.dataset.habitId = h.id;
    btn.innerHTML = `
      <span class="habit-check ${h.done ? 'done' : ''}">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="display:${h.done ? '' : 'none'}"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span class="habit-label ${h.done ? 'done' : ''}">${h.label}</span>
      <span class="habit-time">${h.time}</span>
    `;
    container.appendChild(btn);
  });
  bindHabitToggles();
}

/* ===== MODAL HELPER ===== */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
  });
}

/* ===== TOGGLE PERSO/PRO ===== */
/* Sort le toggle Perso/Pro de son coin et le place au centre, sous le header. */
function relocateToggleCentered() {
  const toggle = document.querySelector('.toggle-switch');
  if (!toggle || document.querySelector('.scope-bar')) return; // déjà déplacé
  const main = document.querySelector('.main-content');
  const header = main ? main.querySelector('header') : null;
  if (!main || !header) return;

  const bar = document.createElement('div');
  bar.className = 'scope-bar';
  toggle.parentNode.removeChild(toggle);
  bar.appendChild(toggle);
  // Insère la barre juste après le header
  header.insertAdjacentElement('afterend', bar);
}

function initToggle(onSwitch) {
  // Repositionne le toggle Perso/Pro au centre, dans une barre dédiée sous le header.
  relocateToggleCentered();

  const btns = document.querySelectorAll('.toggle-switch button');
  const indicator = document.querySelector('.toggle-indicator');
  if (!btns.length || !indicator) return;

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      indicator.classList.toggle('pro', i === 1);
      OrrynData.currentScope = i === 1 ? 'pro' : 'perso';
      document.body.classList.toggle('scope-pro', i === 1);
      if (typeof onSwitch === 'function') onSwitch(OrrynData.currentScope);
    });
  });
}
