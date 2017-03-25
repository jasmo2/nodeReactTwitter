const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = [
    {
    context: __dirname,
    entry: {
      main: './server.js',
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
    },
    {
        entry: [
          './views/index.js',
          './views/src/styles/main.scss'
        ],
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
        },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
    })
  ],

    }
];
