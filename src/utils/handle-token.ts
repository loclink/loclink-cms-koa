import { sign, verify } from 'jsonwebtoken';

// 签发token
const generateToken = (payload: object, privateKey: string) => {
  const token = sign(payload, privateKey, {
    expiresIn: 60 * 60,
    algorithm: 'RS256'
  });
  return token;
};

// 校验token
const checkToken = (token: string, publicKey: string) => {
  const parseResult = verify(token, publicKey, {
    algorithms: ['RS256']
  });
  return parseResult;
};

export { generateToken, checkToken };
