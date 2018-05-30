import jquery from 'jquery';

const key = 'oldjquery';

if ('$' in window) {
  window[key] = window.key || {};
  window[key].$ = window.$;
}
window.$ = window.jQuery = jquery;

export default jquery;
