export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      downloadCv: 'Descargar CV'
    },
    hero: {
      greeting: '¡Hola! 👋 Soy',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
      scroll: 'Scroll',
      role: 'Desarrollador Full Stack',
      description: `Apasionado por crear experiencias digitales excepcionales. 
    Especializado en construir aplicaciones web modernas, 
    escalables y con interfaces intuitivas.`,
      yearsExperience: '+5 años exp.',
      projectsCount: '+20 proyectos'
    },
    about: {
      tag: 'Conóceme',
      title: 'Sobre Mí',
      skillsTitle: 'Habilidades Técnicas',
      paragraphs: [
        `Soy Miguel Ángel Jaramillo, desarrollador Full-Stack de 22 años basado en Medellín, Colombia. Mi camino en el desarrollo web comenzó de manera autodidacta bajo la mentoría de un ingeniero de sistemas senior con más de 9 años de experiencia, lo que me permitió aprender no solo tecnologías, sino también las mejores prácticas de la industria desde el inicio.`,
        `Actualmente curso Desarrollo de Software e Infraestructura mientras continúo expandiendo mis habilidades de forma independiente. Me especializo en crear interfaces de usuario modernas y responsivas con React y Vue.js, aplicando metodologías como Atomic Design, y tengo conocimientos sólidos en backend.`
      ]
    },
    experience: {
      tag: 'Mi Trayectoria',
      title: 'Experiencia',
      items: [
        {
          role: 'Desarrollador Full-Stack',
          company: 'Tienda Mia',
          period: 'Octubre 2024',
          description: 'Desarrollo de componentes front-end con React + TypeScript + Sass. Implementación de diseño basado en Atomic Design desde mockups de Figma. Creación de interfaces responsivas siguiendo principios de diseño modular.'
        },
        {
          role: 'Desarrollador Full-Stack',
          company: 'Koltin',
          period: 'Septiembre 2024',
          description: 'Desarrollo de componentes front-end con Vue.js + JavaScript + Tailwind CSS. Optimización de diseño responsivo para mejorar velocidad de conexión a la API. Implementación de diseños diferenciados para mobile y desktop con metodología Atomic Design.'
        }
      ]
    },
    projects: {
      tag: 'Mi Trabajo',
      title: 'Mis Proyectos',
      demoTitle: 'Ver Demo',
      codeTitle: 'Ver Código',
      noDescription: 'Sin descripción disponible.',
      loading: 'Cargando proyectos...',
      error: 'No se pudieron cargar los proyectos.',
      retry: 'Reintentar'
    },
    contact: {
      tag: 'Hablemos',
      title: 'Contacto',
      text: '¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en escribirme.'
    },
    footer: {
      madeWith: 'Diseñado y desarrollado con 💜 por',
      rights: 'Todos los derechos reservados.'
    },
    cvModal: {
      title: '¿En qué idioma deseas el CV?',
      spanish: 'Español',
      english: 'Inglés',
      cancel: 'Cancelar'
    }
  },
  en: {
    nav: {
      about: 'About me',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV'
    },
    hero: {
      greeting: 'Hi! 👋 I\'m',
      viewProjects: 'View Projects',
      contact: 'Contact me',
      scroll: 'Scroll',
      role: 'Full Stack Developer',
      description: `Passionate about creating exceptional digital experiences. 
    Specialized in building modern, scalable web applications 
    with intuitive interfaces.`,
      yearsExperience: '+5 years exp.',
      projectsCount: '+20 projects'
    },
    about: {
      tag: 'Get to know me',
      title: 'About Me',
      skillsTitle: 'Technical Skills',
      paragraphs: [
        `I'm Miguel Ángel Jaramillo, a 22-year-old Full-Stack developer based in Medellín, Colombia. My journey in web development started as a self-taught developer under the mentorship of a senior systems engineer with over 9 years of experience, which allowed me to learn not only technologies but also industry best practices from the very beginning.`,
        `I'm currently studying Software Development and Infrastructure while continuing to expand my skills independently. I specialize in building modern and responsive user interfaces with React and Vue.js, applying methodologies like Atomic Design, and I have solid backend knowledge.`
      ]
    },
    experience: {
      tag: 'My Journey',
      title: 'Experience',
      items: [
        {
          role: 'Full-Stack Developer',
          company: 'Tienda Mia',
          period: 'October 2024',
          description: 'Developed front-end components using React + TypeScript + Sass. Implemented design based on Atomic Design methodology from Figma mockups. Created responsive interfaces following modular design principles.'
        },
        {
          role: 'Full-Stack Developer',
          company: 'Koltin',
          period: 'September 2024',
          description: 'Developed front-end components with Vue.js + JavaScript + Tailwind CSS. Optimized responsive design with JavaScript to improve API connection speed. Implemented differentiated designs for mobile and desktop using Atomic Design methodology.'
        }
      ]
    },
    projects: {
      tag: 'My Work',
      title: 'My Projects',
      demoTitle: 'View Demo',
      codeTitle: 'View Code',
      noDescription: 'No description available.',
      loading: 'Loading projects...',
      error: 'Could not load projects.',
      retry: 'Retry'
    },
    contact: {
      tag: 'Let\'s Talk',
      title: 'Contact',
      text: 'Have a project in mind or just want to say hi? Feel free to reach out.'
    },
    footer: {
      madeWith: 'Designed and developed with 💜 by',
      rights: 'All rights reserved.'
    },
    cvModal: {
      title: 'In which language do you want the CV?',
      spanish: 'Spanish',
      english: 'English',
      cancel: 'Cancel'
    }
  }
} as const
