import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
    name: "ThreeFigureExpanded",
  },
  plugins: [resolve(), commonjs(), babel({ babelHelpers: "bundled" })],
};
