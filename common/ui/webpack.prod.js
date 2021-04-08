const path = require("path");

module.exports = [
  {
    entry: {
      index: { import: "./src/index.js" },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    output: {
      filename: "ui.bundle.min.js",
      path: path.resolve(__dirname, "build"),
      // Below two important lines!
      library: {
        name: "rlatorreUI",
        type: "umd",
      },
    },
    externals: ["react", "react-dom"],
  },
  {
    target: "es6",
    entry: {
      index: { import: "./src/index.js" },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    experiments: {
      outputModule: true,
    },
    output: {
      filename: "ui.bundle.min.es.js",
      path: path.resolve(__dirname, "build"),
      // Below two important lines!
      library: {
        type: "module",
      },
    },
  },
];
