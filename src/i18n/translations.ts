export type Locale = "es" | "ca" | "en" | "no"

export const LOCALES: Record<Locale, { label: string; flag: string }> = {
  es: { label: "Español", flag: "🇪🇸" },
  ca: { label: "Català", flag: "🏳️" },
  en: { label: "English", flag: "🇬🇧" },
  no: { label: "Norsk", flag: "🇳🇴" },
}

export interface NavItem {
  title: string
  label: string
  url: string
}

export interface HeroContent {
  badge: string
  name: string
  typedStrings: string[]
  description: string
  ctaLinkedin: string
  ctaGithub: string
  ctaEmail: string
  ctaCv: string
  available: string
}

export interface AboutContent {
  subtitle: string
  p1: string
  p2: string
  p3: string
  p4: string
  tag1: string
  tag2: string
  tag3: string
}

export interface ProjectItem {
  title: string
  short: string
  description: string
}

export interface ProjectsContent {
  showMore: string
  showLess: string
  sourceCode: string
  list: ProjectItem[]
}

export interface ExperienceItem {
  date: string
  title: string
  company: string
  description: string
  link?: string
}

export interface Translations {
  nav: NavItem[]
  hero: HeroContent
  about: AboutContent
  sections: {
    about: string
    skills: string
    projects: string
    experience: string
    learning: string
    contact: string
  }
  skills: {
    title: string
    subtitle: string
    categories: {
      title: string
      icon: string
    }[]
  }
  projects: ProjectsContent
  projectsList: ProjectItem[]
  experiences: ExperienceItem[]
  learning: {
    subtitle: string
    sourceCode: string
  }
  contact: {
    text: string
    email: string
    location: string
    formName: string
    formEmail: string
    formMessage: string
    formSubmit: string
    formPlaceholderName: string
    formPlaceholderEmail: string
    formPlaceholderMessage: string
  }
  footer: string
  knowMore: string
}

