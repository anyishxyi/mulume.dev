import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default async function all(_: VercelRequest, res: VercelResponse) {
  try {
    const directoryPath = path.join(process.cwd(), 'src/assets/articles');

    fs.readdir(directoryPath, (err: any, files: string[]) => {
      if (err) {
        console.error(err);
        return;
      }

      const mdFiles = files.filter((file: string) => file.endsWith('.md'));

      res.status(200).send({ files: mdFiles });
    });
  } catch (error) {
    res.status(500).send(0);
  }
}
