const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

module.exports = [
    {
    context: __dirname,
    entry: {
      main: [
        './server.js',
        './views/src/styles/main.scss'
      ],
    },
    output: {
        path: './',
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
          },
          {
            test: /\.scss$/,
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
    },
    target: 'node',
    externals: [nodeExternals()]
    //If you want to minify your files uncomment this
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
    },
    {
        entry: './views/index.js',
        output: {
            path: './bin',
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }]
        }
        //If you want to minify your files uncomment this
        // ,
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         compress: {
        //             warnings: false,
        //         },
        //         output: {
        //             comments: false,
        //         },
        //     }),
        // ]
    }
];
