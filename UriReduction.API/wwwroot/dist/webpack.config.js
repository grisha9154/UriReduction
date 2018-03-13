const path = require('path');
module.exports = {
    entry: './ts/app.tsx',
    devtool: 'eval-source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
<<<<<<< HEAD
        extensions: ['.tsx', '.ts', '.js']
=======
        extensions: ['.tsx', '.ts', '.js', '.d.ts']
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};
<<<<<<< HEAD
//# sourceMappingURL=webpack.config.js.map
=======
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
