import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default async function articles(_: VercelRequest, res: VercelResponse) {
  try {
    const directoryPath = path.join(process.cwd(), 'src/assets/articles');

    fs.readdir(directoryPath, (err: any, files: string[]) => {
      if (err) {
        console.error(err);
        return;
      }

      const mdFiles = files.filter((file: string) => file.endsWith('.md')).length;

      res.setHeader('Content-Type', 'application/json');
      res.status(200).send({ count: mdFiles });
    });
  } catch (error) {
    res.status(500).send(0);
  }
}
