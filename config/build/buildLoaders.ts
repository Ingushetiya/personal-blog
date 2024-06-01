import webpack from 'webpack'

import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
export function buildLoaders ({isDev}:BuildOptions):webpack.RuleSetRule[]{
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader =  {
    test: /\.(png|jpe?g|gif|woff2|woff|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
  const tsLoader = 
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
      }
const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          "i18next-extract", 
        {
        locales: ["ru", "en"], 
        keyAsDefaultValue: true}
      ],

      ]
    }
  }
}
  const cssLoader = {
    test: /\.s[ac]ss$/i,
        use: [
          isDev? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
              auto: (resoursePath: string) => resoursePath.includes('.module.'),
              localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
              }
            }
          },
          "sass-loader",
        ],
  }
  
  return [
      fileLoader, 
      svgLoader,
      babelLoader,
      tsLoader,
      cssLoader
  ]
}