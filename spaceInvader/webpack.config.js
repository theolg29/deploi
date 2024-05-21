module.exports = {
  // 1
  entry: "./src/index.js",
  // 2
  output: {
    path: "/dist",
    filename: "bundle.js",
  },
  // 3
  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'asset/resource',
      },
    ],
  },
};