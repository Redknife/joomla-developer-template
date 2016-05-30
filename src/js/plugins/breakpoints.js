import $ from 'jquery';
import debounce from '../utils/debounce';

export const breakpointID = Symbol('currentBreakpoint');
export const breakpointChangeEvent = '__breakpointChangeEvent';
export let currentBreakpoint = window[breakpointID] = 'xs';

// Device width..
const breakpoints = [320, 768, 992, 1200];
const breakpointsClasses = {
  320: 'device-xs',
  768: 'device-sm',
  992: 'device-md',
  1200: 'device-lg',
};

const resizeHandler = () => {
  const $body = $('body');
  const w = window.innerWidth < 320 ? 320 : window.innerWidth;
  const bpWidth = Math.max(...breakpoints.filter(bp => bp <= w));
  $body.removeClass('device-xs device-ms device-sm device-md device-lg');
  $body.addClass(breakpointsClasses[bpWidth]);
  currentBreakpoint = breakpointsClasses[bpWidth].slice(7);
  $(window).trigger(breakpointChangeEvent, currentBreakpoint);
};

export const initBreakpoints = () => {
  resizeHandler();
  $(window).on('resize', debounce(resizeHandler, 250));
};
