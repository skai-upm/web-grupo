
const people=[
  {name:'Andrea Jesús Cimmino Arriaga',photo:'assets/images/andrea-cimmino.jpg',initials:'AC',pi:true,roleEs:'Profesor Permanente Laboral',roleEn:'Associate Professor',office:'1101',email:'andreajesus.cimmino@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)',scholar:'https://scholar.google.es/citations?user=_6U9WMcAAAAJ&hl=es&oi=ao',linkedin:'https://www.linkedin.com/in/andrea-cimmino-arriaga-64b6b9112',orcid:'https://orcid.org/0000-0002-1823-4484',portal:'https://portalcientifico.upm.es/es/ipublic/researcher/307657'},
  {name:'Joaquín Gayoso Cabada',photo:'assets/images/joaquin-gayoso.jpg',initials:'JG',roleEs:'Profesor Contratado Doctor',roleEn:'Associate Professor',office:'1105',email:'j.gayoso@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)',portal:'https://portalcientifico.upm.es/es/ipublic/researcher/333052', scholar:'https://scholar.google.es/citations?user=6sm-GZAAAAAJ&hl=es&oi=ao', linkedin:'https://www.linkedin.com/in/joaquin-gayoso-cabada-a5023530'},
  {name:'Jessica Díaz Fernández', photo:'assets/images/jessica-diaz.jpeg', initials:'JD',roleEs:'Profesora Titular de Universidad',roleEn:'Associate Professor',office:'1119',email:'yesica.diaz@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)', scholar:'https://scholar.google.es/citations?user=TNcH2uUAAAAJ&hl=es&oi=ao', portal:'https://portalcientifico.upm.es/es/ipublic/researcher/309450', linkedin:'https://www.linkedin.com/in/jessica-diaz-fernandez-1a519616/'},
  {name:'Virginia Díaz Barcos',photo:'assets/images/virginia-diaz.jpeg',initials:'VD',roleEs:'Profesora Contratada Doctora',roleEn:'Associate Professor',office:'Ed. B · planta 3',email:'virginia.diaz@upm.es',departmentEs:'Química y Tecnología de Alimentos',departmentEn:'Food Chemistry and Technology',schoolEs:'ETS de Ingeniería Agronómica, Alimentaria y de Biosistemas (ETSIAAB)',schoolEn:'School of Agricultural, Food and Biosystems Engineering (ETSIAAB)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)',portal:'https://portalcientifico.upm.es/es/ipublic/researcher/308852'},
  {name:'Rodrigo Mariño Andrés',photo:'assets/images/rodrigo-marino.jpg',initials:'RM',roleEs:'Profesor Permanente Laboral',roleEn:'Associate Professor',office:'4411',email:'rodrigo.marino@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)', scholar:'https://scholar.google.es/citations?user=jY17GykAAAAJ&hl=es&oi=sra', linkedin:'https://www.linkedin.com/in/rodrigo-mari%C3%B1o-andr%C3%A9s-7b8618126/'},
  {name:'María Navas Loro',photo:'assets/images/maria-navas.jpg',initials:'MN',roleEs:'Profesora Ayudante Doctora',roleEn:'Assistant Professor',office:'4120',email:'m.navas@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)',scholar:'https://scholar.google.com/citations?user=rshakekAAAAJ&hl=es',portal:'https://portalcientifico.upm.es/es/ipublic/researcher/311561', orcid='https://orcid.org/0000-0003-1011-5023', linkedin:'https://www.linkedin.com/in/mnavasloro'},
  {name:'Enrique Gutiérrez Álvarez',initials:'EG',roleEs:'Profesor Permanente Laboral',roleEn:'Associate Professor',office:'2003',email:'enrique.gutierrez.alvarez@upm.es',departmentEs:'Matemática Aplicada a las TIC (MATIC)',departmentEn:'Applied Mathematics to ICT (MATIC)',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)', portal:'https://portalcientifico.upm.es/es/ipublic/researcher/335868'},
  {name:'Sergio Gil Borrás',photo:'assets/images/sergio-gil.jpeg',initials:'SG',roleEs:'Profesor Permanente Laboral',roleEn:'Associate Professor',office:'4211',email:'sergio.gil@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)',portal:'https://portalcientifico.upm.es/es/ipublic/researcher/332149'},
  {name:'José Carlos Gamazo Real', photo:'assets/images/jc-gamazo.jpeg',initials:'JG',roleEs:'Profesor Permanente Laboral',roleEn:'Associate Professor',office:'4307',email:'josecarlos.gamazo@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)', portal:'https://portalcientifico.upm.es/es/ipublic/researcher/332873'},
  {name:'Javier García Martín',photo:'assets/images/javier-garcia.jpg',initials:'JG',roleEs:'Profesor Titular de Universidad',roleEn:'Associate Professor',office:'4418',email:'javier.garciam@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)', portal:'https://portalcientifico.upm.es/es/ipublic/researcher/309353'},
  {name:'Jorge Enrique Pérez Martínez',photo:'assets/images/jorge-enrique-perez.jpg',initials:'JP',roleEs:'Profesor Titular de Universidad',roleEn:'Associate Professor',office:'4416',email:'jorgeenrique.perez@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)',portal:'https://portalcientifico.upm.es/es/ipublic/researcher/304998', linkedin:'https://es.linkedin.com/in/jorge-enrique-p%C3%A9rez-mart%C3%ADnez-a833219b'},
  {name:'Javier Alegre Landaburu',initials:'JA',roleEs:'Estudiante de doctorado',roleEn:'PhD Student',office:'SKAI Laboratory',email:'javier.alegre.landaburu@upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)'},
  {name:'Borzou Ghorbani',initials:'CA',roleEs:'Estudiante de doctorado',roleEn:'PhD Student',office:'SKAI Laboratory',email:'"borzou.ghorbani@alumnos.upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)'},
  {name:'Covadonga Arias Fernández',initials:'CA',roleEs:'Estudiante de máster',roleEn:'Master\'s Student',office:'SKAI Laboratory',email:'covadonga.arias@alumnos.upm.es',departmentEs:'Sistemas Informáticos',departmentEn:'Computer Systems',schoolEs:'ETS de Ingeniería de Sistemas Informáticos (ETSISI)',schoolEn:'School of Computer Systems Engineering (ETSISI)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)'},
  {name:'Dana Annette Meyer',initials:'DM',roleEs:'Estudiante de grado',roleEn:'Bachelor Student',office:'SKAI Laboratory',email:'annette.meyer@upm.es',departmentEs:'Inteligencia Artificial',departmentEn:'Artificial Intelligence',schoolEs:'ETS de Ingenieros Informáticos (ETSIINF)',schoolEn:'School of Computer Science (ETSIINF)',universityEs:'Universidad Politécnica de Madrid (UPM)',universityEn:'Universidad Politécnica de Madrid (UPM)'}
];

