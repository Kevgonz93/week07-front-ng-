export type UserLoginDto = {
  name: string;
  email: string;
  password: string;
  friend?: boolean;
  enemy?: boolean;
};
