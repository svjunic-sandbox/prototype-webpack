/**
 * @file
 * @fileoverview 機能の読み込み
 */
"use strict";

import SupportEventListenerOption from "common/modules/SupportEventListenerOption.js";

async function main() {
  // テスト
  let { default: Sample } = await import(
    /* webpackChunkName: "js/index.sample" */ "./modules/sample.mjs"
  );
}

main();