const vacancies=[
  {
    type:'tfg',code:'TFG-AGENT-01',
    titleEs:'TFG: Asistente multiagente para explotación de grafos de conocimiento',
    titleEn:'BSc thesis: Multi-agent assistant for knowledge-graph exploitation',
    descEs:'Diseño de agentes especializados que colaboren para generar, consultar, enriquecer y validar un grafo de conocimiento mediante herramientas y LLMs.',
    descEn:'Design specialised agents that collaborate to build, query, enrich and validate a knowledge graph using tools and LLMs.',
    levelEs:'Grado en Informática o afín',levelEn:'Computer Science or related BSc',timeEs:'TFG',timeEn:'BSc thesis'
  },
  {
    type:'tfm',code:'TFM-DATA-01',
    titleEs:'TFM: Agentes inteligentes para gobernanza en espacios de datos',
    titleEn:'MSc thesis: Intelligent agents for governance in data spaces',
    descEs:'Prototipo de agentes que interpreten políticas, metadatos y acuerdos de uso para asistir en decisiones de acceso y compartición de datos.',
    descEn:'Prototype agents that interpret policies, metadata and usage agreements to assist data-access and sharing decisions.',
    levelEs:'Máster en IA, Software o Datos',levelEn:'MSc in AI, Software or Data',timeEs:'TFM',timeEn:'MSc thesis'
  },{
    type:'tfg',code:'TFG-AGENTIC-SW-01',
    titleEs:'TFG: Desarrollo agéntico de software',
    titleEn:'BSc thesis: Agentic Software Development',
    descEs:'Trabajo Fin de Grado centrado en el estudio y desarrollo de técnicas, herramientas y metodologías para el desarrollo de software basado en agentes inteligentes.',
    descEn:'Bachelor thesis focused on the study and development of techniques, tools and methodologies for software development based on intelligent agents.',
    levelEs:'Grado en Informática o afín',levelEn:'Computer Science or related BSc',timeEs:'TFG',timeEn:'BSc thesis'
  },
  {
    type:'tfm',code:'TFM-AGENTIC-SW-01',
    titleEs:'TFM: Desarrollo agéntico de software',
    titleEn:'MSc thesis: Agentic Software Development',
    descEs:'Trabajo Fin de Máster centrado en la investigación y desarrollo de técnicas, herramientas y metodologías para el desarrollo de software basado en agentes inteligentes.',
    descEn:'Master thesis focused on the research and development of techniques, tools and methodologies for software development based on intelligent agents.',
    levelEs:'Máster en Informática, Ingeniería del Software, Inteligencia Artificial o afín',levelEn:'MSc in Computer Science, Software Engineering, Artificial Intelligence or related field',timeEs:'TFM',timeEn:'MSc thesis'
  }
  
  
];
//{
//    type:'phd',code:'PHD-SEM-AI-01',
//    titleEs:'Tesis doctoral: Interoperabilidad semántica e IA confiable en ecosistemas distribuidos',
//    titleEn:'PhD: Semantic interoperability and trustworthy AI in distributed ecosystems',
//    descEs:'Línea doctoral sobre grafos de conocimiento, espacios de datos, políticas de uso y agentes inteligentes para ecosistemas interoperables.',
//    descEn:'PhD line on knowledge graphs, data spaces, usage policies and intelligent agents for interoperable ecosystems.',
//    levelEs:'Máster con interés investigador',levelEn:'Research-oriented MSc',timeEs:'Doctorado',timeEn:'PhD'
//  },

