import gutil from 'gulp-util';
import livereload from 'gulp-livereload';

const afterCompleteTaskCb = process.env.NODE_WATCH ? livereload : gutil.noop;

export default afterCompleteTaskCb;
