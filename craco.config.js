const {
    when,
    whenDev,
    whenProd,
    whenTest,
    ESLINT_MODES,
    POSTCSS_MODES
} = require("@craco/craco");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    style: {
        postcss: {
            plugins: [
                require("postcss-cssnext"), // https://cssnext.github.io/features/
                require("postcss-sprites")
            ]
        }
    },
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@models": path.resolve(__dirname, "./src/models"),
            "@components": path.resolve(__dirname, "./src/components")
        },
        plugins: {
            add: [],
            remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */
        },
        /* Any webpack configuration options: https://webpack.js.org/configuration */
        configure: (webpackConfig, { env, paths }) => {
            return webpackConfig;
        }
    },
    /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver. */
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
        return devServerConfig;
    }
};
