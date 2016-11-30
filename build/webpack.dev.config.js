var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackConfig = {
	entry:{
		app:["../src/app.js"]
	},
	output:{
        path: path.resolve(__dirname,'../release'), 
		filename: '[name].bundle.js'
	},
	module: {
        loaders: [
        {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',  // 如果把这个presets=es2015 去掉就不行了我尼玛。 可是我再.babelrc文件里边是有去设置的啊
                exclude: /node_modules/,

        }
        , {
            test: /.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.css$/,
            loader: 'style!css'
        },
        {
               test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
               loader: 'file-loader'
             },
             {
               test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
               loader: 'file-loader',
               query: {
                 name: '[name].[ext]?[hash]'
               }
             }
        ]
    },
    // 要引用外部模块，比如jq，比如我们合并好的vue.min.js之类的，是通过script的方式写在页面上的，但又希望在webpack模块中使用就得用到这个externals了
    externals:{
        'vue':'Vue',
        'vue-router':'VueRouter',
        'vue-resource':"VueResource"
    },
    plugins:[
        // new ExtractTextPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.less'] 
    },
    babel:{
        presets:['es2015']
    }
}

module.exports = webpackConfig