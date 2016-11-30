'use strict'

var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var concatCss = require('gulp-concat-css');

// dev 环境
var webpackConfig = require('./webpack.dev.config.js');

var webpackDevServer =  require('webpack-dev-server');
var concat = require('gulp-concat');

var pwd = __dirname;

// 开发机打包
gulp.task('js',function(){
	return gulp
			.src('../src/app.js')
			.pipe(gulpWebpack(webpackConfig))
			.pipe(gulp.dest('../release'));
});

gulp.task('webpack-dev',function(){
	var config = Object.create(webpackConfig);
	config.entry.app.unshift('webpack-dev-server/client?http://localhost:3038/','webpack/hot/dev-server');
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
	var compiler = webpack(config);
	var server = new webpackDevServer(compiler,{
		contentBase: "../",
		publicPath: "/release/",
		hot: true,
		compress: false,
		stats: { colors: true }
	})	
	server.listen(3038,'localhost',function(){});
})

// 这个是对上CDN的JS 合并
gulp.task('concat-js',function(){
    gulp.src(['../lib/vue.js','../lib/vue-router.min.js','../lib/vue-resource.min.js'])
    .pipe(concat('vue.min.js'))
    .pipe(gulp.dest('../release'));
})

// 对上cdn的css  合并。
gulp.task('concat-css',function(){
    return gulp.src('../lib/css/*.css')
        .pipe(concatCss("app.min.css"))
        .pipe(gulp.dest('../release/'));
})