import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandSeparator } from "@/components/ui/command";
import React, { Fragment } from "react";
import { CommandItemWrapper } from "./client";
import registry from "@/ui/registry";
import { Box, Grid3x3, Hash, Layers } from "lucide-react";

export interface CommandGroupType {
    heading: string;
    items: {
        label: string;
        href: string;
        keywords?: string[];
        count?: string;
        disabled?: boolean;
    }[];
    icon?: React.ReactNode;
}

const searchDataMap: Record<string, CommandGroupType[]> = {
    "shadcn": searcher("shadcn"),
};

export function CommandSearch({ uiLibraryName }: { uiLibraryName: string; }) {
    const searchData = searchDataMap[uiLibraryName] || [];
    return (
        <Command className="rounded-lg border shadow-md max-w-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {searchData.map((group, i) =>
                    <Fragment key={i}>
                        <CommandGroup heading={group.heading}>
                            {group.items.map(({ label, href, keywords, count, disabled }, idx) =>
                                <CommandItemWrapper
                                    key={idx}
                                    disabled={disabled}
                                    selectData={href}
                                    keywords={keywords}
                                >
                                    {group.icon} <span>{label}</span>
                                    {count && <Badge className="ml-auto" variant="outline">{count}</Badge>}
                                </CommandItemWrapper>
                            )}
                        </CommandGroup>
                        {i < searchData.length - 1 && <CommandSeparator />}
                    </Fragment>
                )}
            </CommandList>
        </Command>
    );
}



function searcher(uiLibName: string) {
    const uiLibrary = registry[uiLibName];
    if (!uiLibrary) return [];
    return [
        {
            heading: "Blocks",
            items: [...new Set(uiLibrary.map(item => item.category + '/' + item.block))].map(v => {
                const label = v.split('/')[1];
                return {
                    label: label,
                    href: `/ui/${uiLibName}/${v}`,
                    count: uiLibrary.reduce((acc, item) => item.block === label ? acc + 1 : acc, 0).toString(),
                }
            }),
            icon: <Box />,
        },
        {
            heading: "Categories",
            items: [...new Set(uiLibrary.map(item => item.category))].map(v => {
                return {
                    label: v,
                    href: `/ui/${uiLibName}/${v}`,
                    count: uiLibrary.reduce((acc, item) => item.category === v ? acc + 1 : acc, 0).toString(),
                }
            }),
            icon: <Layers />,
        },
        {
            heading: "Variants",
            items: [...new Set(uiLibrary.map(_ => `${_.category}/${_.block}/${_.variant}`))].map(v => {
                const label = v.split('/')[2];
                return {
                    label: label,
                    href: `/ui/${uiLibName}/${v}`,
                    count: uiLibrary.reduce((acc, item) => item.variant === label ? acc + 1 : acc, 0).toString(),
                }
            }),
            icon: <Grid3x3 />,
        },
        {
            heading: "IDs",
            items: uiLibrary.flatMap(({ id, variant, block, category, version, tags }) => ({
                label: id,
                href: `/ui/${uiLibName}/${category}/${block}/${variant}/${version}`,
                keywords: tags,
            })),
            icon: <Hash />,
        }
    ] as CommandGroupType[];
}