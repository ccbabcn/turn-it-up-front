export interface UserState {
  username: string;
  id: string;
  logged: boolean;
}

export interface UserLogIn {
  username: string;
  password: string;
}

export interface UserLoggedIn {
  username: string;
  id: string;
}

export interface UserRegister {
  name: string;
  username: string;
  password: string;
}
