var HTMLWebpackPlugin =require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template:__dirname + '/helloWorld/index.html',
	filename:'index.html',
	inject: 'body'
});

module.exports={
	entry:__dirname +'/helloWorld/main.js',
	module:{
		loaders	:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		}

		]
	},
	output :{
		filename:'transformed.js',
		path:__dirname +'/build'
	},
	plugins:[HTMLWebpackPluginConfig]

};