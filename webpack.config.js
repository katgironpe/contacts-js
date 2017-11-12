let path = require('path');

module.exports = {
    entry: './app/js/main.js',
    output: {
      path: __dirname,
      filename: 'dist/js/main.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'app/js'),
              loader: 'babel-loader' }
        ]
    }
};

