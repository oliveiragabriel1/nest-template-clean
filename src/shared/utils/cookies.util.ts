import { CookieOptions } from 'express';

const accessTokenCookieOptions: CookieOptions = {
  maxAge: 3600000, // 1hora
  httpOnly: true,
  domain: 'localhost',
  path: '/',
  sameSite: 'lax',
  secure: false,
};

export default accessTokenCookieOptions;