const es: Translations = {
  nav: [
    { title: "Inicio", label: "hero", url: "/#hero" },
    { title: "Sobre mí", label: "sobre-mi", url: "/#sobre-mi" },
    { title: "Skills", label: "skills", url: "/#skills" },
    { title: "Proyectos", label: "proyectos", url: "/#proyectos" },
    { title: "Experiencia", label: "experiencia", url: "/#experiencia" },
    { title: "Contacto", label: "contacto", url: "/#contacto" },
  ],
  hero: {
    badge: "Abierto a oportunidades",
    name: "Albert Llargués",
    typedStrings: [
      "Desarrollador Full Stack",
      "Creador de apps Android",
      "Entusiasta de la IA",
      "Ingeniero de software",
    ],
    description:
      "Desarrollador Full Stack con enfoque en backend escalable e integración de IA. Transformo ideas en soluciones digitales inteligentes. Actualmente en Trondheim, Noruega.",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "Email",
    ctaCv: "Descargar CV",
    available: "Disponible para nuevos proyectos",
  },
  about: {
    subtitle: "De la logística al código, una trayectoria de evolución constante.",
    p1: "Soy Albert, desarrollador Full Stack con un fuerte enfoque en backend escalable y tecnologías de inteligencia artificial. Actualmente vivo en Trondheim, Noruega, aunque nací y crecí en Barcelona.",
    p2: "Tras más de 10 años trabajando en transporte y logística, decidí dar un giro a mi carrera hacia el desarrollo de software, impulsado por una pasión de largo recorrido por la tecnología.",
    p3: "Tengo experiencia construyendo y desplegando aplicaciones full-stack con JavaScript (React, Node.js, Express) y Python para automatización e IA.",
    p4: "Mi trayectoria en logística y aduanas me ha dado una gran madurez profesional, capacidad de responsabilidad y atención al detalle — cualidades que ahora aplico para escribir código mantenible y colaborar en equipos técnicos.",
    tag1: "JavaScript / TypeScript",
    tag2: "Python / IA",
    tag3: "React / Astro",
  },
  sections: {
    about: "Sobre mí",
    skills: "Habilidades técnicas",
    projects: "Proyectos",
    experience: "Experiencia laboral",
    learning: "Formación y recursos",
    contact: "Contacto",
  },
  skills: {
    title: "Habilidades técnicas",
    subtitle: "",
    categories: [
      { title: "Lenguajes y Frameworks", icon: "⚡" },
      { title: "Bases de datos", icon: "🗄️" },
      { title: "Testing y APIs", icon: "🧪" },
      { title: "Cloud y DevOps", icon: "☁️" },
    ],
  },
  projects: {
    showMore: "Ver más",
    showLess: "Ver menos",
    sourceCode: "Código fuente",
    list: [],
  },
  projectsList: [
    {
      title: "E-Commerce Web App",
      short: "Backend escalable de e-commerce con autenticación, documentación de API y tests.",
      description: "Backend de e-commerce escalable diseñado para simular aplicaciones reales, incluyendo autenticación JWT, documentación con Swagger y pruebas automatizadas. API RESTful con Node.js y MySQL.",
    },
    {
      title: "Personal Finance Tracker",
      short: "App full-stack para finanzas personales con Python (FastAPI) y React.",
      description: "Aplicación web de finanzas personales para registrar ingresos, gastos y ahorros mensuales. Construida como herramienta familiar para entender hábitos de gasto y mejorar la planificación financiera.\n    • Backend FastAPI con endpoints RESTful\n    • Frontend React con hooks\n    • SQLite + SQLAlchemy Core\n    • Dashboard interactivo con gráficos\n    • Modelo 50/30/20 de gastos",
    },
    {
      title: "Peña Barcelonista i Trondheim",
      short: "Web app responsive para aficionados del FC Barcelona en Trondheim.",
      description: "Aplicación web comunitaria para seguidores del FC Barcelona en Trondheim.\n    • Autenticación y sesiones con Supabase Auth\n    • Perfiles y gestión de eventos en PostgreSQL\n    • Diseño responsive con Astro + React\n    • Modo oscuro/claro con transiciones\n    • Desplegado en Vercel",
    },
    {
      title: "PuntualApp",
      short: "App Android para control de asistencia con geolocalización y AWS.",
      description: "App Android para registro de entrada/salida de empleados con geolocalización.\n    • Google Maps API para geolocalización\n    • AWS Amplify + Cognito para autenticación\n    • Backend PHP en EC2 + MySQL\n    • Proyecto final del Grado en Desarrollo de Apps",
    },
    {
      title: "2D Videogame",
      short: "Videojuego arcade shooter con LibGDX y Kotlin.",
      description: "Videojuego 2D desarrollado con LibGDX y Kotlin en Android Studio.\n    • Jugabilidad 2D con colisiones, movimiento y disparos\n    • Música de fondo y efectos de sonido\n    • UI sencilla y pulida\n    • Desafíos por niveles",
    },
    {
      title: "HYROX Tracker",
      short: "App completa para atletas HYROX con entrenamiento, nutrición y rendimiento.",
      description: "Aplicación web diseñada específicamente para atletas de HYROX, la competición global de fitness.\n    • Seguimiento de entrenamientos con métricas detalladas\n    • Planificación de comidas y nutrición personalizada\n    • Dashboard de rendimiento con gráficos interactivos\n    • Leaderboard global y comparativa con otros atletas\n    • Autenticación con Supabase y pasarela de pago Stripe\n    • Diseño responsive con modo oscuro",
    },
  ],
  experiences: [
    {
      date: "Marzo 2026 - Actualidad",
      title: "Coordinador de Almacén",
      company: "Autronica Fire and Security AS",
      description:
        "Coordinación de envíos internacionales y gestión de comunicaciones con líderes de proyecto. Supervisión de la preservación de materiales, control de calidad mediante fotografía de producto y preparación de documentación de exportación.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "Mayo 2024 - Marzo 2026",
      title: "Almacenero",
      company: "Autronica Fire and Security AS",
      description:
        "Preparación de pedidos nacionales e internacionales, empaquetado, etiquetado y preparación para transporte. Conservación y mantenimiento de materiales, fotografía de producto para control de calidad y apoyo en la comunicación con líderes de proyecto para coordinar envíos especializados.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "Diciembre 2021 - Febrero 2024",
      title: "Operaciones",
      company: "Cencora - World Courier",
      description:
        "Gestión de transporte y despacho de aduanas para envíos de importación y exportación de productos farmacéuticos y de bioinvestigación.",
      link: "https://www.cencora.com/",
    },
    {
      date: "Abril 2013 - Marzo 2021",
      title: "Transporte y Logística",
      company: "Barcelona",
      description:
        "Más de 10 años de experiencia en el sector del transporte y la logística. Más información disponible en mi CV.",
      link: "/projects/CV%20-%20Albert%20Llargues.pdf",
    },
  ],
  learning: {
    subtitle:
      "Plataformas y mentores que han sido clave en mi formación como desarrollador.",
    sourceCode: "",
  },
  contact: {
    text: "¿Tienes un proyecto en mente, una oportunidad laboral o simplemente quieres conectar? Estoy siempre abierto a nuevos retos y colaboraciones.",
    email: "Email",
    location: "Trondheim, Noruega",
    formName: "Nombre",
    formEmail: "Email",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",
    formPlaceholderName: "Tu nombre",
    formPlaceholderEmail: "tu@email.com",
    formPlaceholderMessage: "Cuéntame sobre tu proyecto...",
  },
  footer: "Todos los derechos reservados.",
  knowMore: "Saber más",
}

