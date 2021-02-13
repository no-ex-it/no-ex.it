const path = require("path");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminPngquant = require("imagemin-pngquant");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    outputDir: resolve("target/dist/"),
    configureWebpack: {
        devtool: "source-map",
        plugins: [
            new ImageminPlugin({
                cacheFolder: './.cache',
                plugins: [
                    ImageminMozjpeg({
                        quality: 70
                    }),
                    ImageminPngquant({
                        quality: [0.8,0.9]
                    })
                ]
            })
        ],
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    },
    integrity: true,
    lintOnSave: false,
    pluginOptions: {},
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
    },
    devServer: {
    },
};
