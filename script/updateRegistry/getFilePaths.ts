import fs from 'fs/promises';
import path from 'path';

export async function getFilePaths(dir: string): Promise<string[]> {
    try {
        const files = await fs.readdir(dir, { withFileTypes: true });
        let filePaths: string[] = [];

        for (const file of files) {
            const filePath = path.join(dir, file.name);
            if (file.isDirectory()) {
                filePaths = [...filePaths, ...(await getFilePaths(filePath))];
            } else {
                filePaths.push(filePath);
            }
        }

        return filePaths;
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Error: ${err.message}`);
        } else {
            console.error('Unknown error occurred');
        }
        return [];
    }
}