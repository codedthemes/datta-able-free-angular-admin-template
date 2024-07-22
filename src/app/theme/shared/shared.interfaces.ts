export interface Messages {
  type: MessageType;
  title: string;
  text: string;
}

export enum MessageType {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}

export interface BaseResponse<T> {
  type: ResponseType;
  messages: string[];
  content: T;
}

export interface BaseResponsePagination<T> {
  type: ResponseType;
  messages: string[];
  content: Data<T>;
}
export interface Data<T> {
  data: T;
  pageCount: number;
}

export enum ResponseType {
  blank,
  Success,
  Failure,
  Ex
}
// export enum ResponseType {
//   blank = 'blank',
//   Success = 'Success',
//   Failure= 'Failure',
//   Ex = 'Ex'
// }
export enum Pages {
  LogIn = 'login',
  ChangePassword = 'ChangePasswod',
  Otp = 'Otp',
  ForgotPassword = 'ForgotPassword',
  Main = 'Main'
}


