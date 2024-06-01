import  ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import  webpack  from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

import { BuildOptions } from "./types/config"

export function buildPlugins ({paths, isDev}: BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename:'css/[name].[contenthash:8].css',
          chunkFilename:'css/[name].[contenthash:8].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        isDev ? new ReactRefreshWebpackPlugin() : null,
        new webpack.DefinePlugin({
          __IS_DEV__: JSON.stringify(isDev),
      }),
      ]
}