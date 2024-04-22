import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default async function find(req: VercelRequest, res: VercelResponse) {
  try {
    const articleTitle = req.query.title.toString();
    const directoryPath = path.join(process.cwd(), 'src/assets/articles');

    fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error while reading repertory');
        return;
      }

      const mdFile = files.find(
        (file: string) => file.endsWith('.md') && file.includes(articleTitle)
      );

      if (!mdFile) {
        res.status(404).send('Article not found!');
        return;
      }

      const parts = mdFile.split('_');

      const filePath = path.join(directoryPath, mdFile);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      const creditFilePath = path.join(process.cwd(), 'src/assets/img/credits.json');
      let credit = '';
      fs.readFile(creditFilePath, (err: NodeJS.ErrnoException | null, data) => {
        if (err) {
          console.error(err);
          return;
        }

        try {
          const jsonData = JSON.parse(data.toString('utf8'));
          credit = jsonData[articleTitle];

          res.status(200).send({
            bgCredit: credit,
            date: parts[1].split('.').shift(),
            content: fileContent,
            title: formatArticleTitle(parts[0]),
          });
        } catch (error) {
          console.error('Error while trying to convert json data', error);
        }
      });
    });
  } catch (error) {
    res.status(500).send('Error while retrieving article');
  }
}

function formatArticleTitle(title: string) {
  const word = title.split('-').toString().replace(/,/g, ' ');
  return word.charAt(0).toUpperCase() + word.slice(1);
}
