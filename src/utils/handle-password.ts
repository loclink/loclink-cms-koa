import crypto from 'crypto';
const md5Password = (password: string) => {
  if (!password) return;
  const md5 = crypto.createHash('md5');
  const result = md5.update(password).digest('hex');
  return result;
};

export { md5Password };
