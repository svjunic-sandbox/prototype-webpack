/**
 * @file
 * @fileoverview 機能の読み込み
 */
'use strict';

import SupportEventListenerOption from 'common/modules/SupportEventListenerOption.ts';
import basetypes from './basetypes.ts';

async function main(): Promise {
  // テスト
  const { default: Sample } = await import(/* webpackChunkName: "js/index.sample" */ './_modules/sample.ts');

  const mogeta = new Sample();
  console.log('getの', mogeta.sanma);
  console.log('memberの', mogeta.mogeta);
  return;
}

main();

[...document.querySelectorAll('div')].forEach(el => {
  console.log(el);
});
