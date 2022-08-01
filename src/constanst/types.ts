// 错误信息类型
export interface IErrorType {
  code: number | string;
  message: string;
}

// 成功信息类型
export interface ISuccessType {
  code?: number;
  message?: string;
  data?: {};
}

// 错误列表类型
export interface IErrorTypes {
  TOKEN_CHECK_FAILED: IErrorType;
  INCORRECT_USERNAME_OR_PASSWORD: IErrorType;
  USERNAME_OR_PASSWORD_ILLEGAL: IErrorType;
  USERNAME_ALREADY_EXISTS: IErrorType;
  USERNAME_OR_PASSWORD_NOT_FOUND: IErrorType;
  PARAMETER_ERROR: IErrorType;
}
