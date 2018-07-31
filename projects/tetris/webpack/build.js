const path = require('path')
const webpack = require('webpack')

const BudleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = webpack.optimize.UglifyJSPlugin

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../.package'),
        filename: 'bundle.min.js'
    },

    // 通过外部引入，而不是npm 下载
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }]
    },

    plugins: [
        new UglifyJSPlugin({
            mangle: {
                // skip manling these
                except: ['exports', 'require']
            },
            sourceMap: true
        }),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'BundleReportRelease.html',
            logLevel: 'info'
        })
    ]
}