const ca: Translations = {
  nav: [
    { title: "Inici", label: "hero", url: "/ca/#hero" },
    { title: "Sobre mi", label: "sobre-mi", url: "/ca/#sobre-mi" },
    { title: "Skills", label: "skills", url: "/ca/#skills" },
    { title: "Projectes", label: "projectes", url: "/ca/#projectes" },
    { title: "Experiència", label: "experiencia", url: "/ca/#experiencia" },
    { title: "Contacte", label: "contacte", url: "/ca/#contacte" },
  ],
  hero: {
    badge: "Obert a oportunitats",
    name: "Albert Llargués",
    typedStrings: [
      "Desenvolupador Full Stack",
      "Creador d'apps Android",
      "Entusiasta de la IA",
      "Enginyer de programari",
    ],
    description:
      "Desenvolupador Full Stack amb enfocament en backend escalable i integració d'IA. Transformo idees en solucions digitals intel·ligents. Actualment a Trondheim, Noruega.",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "Email",
    ctaCv: "Descarregar CV",
    available: "Disponible per a nous projectes",
  },
  about: {
    subtitle: "De la logística al codi, una trajectòria d'evolució constant.",
    p1: "Soc Albert, desenvolupador Full Stack amb un fort enfocament en backend escalable i tecnologies d'intel·ligència artificial. Actualment visc a Trondheim, Noruega, tot i que vaig néixer i em vaig criar a Barcelona.",
    p2: "Després de més de 10 anys treballant en transport i logística, vaig decidir fer un gir a la meva carrera cap al desenvolupament de programari, impulsat per una passió de llarg recorregut per la tecnologia.",
    p3: "Tinc experiència construint i desplegant aplicacions full-stack amb JavaScript (React, Node.js, Express) i Python per a automatització i IA.",
    p4: "La meva trajectòria en logística i duanes m'ha donat una gran maduresa professional, capacitat de responsabilitat i atenció al detall — qualitats que ara aplico per escriure codi mantenible i col·laborar en equips tècnics.",
    tag1: "JavaScript / TypeScript",
    tag2: "Python / IA",
    tag3: "React / Astro",
  },
  sections: {
    about: "Sobre mi",
    skills: "Habilitats tècniques",
    projects: "Projectes",
    experience: "Experiència laboral",
    learning: "Formació i recursos",
    contact: "Contacte",
  },
  skills: {
    title: "Habilitats tècniques",
    subtitle: "",
    categories: [
      { title: "Llenguatges i Frameworks", icon: "⚡" },
      { title: "Bases de dades", icon: "🗄️" },
      { title: "Testing i APIs", icon: "🧪" },
      { title: "Cloud i DevOps", icon: "☁️" },
    ],
  },
  projects: {
    showMore: "Veure més",
    showLess: "Veure menys",
    sourceCode: "Codi font",
    list: [],
  },
  projectsList: [
    {
      title: "E-Commerce Web App",
      short: "Backend escalable d'e-commerce amb autenticació, documentació d'API i tests.",
      description: "Backend d'e-commerce escalable dissenyat per simular aplicacions reals, incloent autenticació JWT, documentació amb Swagger i proves automatitzades. API RESTful amb Node.js i MySQL.",
    },
    {
      title: "Personal Finance Tracker",
      short: "App full-stack per a finances personals amb Python (FastAPI) i React.",
      description: "Aplicació web de finances personals per registrar ingressos, despeses i estalvis mensuals. Construïda com a eina familiar per entendre hàbits de despesa i millorar la planificació financera.\n    • Backend FastAPI amb endpoints RESTful\n    • Frontend React amb hooks\n    • SQLite + SQLAlchemy Core\n    • Dashboard interactiu amb gràfics\n    • Model 50/30/20 de despeses",
    },
    {
      title: "Peña Barcelonista i Trondheim",
      short: "Web app responsive per a aficionats del FC Barcelona a Trondheim.",
      description: "Aplicació web comunitària per a seguidors del FC Barcelona a Trondheim.\n    • Autenticació i sessions amb Supabase Auth\n    • Perfils i gestió d'esdeveniments a PostgreSQL\n    • Disseny responsive amb Astro + React\n    • Mode fosc/clar amb transicions\n    • Desplegat a Vercel",
    },
    {
      title: "PuntualApp",
      short: "App Android per a control d'assistència amb geolocalització i AWS.",
      description: "App Android per al registre d'entrada/sortida d'empleats amb geolocalització.\n    • Google Maps API per a geolocalització\n    • AWS Amplify + Cognito per a autenticació\n    • Backend PHP a EC2 + MySQL\n    • Projecte final del Grau en Desenvolupament d'Apps",
    },
    {
      title: "2D Videogame",
      short: "Videojoc arcade shooter amb LibGDX i Kotlin.",
      description: "Videojoc 2D desenvolupat amb LibGDX i Kotlin a Android Studio.\n    • Jugabilitat 2D amb col·lisions, moviment i trets\n    • Música de fons i efectes de so\n    • UI senzilla i polida\n    • Reptes per nivells",
    },
    {
      title: "HYROX Tracker",
      short: "App completa per a atletes HYROX amb entrenament, nutrició i rendiment.",
      description: "Aplicació web dissenyada específicament per a atletes de HYROX, la competició global de fitness.\n    • Seguiment d'entrenaments amb mètriques detallades\n    • Planificació de menjars i nutrició personalitzada\n    • Dashboard de rendiment amb gràfics interactius\n    • Leaderboard global i comparativa amb altres atletes\n    • Autenticació amb Supabase i passarel·la de pagament Stripe\n    • Disseny responsive amb mode fosc",
    },
  ],
  experiences: [
    {
      date: "Març 2026 - Actualitat",
      title: "Coordinador de Magatzem",
      company: "Autronica Fire and Security AS",
      description:
        "Coordinació d'enviaments internacionals i gestió de comunicacions amb líders de projecte. Supervisió de la preservació de materials, control de qualitat mitjançant fotografia de producte i preparació de documentació d'exportació.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "Maig 2024 - Març 2026",
      title: "Magatzemer",
      company: "Autronica Fire and Security AS",
      description:
        "Preparació de comandes nacionals i internacionals, empaquetatge, etiquetatge i preparació per al transport. Conservació i manteniment de materials, fotografia de producte per a control de qualitat i suport en la comunicació amb líders de projecte per coordinar enviaments especialitzats.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "Desembre 2021 - Febrer 2024",
      title: "Operacions",
      company: "Cencora - World Courier",
      description:
        "Gestió de transport i despatx de duanes per a enviaments d'importació i exportació de productes farmacèutics i de bioinvestigació.",
      link: "https://www.cencora.com/",
    },
    {
      date: "Abril 2013 - Març 2021",
      title: "Transport i Logística",
      company: "Barcelona",
      description:
        "Més de 10 anys d'experiència en el sector del transport i la logística. Més informació disponible al meu CV.",
      link: "/projects/CV%20-%20Albert%20Llargues.pdf",
    },
  ],
  learning: {
    subtitle:
      "Plataformes i mentors que han estat clau en la meva formació com a desenvolupador.",
    sourceCode: "",
  },
  contact: {
    text: "Tens un projecte al cap, una oportunitat laboral o simplement vols connectar? Estic sempre obert a nous reptes i col·laboracions.",
    email: "Email",
    location: "Trondheim, Noruega",
    formName: "Nom",
    formEmail: "Email",
    formMessage: "Missatge",
    formSubmit: "Enviar missatge",
    formPlaceholderName: "El teu nom",
    formPlaceholderEmail: "teu@email.com",
    formPlaceholderMessage: "Explica'm sobre el teu projecte...",
  },
  footer: "Tots els drets reservats.",
  knowMore: "Saber-ne més",
}

