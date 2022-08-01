import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key')).toString();
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key')).toString();

const {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DARABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  ADMIN_NAME,
  ADMIN_PASSWORD
} = process.env as unknown as {
  APP_HOST: string;
  APP_PORT: number;
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_DARABASE: string;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  ADMIN_NAME: string;
  ADMIN_PASSWORD: string;
};

export default {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DARABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  ADMIN_NAME,
  ADMIN_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY
};
