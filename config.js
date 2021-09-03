import dotenv from 'dotenv';
dotenv.config();

export const config = {
  address: process.env.ADDRESS || '',
  key: process.env.KEY || '',
  tax: !(!!process.env.TAX)
};
