export interface BaseUser {
  first_name: string,
  second_name: string,
  email: string,
  login: string,
  phone: string,
}

export interface RegUser extends BaseUser {
  password: string
}

export interface Profile extends User {}

export interface User extends BaseUser {
  avatar: string | null,
  display_name: string | null,
  id: number,
}
export interface Member extends User {
  role: string,
}
