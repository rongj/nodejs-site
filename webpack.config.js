var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/entry-client.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: 'js/build.js',
        chunkFilename:"js/[id].build.js?[chunkhash]"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                postcss: [require('autoprefixer')({
                    browsers: ['last 40 Chrome versions']
                })]
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/
        },{
            test: /\.(sc|c)ss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader?sourceMap',
                    'sass-loader',
                    {
                        loader: 'postcss-loader?sourceMap',
                        options: {
                            plugins: [require('autoprefixer')({
                                browsers: ['last 40 Chrome versions']
                            })]
                        }
                    }
                ]
            })
        },  {
            test: /\.(png|jpg|gif|jpe?g)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[hash:7].[ext]'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        },  {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'file-loader?limit=8192&name=fonts/[name].[hash:7].[ext]'
        }]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
        }
    },
    plugins: [
        // 提取css为单文件
        new ExtractTextPlugin({
            filename: "css/style.css?[contenthash]",
            allChunks: true
        }),
        new htmlWwebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
}
