// import gulp from 'gulp';
// import gulpif from 'gulp-if';
// import liveserver from 'gulp-live-server';
// import args from './util/args.js';

// gulp.task('server', (cb) => {
// 	// 如果不监听，则直接执行callback函数
// 	if(!args.watch) {
// 		return cb();
// 	}
// 	// --harmony 表示在当前目录下
// 	var server = liveserver.new(['--harmony', 'server/bin/www']);
// 	// 启动服务
// 	server.start();
// 	// 当js，ejs，css改变时自动刷新页面
// 	gulp.watch(['server/public/**/**.js','server/public/**/**.css','server/views/**/**.ejs'], function(file){
// 		server.notify.apply(server, [file]);
// 	})
// 	// 如果是路由或者app.js发生改变时，则重启服务
// 	gulp.watch(['server/routes/**/*.js','server/app.js'], function(){
// 		server.start.bind(server)();
// 	})

// })

import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cb)=>{
  // if(!args.watch) return cb();

  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})
