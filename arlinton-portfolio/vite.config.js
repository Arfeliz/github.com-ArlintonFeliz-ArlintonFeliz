import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repository.endsWith('.github.io')
const base = process.env.GITHUB_ACTIONS
  ? isUserSite
    ? '/'
    : `/${repository}/`
  : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