const en: Translations = {
  nav: [
    { title: "Home", label: "hero", url: "/en/#hero" },
    { title: "About", label: "about", url: "/en/#about" },
    { title: "Skills", label: "skills", url: "/en/#skills" },
    { title: "Projects", label: "projects", url: "/en/#projects" },
    { title: "Experience", label: "experience", url: "/en/#experience" },
    { title: "Contact", label: "contact", url: "/en/#contact" },
  ],
  hero: {
    badge: "Open to opportunities",
    name: "Albert Llargués",
    typedStrings: [
      "Full Stack Developer",
      "Android App Creator",
      "AI Enthusiast",
      "Software Engineer",
    ],
    description:
      "Full Stack Developer focused on scalable backend and AI integration. I turn ideas into intelligent digital solutions. Currently based in Trondheim, Norway.",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "Email",
    ctaCv: "Download CV",
    available: "Available for new projects",
  },
  about: {
    subtitle: "From logistics to code, a journey of constant evolution.",
    p1: "I'm Albert, a Full Stack Developer with a strong focus on scalable backend and artificial intelligence technologies. I currently live in Trondheim, Norway, although I was born and raised in Barcelona.",
    p2: "After more than 10 years working in transport and logistics, I decided to pivot my career into software development, driven by a long-standing passion for technology.",
    p3: "I have experience building and deploying full-stack applications with JavaScript (React, Node.js, Express) and Python for automation and AI.",
    p4: "My background in logistics and customs has given me great professional maturity, responsibility, and attention to detail — qualities I now apply to writing maintainable code and collaborating in technical teams.",
    tag1: "JavaScript / TypeScript",
    tag2: "Python / AI",
    tag3: "React / Astro",
  },
  sections: {
    about: "About me",
    skills: "Technical skills",
    projects: "Projects",
    experience: "Work experience",
    learning: "Learning & resources",
    contact: "Contact",
  },
  skills: {
    title: "Technical skills",
    subtitle: "",
    categories: [
      { title: "Languages & Frameworks", icon: "⚡" },
      { title: "Databases", icon: "🗄️" },
      { title: "Testing & APIs", icon: "🧪" },
      { title: "Cloud & DevOps", icon: "☁️" },
    ],
  },
  projects: {
    showMore: "Show more",
    showLess: "Show less",
    sourceCode: "Source code",
    list: [],
  },
  projectsList: [
    {
      title: "E-Commerce Web App",
      short: "Scalable e-commerce backend with authentication, API docs, and tests.",
      description: "A scalable e-commerce backend designed to simulate real-world applications, including JWT authentication, Swagger documentation, and automated testing. RESTful API built with Node.js and MySQL.",
    },
    {
      title: "Personal Finance Tracker",
      short: "Full-stack finance tracking app built with Python (FastAPI) and React.",
      description: "A personal finance web app for tracking monthly income, expenses, and savings. Built as a family tool to understand spending habits and improve financial planning.\n    • FastAPI backend with RESTful endpoints\n    • React frontend with hooks\n    • SQLite + SQLAlchemy Core\n    • Interactive dashboard with charts\n    • 50/30/20 budgeting model",
    },
    {
      title: "Peña Barcelonista i Trondheim",
      short: "Responsive web app for FC Barcelona fans in Trondheim.",
      description: "A community web application for FC Barcelona supporters in Trondheim.\n    • Authentication and sessions with Supabase Auth\n    • Profiles and event management in PostgreSQL\n    • Responsive design with Astro + React\n    • Dark/light theme with transitions\n    • Deployed on Vercel",
    },
    {
      title: "PuntualApp",
      short: "Android app for employee attendance with geolocation & AWS.",
      description: "Android app for employee clock-in/out with geolocation.\n    • Google Maps API for geolocation\n    • AWS Amplify + Cognito for authentication\n    • PHP backend on EC2 + MySQL\n    • Final project for App Development degree",
    },
    {
      title: "2D Videogame",
      short: "Arcade shooter game built with LibGDX and Kotlin.",
      description: "2D game developed with LibGDX and Kotlin in Android Studio.\n    • 2D gameplay with collisions, movement, and shooting\n    • Background music and SFX\n    • Clean, polished UI\n    • Level-based challenges",
    },
    {
      title: "HYROX Tracker",
      short: "Complete HYROX athlete app with training, nutrition, and performance tracking.",
      description: "A web application built specifically for HYROX athletes, the global fitness competition.\n    • Workout tracking with detailed metrics\n    • Meal planning and personalized nutrition\n    • Performance dashboard with interactive charts\n    • Global leaderboard and athlete comparison\n    • Supabase authentication and Stripe payment integration\n    • Responsive design with dark mode",
    },
  ],
  experiences: [
    {
      date: "March 2026 - Present",
      title: "Warehouse Coordinator",
      company: "Autronica Fire and Security AS",
      description:
        "Coordinating international shipments and managing communications with project leaders. Overseeing material preservation, quality control through product photography, and preparing export documentation.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "May 2024 - March 2026",
      title: "Warehouse Operative",
      company: "Autronica Fire and Security AS",
      description:
        "Preparing national and international orders, packaging, labeling, and dispatch coordination. Performed material preservation and maintenance, product photography for quality control, and supported communication with project leaders to coordinate specialized shipments.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "December 2021 - February 2024",
      title: "Operations",
      company: "Cencora - World Courier",
      description:
        "Managing transportation and customs clearance for import and export shipments of pharmaceutical and bio-research products.",
      link: "https://www.cencora.com/",
    },
    {
      date: "April 2013 - March 2021",
      title: "Transport & Logistics",
      company: "Barcelona",
      description:
        "Over 10 years of experience in the transport and logistics sector. More information available on my CV.",
      link: "/projects/CV%20-%20Albert%20Llargues.pdf",
    },
  ],
  learning: {
    subtitle:
      "Platforms and mentors that have been key in my development journey.",
    sourceCode: "",
  },
  contact: {
    text: "Got a project in mind, a job opportunity, or just want to connect? I'm always open to new challenges and collaborations.",
    email: "Email",
    location: "Trondheim, Norway",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    formPlaceholderName: "Your name",
    formPlaceholderEmail: "you@email.com",
    formPlaceholderMessage: "Tell me about your project...",
  },
  footer: "All rights reserved.",
  knowMore: "Learn more",
}

