import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // IMPORTANT pour Hostinger
  plugins: [vue()],
  server: {
    host: "127.0.0.1", // set to "0.0.0.0" to expose on LAN
    port: 3000,
  },
});
