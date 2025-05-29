export interface ISignInState {
  email: string;
  password: string;
}

export interface ISignInStore extends ISignInState {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  reset: () => void;
}
