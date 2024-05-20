
import webpack from 'webpack'

import { BuildOptions } from "./types/config"

import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildPlugins } from "./buildPlugins"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options
   return {
        mode,
        
        entry: paths.entry,

        devtool: 'inline-source-map',
        
        devServer: buildDevServer(options),
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },

        resolve: buildResolvers(),
      
        module: {
          rules: buildLoaders(),
        },

        plugins: buildPlugins(paths),
      } 
}