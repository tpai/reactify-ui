var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = {
    entry: {
        index: "./index.js"
    },
    resolve: {
        root: [ path.resolve("./src") ],
        extensions: ["", ".js", ".jsx", ".css", ".scss"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.scss|\.css$/,
                loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss?pack=cleaner"
            },
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
            }
        ]
    },
    postcss: function(webpack) {
        return {
            defaults: [postcssImport, precss, autoprefixer],
            cleaner: [
                postcssImport({
                    addDependencyTo: webpack,
                    path: [ path.resolve(__dirname + "/src") ]
                }),
                precss,
                autoprefixer({browsers:["> 5%", "ie >= 8", "Firefox < 20"]})
            ]
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
}
