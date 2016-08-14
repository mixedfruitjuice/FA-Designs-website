var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('serve', function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        watch: jsFiles
    }

    return nodemon(options)
        .on('restart', function(ev) {
            console.log("Restarted");
        });
});
