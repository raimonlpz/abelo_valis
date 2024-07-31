import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  optimizeDeps: {
    include: ["@react-three/fiber", "@react-three/drei", "react-merge-refs"],
  },
  server: {
    host: true,
  },
});