const no: Translations = {
  nav: [
    { title: "Hjem", label: "hero", url: "/no/#hero" },
    { title: "Om meg", label: "om-meg", url: "/no/#om-meg" },
    { title: "Ferdigheter", label: "ferdigheter", url: "/no/#ferdigheter" },
    { title: "Prosjekter", label: "prosjekter", url: "/no/#prosjekter" },
    { title: "Erfaring", label: "erfaring", url: "/no/#erfaring" },
    { title: "Kontakt", label: "kontakt", url: "/no/#kontakt" },
  ],
  hero: {
    badge: "Åpen for muligheter",
    name: "Albert Llargués",
    typedStrings: [
      "Full Stack Utvikler",
      "Android App Skaper",
      "AI Entusiast",
      "Programvareingeniør",
    ],
    description:
      "Full Stack-utvikler med fokus på skalerbar backend og AI-integrasjon. Jeg gjør ideer om til intelligente digitale løsninger. For tiden i Trondheim, Norge.",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "E-post",
    ctaCv: "Last ned CV",
    available: "Tilgjengelig for nye prosjekter",
  },
  about: {
    subtitle: "Fra logistikk til kode, en reise i konstant utvikling.",
    p1: "Jeg heter Albert, en Full Stack-utvikler med sterkt fokus på skalerbar backend og kunstig intelligens. Jeg bor for tiden i Trondheim, Norge, men er født og oppvokst i Barcelona.",
    p2: "Etter mer enn 10 år innen transport og logistikk, bestemte jeg meg for å bytte karriere til programvareutvikling, drevet av en langvarig lidenskap for teknologi.",
    p3: "Jeg har erfaring med å bygge og driftsette full-stack-applikasjoner med JavaScript (React, Node.js, Express) og Python for automatisering og AI.",
    p4: "Bakgrunnen min fra logistikk og toll har gitt meg stor profesjonell modenhet, ansvarsfølelse og oppmerksomhet på detaljer — egenskaper jeg nå bruker for å skrive vedlikeholdbar kode og samarbeide i tekniske team.",
    tag1: "JavaScript / TypeScript",
    tag2: "Python / AI",
    tag3: "React / Astro",
  },
  sections: {
    about: "Om meg",
    skills: "Tekniske ferdigheter",
    projects: "Prosjekter",
    experience: "Arbeidserfaring",
    learning: "Læring og ressurser",
    contact: "Kontakt",
  },
  skills: {
    title: "Tekniske ferdigheter",
    subtitle: "",
    categories: [
      { title: "Språk og rammeverk", icon: "⚡" },
      { title: "Databaser", icon: "🗄️" },
      { title: "Testing og APIer", icon: "🧪" },
      { title: "Sky og DevOps", icon: "☁️" },
    ],
  },
  projects: {
    showMore: "Vis mer",
    showLess: "Vis mindre",
    sourceCode: "Kildekode",
    list: [],
  },
  projectsList: [
    {
      title: "E-Commerce Web App",
      short: "Skalerbar e-handel backend med autentisering, API-dokumentasjon og tester.",
      description: "En skalerbar e-handel backend designet for å simulere virkelige applikasjoner, inkludert JWT-autentisering, Swagger-dokumentasjon og automatiserte tester. RESTful API bygget med Node.js og MySQL.",
    },
    {
      title: "Personal Finance Tracker",
      short: "Full-stack økonomi-app bygget med Python (FastAPI) og React.",
      description: "En personlig økonomi-webapp for å spore månedlig inntekt, utgifter og sparing. Bygget som et familieverktøy for å forstå forbruksvaner.\n    • FastAPI backend med RESTful-endepunkter\n    • React frontend med hooks\n    • SQLite + SQLAlchemy Core\n    • Interaktivt dashbord med diagrammer\n    • 50/30/20 budsjettmodell",
    },
    {
      title: "Peña Barcelonista i Trondheim",
      short: "Responsiv webapp for FC Barcelona-fans i Trondheim.",
      description: "En fellesskapswebapplikasjon for FC Barcelona-supportere i Trondheim.\n    • Autentisering og økter med Supabase Auth\n    • Profiler og arrangementer i PostgreSQL\n    • Responsivt design med Astro + React\n    • Mørk/lys tema med overganger\n    • Driftsatt på Vercel",
    },
    {
      title: "PuntualApp",
      short: "Android-app for ansattes oppmøte med geolokalisering og AWS.",
      description: "Android-app for ansattes inn/ut-stempling med geolokalisering.\n    • Google Maps API for geolokalisering\n    • AWS Amplify + Cognito for autentisering\n    • PHP-backend på EC2 + MySQL\n    • Sluttprosjekt for apputviklingsgrad",
    },
    {
      title: "2D Videogame",
      short: "Arkadespill bygget med LibGDX og Kotlin.",
      description: "2D-spill utviklet med LibGDX og Kotlin i Android Studio.\n    • 2D-spill med kollisjoner, bevegelse og skyting\n    • Bakgrunnsmusikk og lydeffekter\n    • Rent og polert grensesnitt\n    • Nivåbaserte utfordringer",
    },
    {
      title: "HYROX Tracker",
      short: "Komplett HYROX-app for trening, ernæring og ytelsesanalyse.",
      description: "En webapplikasjon bygget spesifikt for HYROX-utøvere, den globale fitnesskonkurransen.\n    • Treningslogging med detaljerte målinger\n    • Måltidsplanlegging og personlig tilpasset ernæring\n    • Ytelsesdashboard med interaktive diagrammer\n    • Global ledertavle og sammenligning med andre utøvere\n    • Supabase-autentisering og Stripe-betaling\n    • Responsivt design med mørk modus",
    },
  ],
  experiences: [
    {
      date: "Mars 2026 - Nåværende",
      title: "Lagerkoordinator",
      company: "Autronica Fire and Security AS",
      description:
        "Koordinering av internasjonale forsendelser og kommunikasjon med prosjektledere. Tilsyn med materialkonservering, kvalitetskontroll gjennom produktfotografering og klargjøring av eksportdokumentasjon.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "Mai 2024 - Mars 2026",
      title: "Lagermedarbeider",
      company: "Autronica Fire and Security AS",
      description:
        "Forberedelse av nasjonale og internasjonale ordre, pakking, merking og klargjøring for transport. Konservering og vedlikehold av materialer, produktfotografering for kvalitetskontroll og støtte i kommunikasjon med prosjektledere for å koordinere spesialiserte forsendelser.",
      link: "https://www.autronicafire.com/en/",
    },
    {
      date: "Desember 2021 - Februar 2024",
      title: "Operasjoner",
      company: "Cencora - World Courier",
      description:
        "Håndtering av transport og tollklarering for import- og eksportforsendelser av farmasøytiske og bioforskningsprodukter.",
      link: "https://www.cencora.com/",
    },
    {
      date: "April 2013 - Mars 2021",
      title: "Transport og Logistikk",
      company: "Barcelona",
      description:
        "Over 10 års erfaring innen transport- og logistikksektoren. Mer informasjon finnes i min CV.",
      link: "/projects/CV%20-%20Albert%20Llargues.pdf",
    },
  ],
  learning: {
    subtitle:
      "Plattformer og mentorer som har vært nøkkelen i min utviklingsreise.",
    sourceCode: "",
  },
  contact: {
    text: "Har du et prosjekt i tankene, en jobbmulighet, eller bare lyst til å koble på? Jeg er alltid åpen for nye utfordringer og samarbeid.",
    email: "E-post",
    location: "Trondheim, Norge",
    formName: "Navn",
    formEmail: "E-post",
    formMessage: "Melding",
    formSubmit: "Send melding",
    formPlaceholderName: "Ditt navn",
    formPlaceholderEmail: "din@epost.no",
    formPlaceholderMessage: "Fortell meg om prosjektet ditt...",
  },
  footer: "Alle rettigheter forbeholdt.",
  knowMore: "Les mer",
}

export const translations: Record<Locale, Translations> = { es, ca, en, no }
