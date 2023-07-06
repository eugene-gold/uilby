import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const babelLoader = {
    test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["i18next-extract", {
                locales: ['ru', 'en'],
                keyAsDefaultValue: true
              }]
            ]
          }
        }
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      { 
        loader: '@svgr/webpack',
         options: { icon: true } 
        }
      ],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
       isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module')),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            },
          },
        },
        "sass-loader",
      ],
    }

    const typeScriptLoader = {
        test:/\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader
      ]
}