var SupportEventListenerOption = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      SupportEventListenerOption = true;
    }
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {
  console.log('Passive Event Listener に対応しているかの判定に失敗しました。');
}

module.exports = SupportEventListenerOption;
