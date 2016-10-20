import gutil from 'gulp-util';
import livereload from 'gulp-livereload';

const watch = Boolean(process.env.NODE_WATCH);
// const afterCompleteTaskCb = watch ? livereload.reload : gutil.noop;
const afterCompleteTaskCb = gutil.noop;

export default afterCompleteTaskCb;
