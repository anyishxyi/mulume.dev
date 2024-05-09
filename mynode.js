const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({ path: 'src/.env' });

const envFile = `export const environment = {
      MY_EMAIL: '${process.env.MY_EMAIL}',
      CLIENT_ID: '${process.env.CLIENT_ID}',
      CLIENT_SECRET: '${process.env.CLIENT_SECRET}',
      REDIRECT_URI: '${process.env.REDIRECT_URI}',
      REFRESH_TOKEN: '${process.env.REFRESH_TOKEN}',
      HOST: '${process.env.HOST}',
      APP_URL: '${process.env.APP_URL}',
};
`;
const targetPath = path.join(__dirname, './src/environments/environment.ts');
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(successColor, `${checkSign} Successfully generated environment.ts`);
  }
});
