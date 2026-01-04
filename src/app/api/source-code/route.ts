import { registry as shadcn } from "@/ui-library/shadcn/registry";
import { NextResponse } from "next/server";

const registry = {
    shadcn: shadcn
};

type registryKey = keyof typeof registry;
export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || '';
    if (id.length === 0) return NextResponse.json({ message: "No id provided." }, { status: 400 });

    const libraryName = id?.split("-")[0] as registryKey;
    const library = registry?.[libraryName];
    if (!library) return NextResponse.json({ message: `Library ${libraryName} not found.` }, { status: 404 });

    const block = library.find((item) => item.id === id);
    if (!block) return NextResponse.json({ message: `Block with id ${id} not found in library ${libraryName}.` }, { status: 404 });

    try {
        const sourceCode = await block?.source();
        if (!sourceCode) return NextResponse.json({ message: `Source code not available for block with id ${id}.` }, { status: 404 });
        return NextResponse.json({ message: sourceCode });
    } catch (error) {
        console.error(`Failed to fetch source for ${id}:`, error);
        return NextResponse.json({ message: `Error fetching source code for ${id}.` }, { status: 500 });
    }
}