//{
//    type:'job',code:'JOB-KG-01',
//    titleEs:'Contrato de investigación: Knowledge Graphs, LLMs e interoperabilidad semántica',
//    titleEn:'Research position: Knowledge Graphs, LLMs and semantic interoperability',
//    descEs:'Desarrollo de pipelines para extracción de conocimiento, modelado semántico y validación de grafos en proyectos de datos e IA.',
//    descEn:'Development of pipelines for knowledge extraction, semantic modelling and knowledge-graph validation in data and AI projects.',
//    levelEs:'Graduado/a o Máster',levelEn:'BSc or MSc',timeEs:'Jornada completa',timeEn:'Full time'
//  }


let currentLang=localStorage.getItem('skai-lang')||'es';
let vacancyFilter='all';

function renderTeam(){
  const grid=document.getElementById('teamGrid');
  if(!grid) return;
  const missing=currentLang==='es'?'No publicado':'Not publicly listed';
  const labels=currentLang==='es'
    ? {office:'Despacho',email:'Correo',department:'Departamento',school:'Escuela / centro',university:'Universidad'}
    : {office:'Office',email:'Email',department:'Department',school:'School / centre',university:'University'};
  grid.innerHTML=people.map(p=>{
    const email=p.email?`<a href="mailto:${p.email}">${p.email}</a>`:`<span class="missing">${missing}</span>`;
    const profileLink=(url,label,extraClass='')=>url?`<a class="profile-link ${extraClass}" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`:`<span class="disabled profile-link ${extraClass}">${label}</span>`;
    const scholar=profileLink(p.scholar,'Scholar','scholar');
    const linkedin=profileLink(p.linkedin,'LinkedIn','linkedin');
    const orcid=profileLink(p.orcid,'ORCID','orcid');
    const portal=profileLink(p.portal,currentLang==='es'?'Portal científico':'Scientific profile','portal');
    const visual = p.photo ? `<div class=\"avatar photo\"><img src=\"${p.photo}\" alt=\"${p.name}\" loading=\"lazy\"></div>` : `<div class=\"avatar\">${p.initials}</div>`;
    return `<article class=\"person\">${visual}<div class=\"person-main\"><h3>${p.name}${p.pi?'<span class=\"pi\">PI</span>':''}</h3><div class=\"role\">${currentLang==='es'?p.roleEs:p.roleEn}</div><div class=\"person-details\"><div class=\"person-detail\"><strong>${labels.office}</strong><span>${p.office||missing}</span></div><div class=\"person-detail\"><strong>${labels.email}</strong>${email}</div><div class=\"person-detail\"><strong>${labels.department}</strong><span>${currentLang==='es'?p.departmentEs:p.departmentEn}</span></div><div class=\"person-detail\"><strong>${labels.school}</strong><span>${currentLang==='es'?p.schoolEs:p.schoolEn}</span></div><div class=\"person-detail\"><strong>${labels.university}</strong><span>${currentLang==='es'?p.universityEs:p.universityEn}</span></div></div><div class=\"person-links\">${scholar}${linkedin}${orcid}${portal}</div></div></article>`;
  }).join('');
}

