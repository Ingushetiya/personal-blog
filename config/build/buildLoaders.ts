import webpack from 'webpack'

import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin'
export function buildLoaders ():webpack.RuleSetRule[]{
  const tsLoader = 
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
      }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
              auto: (resoursePath: string) => resoursePath.includes('.module.'),
              localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          "sass-loader",
        ],
  }
  
  return [
      tsLoader,
      cssLoader
  ]
}