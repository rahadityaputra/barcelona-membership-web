import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'; // Impor modul 'fs'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // --- Konfigurasi HTTPS ---
    https: {
      key: fs.readFileSync('/home/rahadityaputra/certs/localhost+2-key.pem'),   // Sesuaikan path jika perlu
      cert: fs.readFileSync('/home/rahadityaputra/certs/localhost+2.pem')  // Sesuaikan path jika perlu
    }
  }
})

