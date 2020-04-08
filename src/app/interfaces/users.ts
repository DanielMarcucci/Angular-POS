export interface IUsersLogin {
  username: String,
  password: String
}

export interface IUsers extends IUsersLogin {
  api_token: String
}