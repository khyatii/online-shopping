const gulp = require("gulp");

//client task
gulp.task("client", function () {
    var src = "./client/dist/**";
    dest = "./release/client";
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});
//assets
gulp.task("assets", function () {
    var src = "./client/assets/**";
    dest = "./release/client/assets";
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

//server tasks
gulp.task("main", function () {
    var src = ["./server.js", './package.json'],
        dest = "./release";
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

gulp.task("server", function () {
    var src = ['./server/**/*.js','./server/env.json'],
        dest = "./release/server";
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

gulp.task("default",['client','assets','main','server'],function () {
    console.log('finished!');
});