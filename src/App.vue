<script setup lang="ts">
import mijaFoto from './assets/mijaca.jpeg'

const navItems = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' }
]

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Vue.js', level: 88 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 }
]

const experiences = [
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

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico con carrito de compras, pagos integrados y panel de administración.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    demo: '#',
    github: '#'
  },
  {
    title: 'AI Chat Assistant',
    description: 'Asistente de chat con inteligencia artificial, procesamiento de lenguaje natural y respuestas contextuales.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Vue.js'],
    demo: '#',
    github: '#'
  }
]

const socialLinks = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
  { name: 'Email', icon: 'email', url: 'mailto:tu@email.com' }
]
</script>

<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="nav-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">MJ</span>
          <span class="logo-bracket">/&gt;</span>
        </a>
        <ul class="nav-menu">
          <li v-for="item in navItems" :key="item.label">
            <a :href="item.href" class="nav-link">{{ item.label }}</a>
          </li>
        </ul>
        <a href="/cv.pdf" class="btn btn-primary nav-cta" download>
          <span class="btn-icon">↓</span>
          Descargar CV
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-greeting">¡Hola! 👋 Soy</p>
          <h1 class="hero-title">Miguel Jaramillo</h1>
          <h2 class="hero-subtitle">
            <span class="gradient-text">Desarrollador Full Stack</span>
          </h2>
          <p class="hero-description">
            Apasionado por crear experiencias digitales excepcionales. 
            Especializado en construir aplicaciones web modernas, 
            escalables y con interfaces intuitivas.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">
              Ver Proyectos
              <span class="btn-arrow">→</span>
            </a>
            <a href="#contact" class="btn btn-outline">
              Contactar
            </a>
          </div>
          <div class="hero-social">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              class="social-link"
              :title="social.name"
              target="_blank"
            >
              <span v-if="social.icon === 'github'">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </span>
              <span v-else-if="social.icon === 'linkedin'">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <span v-else-if="social.icon === 'twitter'">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </span>
              <span v-else-if="social.icon === 'email'">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </span>
            </a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-wrapper">
            <div class="image-glow"></div>
            <img :src="mijaFoto" alt="Miguel Jaramillo" class="profile-photo" />
            <div class="image-ring"></div>
          </div>
          <div class="floating-badge badge-1">
            <span class="badge-icon">💻</span>
            <span class="badge-text">+5 años exp.</span>
          </div>
          <div class="floating-badge badge-2">
            <span class="badge-icon">🚀</span>
            <span class="badge-text">+20 proyectos</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Scroll</span>
        <div class="scroll-indicator"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Conóceme</span>
          <h2 class="section-title">Sobre Mí</h2>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>
              Soy un desarrollador apasionado por la tecnología y la innovación. 
              Me especializo en crear soluciones digitales que combinan diseño 
              atractivo con funcionalidad robusta.
            </p>
            <p>
              Con más de 5 años de experiencia en el desarrollo web, he trabajado 
              en proyectos de diversos sectores, desde startups hasta empresas 
              consolidadas. Mi enfoque se centra en escribir código limpio, 
              mantenible y escalable.
            </p>
            <p>
              Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
              contribuir a proyectos open source y compartir conocimientos con 
              la comunidad de desarrolladores.
            </p>
          </div>
          <div class="skills-container">
            <h3 class="skills-title">Habilidades Técnicas</h3>
            <div class="skills-grid">
              <div v-for="skill in skills" :key="skill.name" class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Mi Trayectoria</span>
          <h2 class="section-title">Experiencia</h2>
        </div>
        <div class="timeline">
          <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-period">{{ exp.period }}</span>
              <h3 class="timeline-role">{{ exp.role }}</h3>
              <h4 class="timeline-company">{{ exp.company }}</h4>
              <p class="timeline-description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Mi Trabajo</span>
          <h2 class="section-title">Proyectos Destacados</h2>
        </div>
        <div class="projects-grid">
          <article v-for="project in projects" :key="project.title" class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <a :href="project.demo" class="project-link" title="Ver Demo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a :href="project.github" class="project-link" title="Ver Código">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Hablemos</span>
          <h2 class="section-title">Contacto</h2>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <p class="contact-text">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? 
              No dudes en contactarme. Estoy siempre abierto a nuevas 
              oportunidades y colaboraciones.
            </p>
            <a href="mailto:tu@email.com" class="contact-email">
              tu@email.com
            </a>
            <div class="contact-social">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                class="social-link-large"
                target="_blank"
              >
                <span v-if="social.icon === 'github'">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                <span v-else-if="social.icon === 'linkedin'">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <span v-else-if="social.icon === 'twitter'">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </span>
                <span v-else-if="social.icon === 'email'">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <span class="social-name">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <a href="#" class="footer-logo">
            <span class="logo-bracket">&lt;</span>
            <span class="logo-text">MJ</span>
            <span class="logo-bracket">/&gt;</span>
          </a>
          <p class="footer-text">
            Diseñado y desarrollado con 💜 por Miguel Jaramillo
          </p>
          <p class="footer-copyright">
            © {{ new Date().getFullYear() }} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ===== CSS Variables ===== */
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-tertiary: #1a1a25;
  --bg-card: #15151f;
  
  --text-primary: #e4e4e7;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  --accent-primary: #8b5cf6;
  --accent-secondary: #6366f1;
  --accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%);
  
  --border-color: rgba(139, 92, 246, 0.1);
  --border-hover: rgba(139, 92, 246, 0.3);
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(139, 92, 246, 0.15);
  
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* ===== Base Styles ===== */
.app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  padding: 8px 16px;
  background: var(--accent-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

/* ===== Navigation ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-bracket {
  color: var(--accent-primary);
}

.logo-text {
  color: var(--text-primary);
}

.nav-menu {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  padding: 10px 18px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-tertiary);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--accent-gradient);
  color: white;
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 60px rgba(139, 92, 246, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-hover);
}

.btn-outline:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
}

.btn-arrow {
  transition: transform var(--transition-fast);
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-icon {
  font-size: 16px;
}

/* ===== Hero Section ===== */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 24px 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99, 102, 241, 0.1), transparent);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-greeting {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.hero-title {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 16px;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 600;
  margin: 0 0 24px;
}

.gradient-text {
  background: var(--accent-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.hero-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Hero Image */
.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid var(--bg-tertiary);
}

.image-glow {
  position: absolute;
  inset: -20px;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(40px);
  z-index: 0;
  animation: pulse 4s ease-in-out infinite;
}

.image-ring {
  position: absolute;
  inset: -15px;
  border: 2px dashed var(--accent-primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: spin 20s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
  animation: float 3s ease-in-out infinite;
}

.badge-1 {
  top: 20px;
  right: -20px;
  animation-delay: 0s;
}

.badge-2 {
  bottom: 40px;
  left: -30px;
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.badge-icon {
  font-size: 20px;
}

.badge-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-indicator {
  width: 24px;
  height: 40px;
  border: 2px solid var(--border-hover);
  border-radius: 12px;
  position: relative;
}

.scroll-indicator::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 2px;
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% { top: 8px; opacity: 1; }
  50% { top: 20px; opacity: 0.3; }
}

/* ===== About Section ===== */
.about {
  background: var(--bg-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.skills-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item {
  background: var(--bg-card);
  padding: 20px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.skill-name {
  font-weight: 600;
  color: var(--text-primary);
}

.skill-level {
  color: var(--accent-primary);
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--accent-gradient);
  border-radius: var(--radius-full);
  transition: width 1s ease;
}

/* ===== Experience Section ===== */
.timeline {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent);
}

.timeline-item {
  position: relative;
  padding-bottom: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -40px;
  top: 6px;
  width: 16px;
  height: 16px;
  background: var(--accent-gradient);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
  box-shadow: var(--shadow-glow);
}

.timeline-content {
  background: var(--bg-card);
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.timeline-content:hover {
  border-color: var(--border-hover);
  transform: translateX(8px);
}

.timeline-period {
  display: inline-block;
  padding: 6px 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 12px;
}

.timeline-role {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 6px;
  color: var(--text-primary);
}

.timeline-company {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0 0 12px;
}

.timeline-description {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

/* ===== Projects Section ===== */
.projects {
  background: var(--bg-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.project-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.project-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-hover);
  border-radius: 50%;
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.project-link:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: scale(1.1);
}

.project-link svg {
  width: 22px;
  height: 22px;
}

.project-info {
  padding: 28px;
}

.project-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text-primary);
}

.project-description {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 20px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  padding: 6px 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-primary);
}

/* ===== Contact Section ===== */
.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-text {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.contact-email {
  display: inline-block;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  background: var(--accent-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  transition: opacity var(--transition-fast);
}

.contact-email:hover {
  opacity: 0.8;
}

.contact-social {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.social-link-large {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-link-large:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.social-link-large svg {
  width: 20px;
  height: 20px;
}

.social-name {
  font-weight: 600;
  font-size: 14px;
}

/* ===== Footer ===== */
.footer {
  padding: 40px 0;
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.footer-logo {
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
}

.footer-text {
  font-size: 15px;
  color: var(--text-secondary);
  margin: 0;
}

.footer-copyright {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-text {
    order: 2;
  }
  
  .hero-image {
    order: 1;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-social {
    justify-content: center;
  }
  
  .image-wrapper {
    width: 280px;
    height: 280px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .nav-menu {
    display: none;
  }
  
  .nav-cta {
    display: none;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 60px 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .floating-badge {
    display: none;
  }
  
  .hero-scroll {
    display: none;
  }
}
</style>
