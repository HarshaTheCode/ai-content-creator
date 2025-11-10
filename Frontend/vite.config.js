import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


 
// https://vite.dev/config/
export default defineConfig({
  
  server: {
   proxy: {
      '/users':'https://jsonplaceholder.typicode.com/'
    }
 },

  plugins: [react()],
})
