import react from "@vitejs/plugin-react";
import { checker } from "vite-plugin-checker";
import alias from "@rollup/plugin-alias";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  envDir: "./env",
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    alias({
      entries: {
        "@": path.resolve(__dirname, "./src"),
      },
    }),
  ],
});
