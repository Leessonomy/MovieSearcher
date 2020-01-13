const path = require('path');
const HtmlWebpackPlugin	= require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
	 resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
	module: {
		rules: [
		{ 
            test: /\.ts(x?)$/, 
            use: ['babel-loader', 'ts-loader']
         },
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		  },
		{
        test: /\.css$/,
        use: [
          "style-loader",
            {
            loader: "css-loader",
            options: {
              modules: true
            }
          }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
        }]
      }
    ]
},
optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
plugins: [
  new HtmlWebpackPlugin({
  	template: './src/index.html'
  }),
],
}