import capitalizeWords from "@/utils/capitalizeWords";
import { getFilePaths } from "./getFilePaths";
import { registry } from "@/ui-library/shadcn/registry";
import fs from "fs/promises";

(async () => {
    const tsxs = await getFilePaths('src/ui-library/shadcn')
        .then(allPaths => allPaths.filter(fp => fp.endsWith('.tsx')))
        .then(tsxPaths => tsxPaths.map(fp => fp.replace('.tsx', '').replace('src/', '')));
    console.dir(tsxs);

    const registry$shadcn = `\
import dynamic from "next/dynamic";
import { getRawCode } from "@/utils/rawCode";

export const registry = [
${tsxs.map((filePath) => {
        const parts = filePath.split('/').slice(-5);
        const id = parts.join('-');
        const currBlock = registry.find((b) => b.id === id);
        return `    {
        uiLibrary: '${parts[0]}',
        category: '${parts[1]}',
        block: '${parts[2]}',
        variant: '${parts[3]}',
        version: '${parts[4]}',
        id: '${id}',
        tags: [${(currBlock?.tags || ['']).map((s) => `'${s}'`).join(', ')}],
        code: dynamic(() => import('@/${filePath}')),
        source: async () => await getRawCode('src/${filePath}.tsx'),
    },`;
    }).join('\n')}
]\n
export default registry;
export type Block = (typeof registry)[number];
`;
    await fs.writeFile('src/ui-library/shadcn/registry.ts', registry$shadcn);
    console.log('Registry file updated successfully.');
})()

