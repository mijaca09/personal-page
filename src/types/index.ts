// Types for the portfolio application

export interface NavItem {
  label: string
  href: string
}

export interface Skill {
  name: string
  level: number
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demo: string
  github: string
}

export interface SocialLink {
  name: string
  icon: 'github' | 'linkedin' | 'twitter' | 'email'
  url: string
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type IconName = 'github' | 'linkedin' | 'twitter' | 'email' | 'external' | 'download' | 'arrow-right'

export type Locale = 'es' | 'en'
