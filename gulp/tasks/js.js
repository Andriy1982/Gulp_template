import webpack from "webpack-stream";
// import webpack from 'webpack';
// import webpackStream from 'webpack-stream';
// import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe( webpack(
        {
        mode: app.isBuild ? "production" : "development",
        output: {
            filename: "app.min.js"
        },       
}
    ))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}