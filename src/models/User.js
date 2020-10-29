import Account from "./Account";

export default class User {
  constructor(obj) {
    this.account = new Account();
    this.currentStatus = "";
    Object.assign(this, obj);
  }

  static constructMultiple(arr) {
    const ret = [];
    arr.forEach((element) => {
      ret.push(element);
    });
    return ret;
  }
}
