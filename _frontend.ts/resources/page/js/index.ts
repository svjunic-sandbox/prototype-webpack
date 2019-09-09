/**
 * @file
 * @fileoverview 機能の読み込み
 */
"use strict";

import SupportEventListenerOption from "common/modules/SupportEventListenerOption.ts";

async function main() {
  // テスト
  let { default: Sample } = await import(
    /* webpackChunkName: "js/index.sample" */ "./_modules/sample.ts"
  );
}

main();
