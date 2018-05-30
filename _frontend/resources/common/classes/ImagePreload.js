/**
 * @fileoverview 画像の読み込みクラス
 */

import SupportEventListenerOption from '../modules/SupportEventListenerOption.js';

class ImagePreload {
  constructor() {
    this.image = new Image();
    this.onLoadListenerBind = this.onLoadListener.bind(this);
    this.onErrorListenerBind = this.onErrorListener.bind(this);
  }

  load(path) {
    this.$dfd = $.Deferred();

    this.src = path;

    if (typeof path !== 'string') {
      setTimeout(() => {
        console.info('%cImagePreload: reject(parameter error)\n' + this.src, 'color: #f00');
        this.$dfd.reject();
      }, 10);
      return this.$dfd.promise();
    }

    console.info('%cImagePreload: load start(' + this.src + ')\n', 'color: #05a');
    this.image.src = this.src;

    if (this.image.complete) {
      console.info('%cImagePreload: resolve(image.complete)\n' + this.src, 'color: #05a');
      setTimeout(() => {
        console.log(this);
        this.$dfd.resolve(this.image);
      }, 10);
      return this.$dfd.promise();
    }

    this.image.addEventListener('load', this.onLoadListenerBind, SupportEventListenerOption ? { passive: true, once: true } : false);
    this.image.addEventListener('error', this.onErrorListenerBind, SupportEventListenerOption ? { passive: true, once: true } : false);

    return this.$dfd.promise();
  }

  onLoadListener() {
    console.info('%cImagePreload: resolve(onload)\n' + this.src, 'color: #05a');
    this.$dfd.resolve(this.image);
  }

  onErrorListener(e) {
    console.info('%cImagePreload: reject(onerror)\n' + this.src + '\n' + e, 'color: #f00');
    this.$dfd.reject();
  }

  destroy() {
    this.$dfd = null;
    this.image.removeEventListener('load', this.onLoadListenerBind);
    this.image.removeEventListener('error', this.onErrorListenerBind);
    this.image = null;
  }
}

export default ImagePreload;
