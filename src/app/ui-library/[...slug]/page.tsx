import { registry } from "@/ui-library/registry";
import { Block } from "@/ui-library/shadcn/registry";
import { Playground } from "@/components/Playground";

interface PageProps {
    params: Promise<{ slug: string[] }>;
}

export default async function Page({ params }: PageProps) {

    const { slug } = (await params);
    const [_uiLibrary, _category, _block, _variant, ] = slug;
    const length = slug.length;

    let blocks: Block[] = registry?.[_uiLibrary as keyof typeof registry];
    if (length === 2)  blocks = blocks?.filter(item => item.category === _category);
    if (length === 3)  blocks = blocks?.filter(item => item.block === _block);
    if (length === 4)  blocks = blocks?.filter(item => item.variant === _variant);
    if (length === 5)  blocks = [blocks.find(item => item.id === slug.join("/"))].filter(Boolean) as Block[];

        return (
        <main className="flex flex-col gap-8">
            {blocks.length > 0 ? (
                blocks.map(block => (
                    <Playground
                        key={block.id}
                        name={block.variant}
                        id={block.id}
                        order={block.version}
                        category={block.category}
                        tags={block.tags}
                        Preview={<block.code />}
                    />
                ))
            ) : (
                <div className="p-8 text-center text-muted-foreground">
                    <p>No components found for the specified path.</p>
                </div>
            )}
        </main>
    );
}
