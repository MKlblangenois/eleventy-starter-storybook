const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env) => {
   return {
      entry: "./src/assets/js/index.ts",
      output: {
         path: path.resolve(__dirname, "_site/static/assets"),
         filename: "scripts/index.min.js",
      },
      devtool: env.WEBPACK_WATCH ? "inline-source-map" : false,
      module: {
         rules: [
            {
               test: /\.(eot|svg|ttf|woff|woff2)$/,
               loader: "file-loader",
               options: {
                  name: "fonts/[name].[hash:7].[ext]",
                  esModule: false,
               },
            },
            {
               test: /\.s[ac]ss$/i,
               use: [
                  // Load CSS extract plugin
                  {
                     loader: MiniCssExtractPlugin.loader,
                     options: {
                        esModule: false,
                     },
                  },
                  // Translates CSS into CommonJS
                  {
                     loader: "css-loader",
                     options: {
                        importLoaders: 1,
                        esModule: false,
                     },
                  },
                  {
                     loader: "postcss-sass-loader",
                  },
               ],
            },
            {
               test: /\.tsx?$/,
               exclude: /node_modules/,
               use: ["babel-loader"],
            },
         ],
      },
      resolve: {
         extensions: [".tsx", ".ts", ".js"],
      },
      optimization: {
         minimize: true,
         minimizer: [
            // Minify CSS
            new CssMinimizerPlugin({
               minimizerOptions: {
                  preset: [
                     "default",
                     {
                        discardComments: { removeAll: true },
                     },
                  ],
               },
            }),
            // Minify JS
            new TerserPlugin({
               terserOptions: {
                  format: {
                     comments: false,
                  },
               },
               extractComments: false,
               minify: (file, sourceMap) => {
                  const uglifyJsOptions = {};

                  if (sourceMap) {
                     uglifyJsOptions.sourceMap = {
                        content: sourceMap,
                     };
                  }

                  return require("uglify-js").minify(file, uglifyJsOptions);
               },
            }),
         ],
      },
      plugins: [
         new MiniCssExtractPlugin({
            filename: "styles/[name].min.css",
            experimentalUseImportModule: false,
         }),
         new ForkTsCheckerWebpackPlugin(),
      ],
   };
};
