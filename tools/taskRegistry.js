import HubRegistry from 'gulp-hub';
import config from './config';

export class TasksRegistry extends HubRegistry {
  constructor(args) {
    super(args);

    this.devMode = process.env.NODE_ENV === 'dev';
    this.watch = process.env.NODE_WATCH;
    this.devTaskSfx = ':dev';
    this.buildTasks = ['iconfont', 'images', 'js', 'styles'];
  }

  init(gulp) {
    super.init(gulp);

    if (this.devMode) this.addDevSfxForBuildTasks();
    this.makeBuildTask(gulp);
    this.makeWatchTask(gulp);
    this.makeDefaultTask(gulp);
  }

  makeBuildTask(gulp) {
    gulp.task('build', gulp.parallel(this.buildTasks));
  }

  makeWatchTask(gulp) {
    const self = this;
    const watchers = self.buildTasks.map((task, index) => {
      const origName = self.devMode ? self.origBuildTasks[index] : task;
      try {
        const watchGlob = config[origName].watch;
        return gulp.watch.bind(null, watchGlob, gulp.parallel(task));
      } catch (err) {
        // Ignore
        return undefined;
      }
    }).filter(fn => (typeof fn === 'function'));
    const watch = () => {
      watchers.forEach(watcher => watcher());
    };
    gulp.task('watch', watch);
  }

  makeDefaultTask(gulp) {
    const defaultTask = this.watch ? gulp.series('build', 'watch') : gulp.parallel('build');
    const task = this.watch ? gulp.series('startLivereload', defaultTask) : defaultTask;
    gulp.task('default', task);
  }

  addDevSfxForBuildTasks() {
    const self = this;
    const tasks = this.tasks();
    this.origBuildTasks = this.buildTasks;

    this.buildTasks = this.buildTasks.map((taskName) => {
      const devTaskName = taskName + self.devTaskSfx;
      const devtaskExist = typeof tasks[devTaskName] !== 'undefined';
      return devtaskExist ? devTaskName : taskName;
    });
  }
}

export default new TasksRegistry(['gulp/*.js']);
