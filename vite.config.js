import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: 5173,
    proxy: {
      "/api": {
        target: "http://app:8080", 
        changeOrigin: true,
        secure: false,
      },
    }, 
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,  // Allows access from Docker
//     port: 5173,
//     // watch: {
//     //   usePolling: true, 
//     // },
//   },
// })
