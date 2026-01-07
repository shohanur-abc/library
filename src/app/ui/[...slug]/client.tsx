"use client"
import { CommandItem } from "@/components/ui/command";
import { useRouter } from "next/navigation";

export function CommandItemWrapper({ children, selectData, keywords, ...props }: { children?: React.ReactNode; selectData: string; keywords?: string[]; disabled?: boolean }) {
    const router = useRouter();
    const handleSelect = () => {
        router.push(selectData);
    }
    return (
        <CommandItem {...props} onSelect={handleSelect} keywords={keywords} >
            {children}
        </CommandItem >
    );
}