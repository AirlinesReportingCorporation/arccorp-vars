var glob = require("glob");
var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: glob.sync("./src/components/**.jsx").reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist/components"),
    filename: "[name].js",
  },
  target: "web",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
        },
        {
          from: path.resolve(__dirname, "src/index.jsx"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
  ],
};
