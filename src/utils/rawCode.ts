import fs from 'fs/promises';
import path from 'path';

export async function getRawCode(filePath: string): Promise<string> {
    try {
        const absolutePath = path.resolve(filePath);
        const code = await fs.readFile(absolutePath, 'utf-8');
        return code;
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Error reading file ${filePath}: ${err.message}`);
        } else {
            console.error(`Unknown error occurred while reading file ${filePath}`);
        }
        return '';
    }
}