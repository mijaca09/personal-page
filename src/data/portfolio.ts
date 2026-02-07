import type { NavItem, Skill, Experience, SocialLink } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' }
]

export const skills: Skill[] = [
  { name: 'JavaScript', level: 0 },
  { name: 'TypeScript', level: 0 },
  { name: 'Vue.js', level: 0 },
  { name: 'React', level: 0 },
  { name: 'Node.js', level: 0 },
  { name: 'NestJS', level: 0 },
  { name: 'Python', level: 0 },
  { name: 'HTML', level: 0 },
  { name: 'CSS', level: 0 },
  { name: 'Tailwind', level: 0 },
  { name: 'Docker', level: 0 },
  { name: 'Git', level: 0 }
]

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web modernas con Vue.js y React.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Inc.',
    period: '2021 - 2023',
    description: 'Desarrollo full stack con Node.js, Vue.js y bases de datos SQL/NoSQL.'
  },
  {
    role: 'Junior Developer',
    company: 'Digital Agency',
    period: '2019 - 2021',
    description: 'Desarrollo de sitios web y aplicaciones móviles híbridas.'
  }
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/mijaca09' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/miguel-%C3%A1ngel-jaramillo-camacho-173a442a7/' },
  { name: 'Email', icon: 'email', url: 'mailto:mijacawork@gmail.com' }
]

export const personalInfo = {
  name: 'Miguel Jaramillo',
  role: 'Desarrollador Full Stack',
  email: 'mijacawork@gmail.com',
  greeting: '¡Hola! 👋 Soy',
  description: `Apasionado por crear experiencias digitales excepcionales. 
    Especializado en construir aplicaciones web modernas, 
    escalables y con interfaces intuitivas.`,
  aboutMe: [
    `Soy un desarrollador apasionado por la tecnología y la innovación. 
     Me especializo en crear soluciones digitales que combinan diseño 
     atractivo con funcionalidad robusta.`,
    `Con más de 5 años de experiencia en el desarrollo web, he trabajado 
     en proyectos de diversos sectores, desde startups hasta empresas 
     consolidadas. Mi enfoque se centra en escribir código limpio, 
     mantenible y escalable.`,
    `Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
     contribuir a proyectos open source y compartir conocimientos con 
     la comunidad de desarrolladores.`
  ],
  stats: {
    yearsExperience: '+5 años exp.',
    projectsCount: '+20 proyectos'
  }
}
