const path = require('path');
const webpack = require('webpack');

module.exports = [
    {
        entry: './Scripts/calendar.js',
        output: {
            path: path.join(__dirname, "/wwwroot/js/"),
            filename: 'calendar.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env']
                        }
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        // `vue-loader` options

                    }
                },
                { test: /\.css$/, use: 'css-loader' },
                { test: /\.scss$/, use: 'sass-loader' },
                { test: /\.ts$/, use: 'ts-loader' }
            ]
        },
        resolve: {
            alias: {
                vue: "vue/dist/vue.js"
            }
        },
        mode: 'development',
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") })
        ]
    }
];