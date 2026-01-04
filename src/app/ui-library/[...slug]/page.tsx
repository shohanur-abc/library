import { registry } from "@/ui-library/registry";
import { Block } from "@/ui-library/shadcn/registry";
import { Playground } from "@/components/Playground";

interface PageProps {
    params: Promise<{ slug: string[] }>;
}

export default async function Page({ params }: PageProps) {

    const { slug } = (await params);
    const [_uiLibrary, _category, _block, _variant, _version] = slug;

    const uiLibrary = registry?.[_uiLibrary as keyof typeof registry];
    const category = _category && uiLibrary?.filter(item => item.category === _category);
    const block = _block && category && category?.filter((item) => item.block === _block);
    const variant = _variant && block && block?.filter(item => item.variant === _variant);
    const version = _version && variant ? [variant.find(item => item.version === _version)].filter(Boolean) as Block[] : undefined;

    const blocks: Block[] = [version, variant, block, category, uiLibrary].find(v =>  v && v.length > 0) || [];
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
