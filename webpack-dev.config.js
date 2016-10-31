/**
 * Created by c on 16/3/21.
 */
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:8086/lib/',
        filename: '[name].min.js',
		chunkFilename: '[id].chunk.js'
    },
    watch: true,
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            actions: path.join(__dirname, 'src/actions'),
            components: path.join(__dirname, 'src/components'),
            containers: path.join(__dirname, 'src/containers'),
            reducers: path.join(__dirname, 'src/reducers'),
            store: path.join(__dirname, 'src/store'),
            routes: path.join(__dirname, 'src/routes'),
            /* routes: path.join(__dirname, 'src/codeSpliteRoutes'), */
        },
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url',
        }, {
            test: /\.(less)$/,
            loaders: ['style', 'css', 'less'],
        }, {
            test: /\.(css)$/,
            loaders: ['style', 'css'],
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Redux: 'redux',
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 8086,
    },
    devtool: 'source-map',
};
