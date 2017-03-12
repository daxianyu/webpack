/**
 * Created by tangjianfeng on 2017/3/11.
 */
const webpack = require('./lib/webpack');
const WebpackMd5Hash = require('webpack-md5-hash');


module.exports = {
    entry: "../te/index.js",
    watch: true,
    cache: true,
    profile: true,
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader'
                }]
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    plugins: [
        new WebpackMd5Hash(),
        // new ExtractTextPlugin('statics/css/[name]_[contenthash:6].css'),
    ]
}

