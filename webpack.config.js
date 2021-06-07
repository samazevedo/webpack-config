const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
//temporary workaroung for 'browserslist' bug that is being patched in the near future

const target = process.env.NODE_ENV === "prodution" ? "browserslist" : "web"

module.exports = {

    // mode defaults to 'production' if not set
    mode: mode,

    // entry not require if using 'scr/index.js' default
    // output not required if using 'dist/main.js' default

    target: target,

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"],

            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        hot: true,
    },
};