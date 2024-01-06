import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@atoms': path.resolve('./src/components/atoms'),
      '@molecules': path.resolve('./src/components/molecules'),
      '@templates': path.resolve('./src/components/templates'),
      '@pages': path.resolve('./src/pages'),
      '@constants': path.resolve('./src/constants'),
      '@hooks': path.resolve('./src/hooks'),
      '@interfaces': path.resolve('./src/interfaces'),
      '@services': path.resolve('./src/services'),
      '@apis': path.resolve('./src/apis'),
      '@helpers': path.resolve('./src/helpers'),
      '@config': path.resolve('./src/config'),
      '@redux': path.resolve('./src/redux'),
      '@app': path.resolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "@app/assets/styles/_variable.scss";`,
      },
    },
  },
  plugins: [react()],
});
