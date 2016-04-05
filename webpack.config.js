var webpack = require('webpack');
var jsLoaders = ['babel?presets[]=react,presets[]=es2015,plugins[]=add-module-exports'];

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './index.jsx'
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
                loaders: ['react-hot'].concat(jsLoaders)
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react,presets[]=es2015,plugins[]=add-module-exports'
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