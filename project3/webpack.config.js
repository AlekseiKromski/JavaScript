const path = require('path')
module.exports = {
    entry: "./js/dist/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './js/dist')
    }
}