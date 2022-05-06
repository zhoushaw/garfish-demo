import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    base: process.env.VITE_APP_BASE,
    server: {
      port: 3003,
      cors: true,
      origin: `http://localhost:3003`,
    },
    plugins: [
      vue(),
    ],
  });
};
