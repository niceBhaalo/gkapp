const path = require('path');
const webpack = require('webpack'); // Import webpack

module.exports = {
    mode: 'development',
    entry: './public/js/script.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Output bundle filename
        path: path.resolve(__dirname, 'public/dist'), // Output directory
    },
    devServer: {
        static: './public', // Specify the root directory for your server
        hot: true, // Enable hot module replacement
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Add the HMR plugin
    ],
};
