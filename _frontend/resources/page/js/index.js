/**
 * @file
 * @fileoverview 機能の読み込み
 */
"use strict";

import SupportEventListenerOption from "common/modules/SupportEventListenerOption.js";

async function main() {
  window.mogeta = "hogehogehoge";
  let { default: Sample } = await import(
    // mjs拡張子だと通らないわ・・・
    /* webpackChunkName: "/js/index.sample" */ "./_modules/sample.js"
  );
}

main();
