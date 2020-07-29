import path from 'path';

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    // noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index.html')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.html$/, loaders: ['html-loader'] }
        ]
    }
}
