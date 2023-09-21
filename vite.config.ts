import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

const ENV_PREFIX = 'APP';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react()
  ],
  server: {
    port: 30080,
    strictPort: true,
  },
  envPrefix: ENV_PREFIX,
})
