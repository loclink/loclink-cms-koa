// 错误信息类型
export interface IErrorItem {
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
export interface IErrorTypes<T> {
  TOKEN_CHECK_FAILED: T;
  INCORRECT_USERNAME_OR_PASSWORD: T;
  USERNAME_OR_PASSWORD_ILLEGAL: T;
  USERNAME_ALREADY_EXISTS: T;
  USERNAME_OR_PASSWORD_NOT_FOUND: T;
  PARAMETER_ERROR: T;
  REGISTRATION_CODE_ERROR: T
}
