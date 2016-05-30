import $ from 'jquery';
import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

export default (gallerySelector) => {
  const $gallery = $(gallerySelector);
  const items = [];

  $gallery.find('a').each((i, link) => {
    const $link = $(link);
    const $img = $link.children('img');
    const size = $link.data('size').split('x');

    const item = {
      src: $link.attr('href'),
      w: parseInt(size[0], 10),
      h: parseInt(size[1], 10),
      msrc: $img.attr('src'),
      title: $img.attr('alt'),
    };

    item.el = $img; // save link to element for getThumbBoundsFn
    items.push(item);
  });

  const openGallery = (gid, pid) => {
    const pswpElement = document.querySelectorAll('.pswp')[0];
    const options = {
      index: 0,

      timeToIdle: 4000,
      timeToIdleOutside: 1000,

      bgOpacity: 0.8,

      closeEl: true,
      captionEl: true,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: false,
      counterEl: true,
      arrowEl: true,
      preloaderEl: true,
      //
      // getThumbBoundsFn: (index) => {
      //   const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      //   const rect = $gallery[0].getBoundingClientRect();
      //
      //   return {
      //     x: rect.left,
      //     y: rect.top + pageYScroll,
      //     w: rect.width,
      //   };
      // },
    };

    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  $($gallery).on('click', 'a', (e) => {
    e.preventDefault();
    openGallery();
  });
};
