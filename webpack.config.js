const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/static/js'),
        publicPath: "/static/js/"
    },
    devServer: {
        contentBase: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
                }
            }
        ]
    }
}