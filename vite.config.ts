import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repository-name>/.
  base: process.env.GITHUB_ACTIONS ? '/mortgages-roadmap/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        broker: fileURLToPath(new URL('./broker/index.html', import.meta.url)),
        bdm: fileURLToPath(new URL('./bdm/index.html', import.meta.url)),
      },
    },
  },
})
