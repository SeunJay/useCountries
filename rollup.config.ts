import { RollupOptions } from "rollup";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

const devMode = process.env.NODE_ENV === "development";

const config: RollupOptions = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: devMode ? "inline" : false,
  },
  plugins: [
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: !devMode,
        drop_debugger: !devMode,
      },
      output: { quote_style: 1 },
    }),
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["react", "react-dom"],
};

export default config;
