import { defineEventHandler, setResponseStatus } from 'h3';
import { readdir } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event): Promise<object> => {
  try {
    const directoryPath = join(process.cwd(), 'src/assets/articles');
    const files = await readdir(directoryPath);
    const mdFiles = files.filter((file) => file.endsWith('.md'));

    return { files: mdFiles };
  } catch (error) {
    setResponseStatus(event, 500, 'Error while fetching articles');
    return { files: [] };
  }
});
