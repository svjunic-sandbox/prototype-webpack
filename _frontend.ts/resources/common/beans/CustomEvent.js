/**
 * @file CustomEventのpolyfill
 * @author sv.junic
 * @version 1.0.0
 */

let CustomEvent;

if (typeof window.CustomEvent !== 'function') {
  CustomEvent = function(eventName, params = { bubbles: false, cancelable: false, detail: undefined }) {
    const bubbles = params.bubbles || false;
    const cancelable = params.cancelable || false;
    const detail = params.detail || undefined;
    if (params.bubbles) delete params.bubbles;
    if (params.cancelable) delete params.cancelable;

    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(eventName, bubbles, cancelable, detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
} else {
  CustomEvent = window.CustomEvent;
}

/**
 * イベントを生成し、対象の要素にdispatchEventします。
 * @param {Object} el 発火対象のHTMLElement
 * @param {String} eventName イベント名
 * @param {Object} option カスタムイベントのオプション
 * @fire
 */
export function trigger(el, eventName, option = { bubbles: true, detail: undefined }) {
  if (!(el instanceof HTMLElement)) {
    console.error('fire', 'elがHTMLElementではないため、発火できませんでした。', arguments);
    throw new Error('CustomEventのdispatchEvent対象に例外がありました。');
  }
  el.dispatchEvent(new CustomEvent(eventName, option));
}

export default CustomEvent;
