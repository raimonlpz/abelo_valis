import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@react-three/fiber", "@react-three/drei", "react-merge-refs"],
  },
  server: {
    host: true,
  },
});
