/**
 * @fileoverview イベントリスナーのオプションに対応しているかどうかの判定
 */

let supportEventListenerOption = false;

try {
  /* eslint-disable */
  let opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportEventListenerOption = true;
    }
  });
  /* eslint-enable */
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {
  console.log('Passive Event Listener に対応しているかの判定に失敗しました。');
}

export default supportEventListenerOption;
