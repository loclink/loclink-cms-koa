import { IErrorTypes } from './types';

const ERROR_TYPES: IErrorTypes = {
  TOKEN_CHECK_FAILED: {
    code: 10401,
    message: '无效的token'
  },
  INCORRECT_USERNAME_OR_PASSWORD: {
    code: 10400,
    message: '用户名或密码不可为空'
  },
  USERNAME_OR_PASSWORD_ILLEGAL: {
    code: 10400,
    message: '用户名或密码不合法'
  },
  USERNAME_ALREADY_EXISTS: {
    code: 10400,
    message: '用户名已存在'
  },
  USERNAME_OR_PASSWORD_NOT_FOUND: {
    code: 10400,
    message: '用户名或密码不正确'
  },
  PARAMETER_ERROR: {
    code: 10400,
    message: '参数错误'
  }
};

export default ERROR_TYPES;
