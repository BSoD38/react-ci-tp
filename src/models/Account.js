export default class Account {
  constructor(obj) {
    this.id = null;
    this.username = "";
    Object.assign(this, obj);
  }
}
