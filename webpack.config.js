var webpack = require('webpack');
var jsLoaders = 'babel?babelrc=true';

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: jsLoaders
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: jsLoaders
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]

};