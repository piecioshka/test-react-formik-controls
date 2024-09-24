const path = require("path");

const root = path.resolve(__dirname, "..");

module.exports = (env) => ({
  entry: path.join(root, "/src/scripts/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(root, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: `file-loader`,
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
});
