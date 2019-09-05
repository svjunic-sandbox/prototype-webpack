/**
 * @fileoverview 画像の読み込みクラス
 */

import SupportEventListenerOption from 'common/beans/SupportEventListenerOption.js';

class ImagePreload {
  constructor() {
    this.image = new Image();
    this.onLoadListenerBind = this.onLoadListener.bind(this);
    this.onErrorListenerBind = this.onErrorListener.bind(this);
  }

  load(path) {
    return new Promise((resolve, reject) => {
      this.src = path;
      this.resolve = resolve;
      this.reject = reject;

      if (typeof path !== 'string') {
        setTimeout(() => {
          console.info('%cImagePreload: reject(parameter error)\n' + this.src, 'color: #f00');
          reject();
        }, 0);
      }

      console.info('%cImagePreload: load start(' + this.src + ')\n', 'color: #05a');
      this.image.src = this.src;

      if (this.image.complete) {
        console.info('%cImagePreload: resolve(image.complete)\n' + this.src, 'color: #05a');
        setTimeout(() => {
          console.log(this);
          resolve(this.image);
        }, 0);
      }

      this.image.addEventListener('load', this.onLoadListenerBind, SupportEventListenerOption ? { passive: true, once: true } : false);
      this.image.addEventListener('error', this.onErrorListenerBind, SupportEventListenerOption ? { passive: true, once: true } : false);
    });
  }

  onLoadListener() {
    console.info('%cImagePreload: resolve(onload)\n' + this.src, 'color: #05a');
    this.resolve(this.image);
  }

  onErrorListener(e) {
    console.info('%cImagePreload: reject(onerror)\n' + this.src + '\n' + e, 'color: #f00');
    //this.reject(null);
    this.resolve(null);
  }

  getImage() {
    return this.image;
  }

  destroy() {
    this.resolve = this.reject = null;
    this.image.removeEventListener('load', this.onLoadListenerBind);
    this.image.removeEventListener('error', this.onErrorListenerBind);
    this.image = null;
  }
}

export default ImagePreload;
