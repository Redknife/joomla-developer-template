import stampit from 'stampit';

export default stampit()
  .init(({ instance }) => {
    const uaInfo = instance.getState().ua;
    const browser = uaInfo.browser.name;
    const device = uaInfo.device.type || 'desktop';
    const deviceType = uaInfo.device.type;
    const os = uaInfo.os.name;
    const classes = [browser, device, deviceType, os]
      .filter(el => !!el)
      .map((el) => {
        const normalized = el.toLowerCase().replace(/\s/g, '');
        return `d-${normalized}`;
      }).join(' ');
    $('html').addClass(classes);
  });