function typeLabel(v){
  if(v.type==='job') return currentLang==='es'?'Trabajo':'Job';
  if(v.type==='tfg') return currentLang==='es'?'TFG':'BSc thesis';
  if(v.type==='tfm') return currentLang==='es'?'TFM':'MSc thesis';
  return currentLang==='es'?'Doctorado':'PhD';
}
function mailLink(v){
  const subject=(currentLang==='es'?'Interés en oportunidad SKAI: ':'Interest in SKAI opportunity: ')+v.code;
  return 'mailto:andreajesus.cimmino@upm.es?subject='+encodeURIComponent(subject);
}
function renderVacancies(){
  const target=document.getElementById('vacancyList');
  if(!target) return;
  const list=vacancies.filter(v=>vacancyFilter==='all'||v.type===vacancyFilter);
  target.innerHTML=list.map(v=>`<article class="vacancy-card" data-type="${v.type}"><div class="vacancy-type"><span class="badge ${v.type}">${typeLabel(v)}</span><small>${v.code}</small></div><div class="vacancy-body"><h3>${currentLang==='es'?v.titleEs:v.titleEn}</h3><p>${currentLang==='es'?v.descEs:v.descEn}</p><div class="vacancy-details"><span>▸ ${currentLang==='es'?v.levelEs:v.levelEn}</span><span>▸ ${currentLang==='es'?v.timeEs:v.timeEn}</span><span>▸ Madrid / UPM</span></div></div><div class="vacancy-action"><a class="btn btn-primary" href="${mailLink(v)}">${currentLang==='es'?'Me interesa':'I am interested'}</a><small>${currentLang==='es'?'Ejemplo de oferta':'Sample opportunity'}</small></div></article>`).join('');
}

function setLanguage(lang){
  currentLang=lang;
  localStorage.setItem('skai-lang',lang);
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-es][data-en]').forEach(el=>el.textContent=el.dataset[lang]);
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  const generalContact=document.getElementById('generalContact');
  if(generalContact){
    generalContact.href='mailto:andreajesus.cimmino@upm.es?subject='+encodeURIComponent(lang==='es'?'Interés en colaborar con SKAI':'Interest in collaborating with SKAI');
  }
  renderTeam();
  renderVacancies();
}

document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{
  vacancyFilter=b.dataset.filter;
  document.querySelectorAll('.filter-btn').forEach(x=>x.classList.toggle('active',x===b));
  renderVacancies();
}));
const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
if(menuToggle && mainNav) menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>mainNav && mainNav.classList.remove('open')));
setLanguage(currentLang);
