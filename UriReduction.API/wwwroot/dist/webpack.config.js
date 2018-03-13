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
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};
//# sourceMappingURL=webpack.config.js.map