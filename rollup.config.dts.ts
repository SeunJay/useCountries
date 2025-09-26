import { RollupOptions } from "rollup";
import dts from "rollup-plugin-dts";

const config: RollupOptions = {
  input: "src/index.ts",
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [dts()],
};

export default config;
