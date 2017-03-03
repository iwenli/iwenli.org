// 载入外挂
var gulp = require('gulp'),
	// browserify = require('browserify'),//这里用不上，管理js依赖的
	// source = require('vinyl-source-stream'),//同样这里用不上，和上面那个一起的
	uglify = require('gulp-uglify'),//混淆js
	// clean = require('gulp-clean'),//清理文件
	// notify = require('gulp-notify'),//加控制台文字描述用的
	// buffer = require('vinyl-buffer'),
	// less = require('gulp-less'),//转换less用的
	// autoprefixer = require('gulp-autoprefixer'),//增加私有变量前缀
	minifycss = require('gulp-minify-css'),//压缩
	concat = require('gulp-concat'),//合并
	// fileinclude = require('gulp-file-include'),// include 文件用
	// template = require('gulp-template'),//替换变量以及动态html用
	rename = require('gulp-rename'),//重命名
	// webserver = require('gulp-webserver'),//一个简单的server，用python的SimpleHttpServer会锁文件夹
	// imagemin = require('gulp-imagemin'),//图片压缩
	// gulpif  = require('gulp-if'),//if判断，用来区别生产环境还是开发环境的
	// rev  = require('gulp-rev'),//加MD5后缀
	// revReplace = require('gulp-rev-replace'),//替换引用的加了md5后缀的文件名，修改过，用来加cdn前缀
	// addsrc = require('gulp-add-src'),//pipeline中途添加文件夹，这里没有用到
	// del = require('del'),//也是个删除··· 
	// vinylPaths = require('vinyl-paths'),//操作pipe中文件路径的，加md5的时候用到了
	// runSequence = require('run-sequence');//控制task顺序
	jshint = require('gulp-jshint'); //需求库引入

// 说明
gulp.task('help',function () {
	console.log('	gulp build			文件打包');
	console.log('	gulp watch			文件监控打包');
	console.log('	gulp help			gulp参数说明');
	console.log('	gulp server			测试server');
	console.log('	gulp -p				生产环境（默认生产环境）');
	console.log('	gulp -d				开发环境');
	console.log('	gulp -m <module>		部分模块打包（默认全部打包）');
});

//压缩css
gulp.task('minifycss', function () {
    return gulp.src('src/static/common/css/*.css')    //需要操作的文件
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('dist/static/common/css'));   //输出文件夹
});

//压缩,合并 js
gulp.task('minifyjs', function () {
    return gulp.src('src/static/common/js/*.js')      //需要操作的文件
        //.pipe(uglify())    					//压缩
		.pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
        }))
		.pipe(jshint())       // 进行检查
        .pipe(jshint.reporter('default'))  // 对代码进行报错提示
		.pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(gulp.dest('dist/static/common/js'));       //输出到文件夹
});


/* 默认 */
gulp.task('default',function () {
	gulp.start('help');
});