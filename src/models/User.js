import Account from "./Account";

export default class User {
  constructor(obj) {
    this.currentStatus = "";
    Object.assign(this, obj);
    this.account = new Account(obj.account);
  }

  static constructMultiple(arr) {
    const ret = [];
    arr.forEach((element) => {
      ret.push(new User(element));
    });
    return ret;
  }
}
