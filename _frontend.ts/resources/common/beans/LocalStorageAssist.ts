/**
 * @file LocalStorageのサポート用クラス
 * @author sv.junic
 * @version 1.0.0
 */

class LocalStorageAssist {
  private localStorage: any;

  /*
   * @constructor
   */
  constructor() {
    this.localStorage = window.localStorage;
  }

  /**
   * ローカルストレージの値を取得する
   * @param {String} name localStorageのキー
   * @return {Object} value typeに応じた値を返す。Arrayは対応していない。データがない場合、あるいはexpiresの期限を超えている場合はnullを返す。
   */
  getItem(name: string) {
    let result = null;

    const stringData = this.localStorage.getItem(name);

    if (stringData === null) return result;

    const parsedData = JSON.parse(stringData);

    if (parsedData.expires !== 0) {
      console.log(
        parsedData.expires,
        new Date().getTime(),
        parsedData.expires < new Date().getTime()
      );
      if (parsedData.expires < new Date().getTime()) {
        console.log("time over");
        return result;
      }
    }

    switch (parsedData.type) {
      case "object":
        result = JSON.parse(parsedData.value);
        break;
      case "string":
        result = parsedData.value;
        break;
      case "number":
        result = parseInt(parsedData.value, 10);
        break;
      case "boolean":
        result = parsedData.value;
        break;
    }

    return result;
  }

  /**
   * ローカルストレージに設定する
   * Arrayは対応していない
   * @param {String} name localStorageのキー
   * @param {Object,String} value 保存するオブジェクト、Boolean、または文字列。Arrayは対応していない。
   * @param {Number} date 有効にする日数
   */
  setItem(name: string, value: string | boolean | string, date: number = 0) {
    let pubDate = new Date().getTime();
    let expires = 0;
    if (typeof date === "number" && date > 0) {
      expires = pubDate + date * 24 * 60 * 60 * 1000;
    }
    const valueObject = {
      type: typeof value,
      value: value,
      pubDate: pubDate,
      expires: expires
    };

    // console.log(typeof JSON.stringify(valueObject));
    // console.log(JSON.stringify(valueObject));

    this.localStorage.setItem(name, JSON.stringify(valueObject));
  }
}

export default new LocalStorageAssist();
