import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
    const cssLoader = buildCssLoaders(isDev);

    return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}
