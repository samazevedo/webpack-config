const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

// const mode = process.env.NODE_ENV || "development";
// //temporary workaroung for 'browserslist' bug that is being patched in the near future
// const target = process.env.NODE_ENV === "prodution" ? "browserslist" : "web"

module.exports = {

    // mode defaults to 'production' if not set
    mode: mode,

    // entry not require if using 'scr/index.js' default
    // output not required if using 'dist/main.js' default

    target: target,
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "image/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
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
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        hot: true,
    },
};