import { ref, onMounted } from 'vue'

export interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  languages: string[]
}

const GITHUB_USERNAME = 'mijaca09'

// Repos you want to show in the portfolio (add/remove names here)
const SELECTED_REPOS = [
  'gestor_de_tareas',
  'buscador_peliculas'
]

// Map language/technology names to devicon icon names
const LANG_TO_DEVICON: Record<string, string> = {
  // Languages
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'HTML': 'html5',
  'CSS': 'css3',
  'SCSS': 'sass',
  'Sass': 'sass',
  'Python': 'python',
  'Java': 'java',
  'Go': 'go',
  'Rust': 'rust',
  'Ruby': 'ruby',
  'PHP': 'php',
  'C++': 'cplusplus',
  'C': 'c',
  'C#': 'csharp',
  'Shell': 'bash',
  'Dart': 'dart',
  'Kotlin': 'kotlin',
  'Swift': 'swift',
  'R': 'r',
  'Lua': 'lua',
  'Perl': 'perl',
  'Scala': 'scala',
  'Elixir': 'elixir',
  'Haskell': 'haskell',
  'Dockerfile': 'docker',
  // Frameworks & tools
  'Vue.js': 'vuejs',
  'React': 'react',
  'Node.js': 'nodejs',
  'Angular': 'angular',
  'Svelte': 'svelte',
  'Next.js': 'nextjs',
  'Nuxt.js': 'nuxtjs',
  'NestJS': 'nestjs',
  'Express': 'express',
  'Django': 'django',
  'Flask': 'flask',
  'Spring': 'spring',
  'Laravel': 'laravel',
  'Rails': 'rails',
  'Docker': 'docker',
  'Kubernetes': 'kubernetes',
  'AWS': 'amazonwebservices',
  'Firebase': 'firebase',
  'MongoDB': 'mongodb',
  'PostgreSQL': 'postgresql',
  'MySQL': 'mysql',
  'Redis': 'redis',
  'GraphQL': 'graphql',
  'Git': 'git',
  'Tailwind': 'tailwindcss',
  'Bootstrap': 'bootstrap',
  'Figma': 'figma',
  'Linux': 'linux',
}

export function getDeviconUrl(language: string): string {
  const icon = LANG_TO_DEVICON[language]
  if (!icon) return ''
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`
}

export function useGitHubRepos() {
  const repos = ref<GitHubRepo[]>([])
  const loading = ref(true)
  const error = ref(false)

  async function fetchLanguages(repoName: string): Promise<string[]> {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
      )
      if (!response.ok) return []
      const data: Record<string, number> = await response.json()
      // Return languages sorted by bytes (most used first)
      return Object.keys(data).sort((a, b) => (data[b] ?? 0) - (data[a] ?? 0))
    } catch {
      return []
    }
  }

  async function fetchRepos() {
    loading.value = true
    error.value = false

    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=public`
      )

      if (!response.ok) throw new Error('Failed to fetch repos')

      const data: GitHubRepo[] = await response.json()

      // Filter only selected repos
      let filtered = data.filter(repo => SELECTED_REPOS.includes(repo.name))

      // Sort by the order in SELECTED_REPOS
      filtered.sort((a, b) => {
        return SELECTED_REPOS.indexOf(a.name) - SELECTED_REPOS.indexOf(b.name)
      })

      // Fetch languages for each repo in parallel
      const withLanguages = await Promise.all(
        filtered.map(async (repo) => {
          const languages = await fetchLanguages(repo.name)
          return { ...repo, languages }
        })
      )

      repos.value = withLanguages
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchRepos)

  return {
    repos,
    loading,
    error,
    refetch: fetchRepos
  }
}
