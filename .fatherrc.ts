import { defineConfig } from "father";
const path = require("path");

const isProduction = process.env.NODE_ENV === "development";

export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  sourcemap: !isProduction,
  cjs: {
    output: "dist",
  },
  prebundle: {
    // 配置预打包的依赖并指定详细配置
    deps: {
      rimraf: { minify: false },
    },
  },
});
