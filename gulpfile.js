import gulp from 'gulp';

import {path} from './gulp/config/path.js';

import {copy} from './gulp/tasks/copy.js';
import {reset} from './gulp/tasks/reset.js';

const dev = gulp.series(reset, copy, watcher);

global.app = {
    path,
    gulp,
}

function watcher() {
    gulp.watch(path.watch.files, copy)
}

gulp.task('default', dev);
// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//     console.log(path)
//   }
  
//   exports.default = defaultTask