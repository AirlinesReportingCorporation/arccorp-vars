var glob = require("glob");
var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "arccorp-vars"
  },
  externals: [nodeExternals()],
  target: ["web", "es5"],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "/src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/scss"),
          to: path.resolve(__dirname, "dist/scss"),
        }
      ],
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
