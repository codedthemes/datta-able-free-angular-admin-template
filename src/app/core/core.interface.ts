export interface LoginContent {
  id: string;
  name: string;
  type: string;
  officeId: string;
  accessToken: string;
}

export interface LoginRequest {
  userName: string;
  password: string;
}


export interface ChangePasswordCommand  {
  NewPassword: string;
}

export interface ForgotPasswordCommand  {
  UserName: string;
}
export interface UserAuthenticationModel
{
    Id :string;
    permisstions: Array<string>;
    accessToken: string;
    isFirstTimeLogin: boolean;
}

export interface VerifyOtpCommand{
  Otp : string;
}


