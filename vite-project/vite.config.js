import { defineConfig } from 'vite'
import path, { join } from 'path'
export default defineConfig({
  publicDir: 'public',
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
  },
  resolve: {
    // 配置
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  base: 'vite-project',
 
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    assetsInlineLimit: 4 * 1024,
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: join(__dirname, './index.html'),
        search: join(__dirname, './search.html'),
        detail: join(__dirname, './detail.html')
      },
      output: {
        chunkFileNames: 'js/[name]-[hash:8].js',
        entryFileNames: 'js/[name]-[hash:8].js',
        assetFileNames: chunkInfo => {
          const imageReg = /(png|jpeg|svg|webp)$/
          const [, ext] = path.basename(chunkInfo.name).split('.')
          if (ext === 'css') {
            return  `css/[name]-[hash:8].${ext}`
          } else if (imageReg.test(ext)) {
            return  `images/[name]-[hash:8].${ext}`
          }
          return  'assets/[name]-[hash:8].[ext]'
        }
      }
    }
  },
  
  server: {
    open: true,
    proxy: {
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    }
  }
})