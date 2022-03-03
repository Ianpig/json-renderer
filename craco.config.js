const theme = require("./theme.ts");

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { ...theme },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack: {
  //   rules: [
  //     {
  //       test: /\.less$/,
  //       use: [
  //         {
  //           loader: "style-loader",
  //         },
  //         {
  //           loader: "css-loader", // translates CSS into CommonJS
  //         },
  //         {
  //           loader: "less-loader", // compiles Less to CSS
  //           options: {
  //             lessOptions: {
  //               // If you are using less-loader@5 please spread the lessOptions to options directly
  //               modifyVars: {
  //                 "border-radius-base": "2px",
  //               },
  //               javascriptEnabled: true,
  //             },
  //           },
  //         },
  //       ],
  //       // ...other rules
  //     },
  //   ],
  // },
};
