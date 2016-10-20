import gulp from 'gulp';
import tasksRegistry from './tools/taskRegistry';

if (typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'dev';
}

gulp.registry(tasksRegistry);
