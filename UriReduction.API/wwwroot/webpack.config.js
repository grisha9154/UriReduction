const path = require('path');

module.exports = {
  entry: './ts/app.tsx',
  devtool: 'eval-source-map',
  mode:"production",
  module:{
      rules:[
          {
                test:/\.tsx?$/,
                use: 'ts-loader',
                exclude:/node_modules/
          }
        ]
  },
  resolve:{
    extensions:['.tsx','.ts','.js','.d.ts']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};