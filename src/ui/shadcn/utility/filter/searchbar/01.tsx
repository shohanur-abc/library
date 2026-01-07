"use client";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from "@/components/ui/command";
import { Calendar, Smile, Calculator, User, CreditCard, Settings, Home, BarChart3, Bell, Shield, Eye, HelpCircle, LogOut, Palette, Zap, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { CommandItemWrapper } from "./help";

export interface CommandGroupType {
    heading: string;
    items: {
        label: string;
        href: string;
        icon: React.ReactNode;
        keywords?: string[];
        shortcut?: string;
        disabled?: boolean;
    }[];
}

// Server Component
export function CommandSearch({ data, placeholder }: { data: CommandGroupType[]; placeholder?: string; }) {
    return (
        <Command className="rounded-lg border shadow-md max-w-md">
            <CommandInput placeholder={placeholder || "Type a command or search..."} />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {data.map((group, i) =>
                    <Fragment key={i}>
                        <CommandGroup heading={group.heading}>
                            {group.items.map(({ label, href, icon, keywords, shortcut, disabled }) =>
                                <CommandItemWrapper
                                    key={label}
                                    disabled={disabled}
                                    selectData={href}
                                    keywords={keywords}
                                >
                                    {icon} <span>{label}</span>
                                    {shortcut && <CommandShortcut>{shortcut}</CommandShortcut>}
                                </CommandItemWrapper>
                            )}
                        </CommandGroup>
                        {i < data.length - 1 && <CommandSeparator />}
                    </Fragment>
                )}
            </CommandList>
        </Command>
    );
}

// // Client Component
// function CommandItemWrapper({ children, selectData, keywords, ...props }: { children?: React.ReactNode; selectData: string; keywords?: string[]; disabled?: boolean }) {
//     const router = useRouter();
//     const handleSelect = () => {
//         router.push(selectData);
//     }
//     return (
//         <CommandItem {...props} onSelect={handleSelect} keywords={keywords} >
//             {children}
//         </CommandItem >
//     );
// }






// Demo Component
function CommandSearchDemo() {
    return (
        <CommandSearch
            placeholder="Type a command or search..."
            data={
                [
                    {
                        heading: "Categories",
                        items: [
                            {
                                label: "layout",
                                href: "/ui/shadcn/layout",
                                icon: <Calendar />,
                                keywords: [],
                                disabled: false,
                            },
                            {
                                label: "Authentication",
                                href: "/ui/shadcn/auth",
                                icon: <Smile />,
                                keywords: [],
                                disabled: false,
                            },
                            {
                                label: "Utilities",
                                href: "/ui/shadcn/utility",
                                icon: <Calculator />,
                                keywords: [],
                                disabled: true,
                            },
                        ],
                    },
                    {
                        heading: "Blocks types",
                        items: [
                            {
                                label: "Hero Sections",
                                href: "/ui/shadcn/layout/hero",
                                icon: <User />,
                                keywords: [],
                                shortcut: "⌘P",
                                disabled: false,
                            },
                            {
                                label: "Navigation Bars",
                                href: "/ui/shadcn/navigation/navbar",
                                icon: <CreditCard />,
                                keywords: ["nav", "menu", "header"],
                                shortcut: "⌘B",
                                disabled: false,
                            },
                            {
                                label: "Product Cards",
                                href: "/ui/shadcn/card/product-card",
                                icon: <Settings />,
                                keywords: [],
                                shortcut: "⌘S",
                                disabled: false,
                            },
                        ],
                    },
                    {
                        heading: "Some Special Blocks",
                        items: [
                            {
                                label: "CodeBlock",
                                href: "/ui/shadcn/utility/codeblock/01",
                                icon: <Home />,
                                keywords: [],
                                shortcut: "⌘H",
                                disabled: false,
                            },
                            {
                                label: "Nice Hero",
                                href: "/ui/shadcn/layout/hero/portfolio/01",
                                icon: <BarChart3 />,
                                keywords: [],
                                shortcut: "⌘D",
                                disabled: false,
                            },
                        ],
                    },
                ]
            }
        />
    );
}

export default CommandSearchDemo;