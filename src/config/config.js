import dotenv from 'dotenv';

dotenv.config();

/**
 * This is a configuration file that determinces which database configuration should
 * be used base on the environment we are running the app
 * @requires - dotenv
 * @exports - Config
 */

export const {
  BOT_TOKEN, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI,
} = process.env;
