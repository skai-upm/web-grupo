// Common SKAI website behaviour and renderers.
// Section content is kept in team.js, vacancies.js, research.js and projects.js.

window.SKAI_DATA = window.SKAI_DATA || {};

let currentLang = localStorage.getItem('skai-lang') || 'es';
let vacancyFilter = 'all';

function sectionData(name) {
  return Array.isArray(window.SKAI_DATA[name]) ? window.SKAI_DATA[name] : [];
}

function resolveAssetUrl(url) {
  if (!url || /^(?:https?:|data:|blob:|\/)/i.test(url)) return url;
  if (window.SKAI_REMOTE_MODE && window.SKAI_REMOTE_BASE) {
    return window.SKAI_REMOTE_BASE + url.replace(/^\.\//, '');
  }
  return url;
}

function renderResearch() {
  const target = document.getElementById('researchList');
  if (!target) return;
  target.innerHTML = sectionData('research').map(item => `
    <article class="research-card">
      <h3>${currentLang === 'es' ? item.titleEs : item.titleEn}</h3>
      <p>${currentLang === 'es' ? item.descEs : item.descEn}</p>
      <div class="tags">${(item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    </article>`).join('');
}

function renderProjects() {
  const target = document.getElementById('projectGrid');
  if (!target) return;
  target.innerHTML = sectionData('projects').map(project => `
    <article class="project">
      <div class="project-meta">${currentLang === 'es' ? project.metaEs : project.metaEn}</div>
      <h3>${project.name}</h3>
      <p>${currentLang === 'es' ? project.descEs : project.descEn}</p>
      ${project.url ? `<a class="project-link" href="${project.url}" rel="noopener" target="_blank">${currentLang === 'es' ? project.linkEs : project.linkEn}</a>` : ''}
    </article>`).join('');
}

function renderTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  const missing = currentLang === 'es' ? 'No publicado' : 'Not publicly listed';
  const labels = currentLang === 'es'
    ? {office:'Despacho', email:'Correo', department:'Departamento', school:'Escuela / centro', university:'Universidad'}
    : {office:'Office', email:'Email', department:'Department', school:'School / centre', university:'University'};

  grid.innerHTML = sectionData('team').map(p => {
    const email = p.email ? `<a href="mailto:${p.email}">${p.email}</a>` : `<span class="missing">${missing}</span>`;
    const profileLink = (url, label, extraClass='') => url
      ? `<a class="profile-link ${extraClass}" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
      : `<span class="disabled profile-link ${extraClass}">${label}</span>`;
    const scholar = profileLink(p.scholar, 'Scholar', 'scholar');
    const linkedin = profileLink(p.linkedin, 'LinkedIn', 'linkedin');
    const orcid = profileLink(p.orcid, 'ORCID', 'orcid');
    const portal = profileLink(p.portal, currentLang === 'es' ? 'Portal científico' : 'Scientific profile', 'portal');
    const photo = resolveAssetUrl(p.photo);
    const visual = photo
      ? `<div class="avatar photo"><img src="${photo}" alt="${p.name}" loading="lazy"></div>`
      : `<div class="avatar">${p.initials || ''}</div>`;

    return `<article class="person">${visual}<div class="person-main"><h3>${p.name}${p.pi ? '<span class="pi">PI</span>' : ''}</h3><div class="role">${currentLang === 'es' ? p.roleEs : p.roleEn}</div><div class="person-details"><div class="person-detail"><strong>${labels.office}</strong><span>${p.office || missing}</span></div><div class="person-detail"><strong>${labels.email}</strong>${email}</div><div class="person-detail"><strong>${labels.department}</strong><span>${currentLang === 'es' ? p.departmentEs : p.departmentEn}</span></div><div class="person-detail"><strong>${labels.school}</strong><span>${currentLang === 'es' ? p.schoolEs : p.schoolEn}</span></div><div class="person-detail"><strong>${labels.university}</strong><span>${currentLang === 'es' ? p.universityEs : p.universityEn}</span></div></div><div class="person-links">${scholar}${linkedin}${orcid}${portal}</div></div></article>`;
  }).join('');
}

function typeLabel(v) {
  if (v.type === 'job') return currentLang === 'es' ? 'Trabajo' : 'Job';
  if (v.type === 'tfg') return currentLang === 'es' ? 'TFG' : 'BSc thesis';
  if (v.type === 'tfm') return currentLang === 'es' ? 'TFM' : 'MSc thesis';
  return currentLang === 'es' ? 'Doctorado' : 'PhD';
}

function mailLink(v) {
  const contact = v.contact || 'andreajesus.cimmino@upm.es';
  const subject = (currentLang === 'es' ? 'Interés en oportunidad SKAI: ' : 'Interest in SKAI opportunity: ') + v.code;
  return `mailto:${contact}?subject=${encodeURIComponent(subject)}`;
}

function renderVacancies() {
  const target = document.getElementById('vacancyList');
  if (!target) return;
  const list = sectionData('vacancies').filter(v => vacancyFilter === 'all' || v.type === vacancyFilter);
  target.innerHTML = list.map(v => `
    <article class="vacancy-card" data-type="${v.type}">
      <div class="vacancy-type"><span class="badge ${v.type}">${typeLabel(v)}</span><small>${v.code}</small></div>
      <div class="vacancy-body">
        <h3>${currentLang === 'es' ? v.titleEs : v.titleEn}</h3>
        <p>${currentLang === 'es' ? v.descEs : v.descEn}</p>
        <div class="vacancy-details"><span>▸ ${currentLang === 'es' ? v.levelEs : v.levelEn}</span><span>▸ ${currentLang === 'es' ? v.timeEs : v.timeEn}</span><span>▸ ${currentLang === 'es' ? (v.locationEs || 'Madrid / UPM') : (v.locationEn || 'Madrid / UPM')}</span></div>
      </div>
      <div class="vacancy-action"><a class="btn btn-primary" href="${mailLink(v)}">${currentLang === 'es' ? 'Me interesa' : 'I am interested'}</a></div>
    </article>`).join('');
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('skai-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es][data-en]').forEach(el => el.textContent = el.dataset[lang]);
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  const generalContact = document.getElementById('generalContact');
  if (generalContact) {
    generalContact.href = 'mailto:andreajesus.cimmino@upm.es?subject=' + encodeURIComponent(lang === 'es' ? 'Interés en colaborar con SKAI' : 'Interest in collaborating with SKAI');
  }

  renderResearch();
  renderProjects();
  renderTeam();
  renderVacancies();
}

function initWebsite() {
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
  document.querySelectorAll('.filter-btn').forEach(b => b.addEventListener('click', () => {
    vacancyFilter = b.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x === b));
    renderVacancies();
  }));

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => mainNav && mainNav.classList.remove('open')));

  setLanguage(currentLang);
}

initWebsite();
