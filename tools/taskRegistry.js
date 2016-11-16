import HubRegistry from 'gulp-hub';
import { buildTasks, devTaskSfx, watchTaskSfx } from './config';

export class TasksRegistry extends HubRegistry {
  init(gulp) {
    if (typeof super.init === 'function') super.init(gulp);

    this.gulp = gulp;

    this.devMode = process.env.NODE_ENV === 'dev';
    this.watchMode = process.env.NODE_WATCH;

    this.buildTasks = buildTasks;
    this.buildDevTasks = this.genTasksWithSfx(buildTasks, devTaskSfx);

    this.watchTasks = this.genTasksWithSfx(this.buildTasks, watchTaskSfx);
    this.watchDevTasks = this.genTasksWithSfx(this.buildDevTasks, watchTaskSfx);

    this.makeBuildTasks();
    this.makeWatchTasks();
    this.makeDefaultTask();
  }

  makeBuildTasks() {
    const gulp = this.gulp;
    const task = gulp.series(gulp.parallel(this.buildTasks), 'rev');
    const taskDev = gulp.parallel(this.buildDevTasks);

    gulp.task('build', task);
    gulp.task('build:dev', taskDev);
    gulp.task('build:both', gulp.series(taskDev, task));
  }

  makeWatchTasks() {
    const gulp = this.gulp;
    const task = gulp.parallel(this.watchTasks, 'startLivereload', 'rev:watch');
    const devTask = gulp.parallel(this.watchDevTasks, 'startLivereload');

    gulp.task('watch', task);
    gulp.task('watch:dev', devTask);
  }

  makeDefaultTask() {
    const gulp = this.gulp;
    const buildTaskName = this.devMode ? 'build:dev' : 'build';
    let task = gulp.parallel(buildTaskName);
    if (this.watchMode) {
      const watchTaskName = this.devMode ? 'watch:dev' : 'watch';
      task = gulp.series(task, watchTaskName);
    }

    gulp.task('default', task);
  }

  genTasksWithSfx(arr, sfx) {
    return arr.map((taskName) => {
      const taskNameWithSfx = taskName + sfx;
      return this.checkTaskExist(taskNameWithSfx) ? taskNameWithSfx : taskName;
    });
  }

  checkTaskExist(name) {
    return (typeof this.tasks()[name] !== 'undefined');
  }
}

export default new TasksRegistry(['gulp/*.js']);
