export default () => new Promise((resolve) => {
  const d = document;
  const c = 'addEventListener';
  d[c] ? d[c]('DOMContentLoaded', resolve) : window.attachEvent('onload', resolve);
});
