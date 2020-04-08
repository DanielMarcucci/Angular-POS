export class Users {
  name: String;
  namespace: String;
  password: String;

  constructor() {}

  private setLogin(name: String, namespace: String, password: String) {
    this.namespace = namespace;
    this.password = password;
  }
}