import * as dotenv from 'dotenv';
import * as fs from 'fs';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
} else {
  console.error('Using .env.example file to configure the project, please add a formal .env file');
  dotenv.config({ path: '.env.example' });
}

// ENV value can be test, dev and prod
export const ENV = process.env.NODE_ENV;

let MONGODB_URI;

switch (ENV) {
  case 'test': {
    MONGODB_URI = process.env.MONGODB_TEST_URI;
    break;
  }
  case 'prod': {
    MONGODB_URI = process.env.MONGODB_PROD_URI;
    break;
  }
  default: {
    MONGODB_URI = process.env.MONGODB_DEV_URI;
  }
}

if (!MONGODB_URI) {
  console.error('No mongo connection string. Please set MONGODB_URI environment variable.');
  process.exit(1);
}

export const MONGO_URI = MONGODB_URI;
