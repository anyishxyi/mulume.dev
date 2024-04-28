import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { defineEventHandler, getRouterParam, setResponseStatus } from 'h3';

export default defineEventHandler(async (event): Promise<object> => {
  try {
    const articleTitle = getRouterParam(event, 'title') || '';
    const directoryPath = join(process.cwd(), 'src/assets/articles');
    const files = await readdir(directoryPath);
    const mdFile = files.find((file) => file.endsWith('.md') && file.includes(articleTitle));

    if (!mdFile) {
      setResponseStatus(event, 404, `Article ${articleTitle} not found`);
      return {};
    }

    const parts = mdFile.split('_');

    const filePath = join(directoryPath, mdFile);
    const fileContent = await readFile(filePath, 'utf8');

    const creditFilePath = join(process.cwd(), 'src/assets/img/credits.json');
    const creditData = await readFile(creditFilePath, 'utf8');
    const creditJsonData = JSON.parse(creditData);
    const credit = creditJsonData[articleTitle];

    return {
      bgCredit: credit,
      date: parts[1].split('.').shift(),
      content: fileContent,
      title: formatArticleTitle(parts[0]),
    };
  } catch (error) {
    setResponseStatus(event, 500, 'Error while retrieving article');
    return {};
  }
});

function formatArticleTitle(title: string) {
  const word = title.split('-').toString().replace(/,/g, ' ');
  return word.charAt(0).toUpperCase() + word.slice(1);
}
