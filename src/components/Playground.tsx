"use client"
import { useState } from "react"
import { Badge } from "./ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Check, Code2, Copy, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./CodeBlock"
import Link from "next/link"
export interface PlaygroundProps {
    name: string;
    id: string;
    description?: string;
    uiLibrary?: string;
    category: string;
    tags: string[];
    order?: string;
    Preview: React.ReactNode
}
export const Playground = ({ name, id, order, description, tags = [], uiLibrary, category, Preview }: PlaygroundProps) => {
    const [copied, setCopied] = useState(false);
    const [sourceCode, setSourceCode] = useState('');
    const fetchSourceCode = async () => {
        if (!sourceCode) {
            try {
                const res = await fetch(`/api/source-code?id=${encodeURIComponent(id)}`);
                console.log(res);
                if (!res.ok) {
                    throw new Error(`Failed to fetch source code: ${res.status}`);
                }
                const data = await res.json();
                setSourceCode(data.message);
            } catch (error) {
                console.error('Error fetching source code:', error);
            }
        }
    }
    const handleCopyCode = async () => {
        if (!sourceCode) {
            await fetchSourceCode();
        }
        console.log(sourceCode);
        navigator.clipboard.writeText(sourceCode).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    const Head = () => {
        return (
            <>
                <div className="flex items-center gap-2 flex-wrap min-w-0 flex-1">
                    <Badge variant="outline" className="text-xs capitalize shrink-0">
                        {category}
                    </Badge>
                    <span className="font-medium text-sm truncate">{name} {order}</span>
                    {/* <span className="text-xs text-muted-foreground font-mono hidden sm:inline shrink-0">{id}</span> */}

                    {/* Tags - responsive display */}
                    {tags.length > 0 && (
                        <div className="flex items-center gap-1 flex-wrap">
                            {tags.map((tag, index) => (
                                <Badge key={tag} variant="secondary" className={cn('text-xs', index >= 2 && 'hidden sm:inline-flex', index >= 4 && 'hidden md:inline-flex')}>
                                    #{tag}
                                </Badge>
                            ))}
                            {tags.length > 4 && <span className="text-xs text-muted-foreground hidden md:inline">+{tags.length - 4}</span>}
                        </div>
                    )}
                </div>
            </>
        )
    }
    return (
        <div id={id} className="relative scroll-mt-16">
            <div className="sticky top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2.5 bg-background/95 backdrop-blur-sm border-b gap-2">
                <Head />

                <div className="flex items-center gap-2">
                    {/* View Code */}
                    {
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-7 gap-1.5 px-2 text-xs" onClick={fetchSourceCode}>
                                    <Code2 className="size-3.5" />
                                    <span className="hidden sm:inline">Code</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-5xl! w-[95vw] max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden">
                                <DialogHeader className="px-4 py-2 border-b shrink-0 flex-row items-center justify-between">
                                    <DialogTitle className="flex items-center gap-2 text-sm">
                                        <Head />
                                        <CopyButton copied={copied} handleCopyCode={handleCopyCode} />
                                    </DialogTitle>
                                </DialogHeader>
                                <CodeBlock code={sourceCode} />
                            </DialogContent>
                        </Dialog>
                    }

                    <CopyButton copied={copied} handleCopyCode={handleCopyCode} />

                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <Link href={`/ui/${id.split('-').join('/')}`} target="_blank"><ExternalLink className="size-3.5" /></Link>
                    </Button>
                </div>
            </div>
            <main className="min-h-[33vh]">
                {Preview}
            </main>
        </div>
    )
}

function CopyButton({ copied, handleCopyCode }: { copied: boolean, handleCopyCode: () => void }) {
    return (
        <div>
            <Button variant="outline" size="sm" className="h-7 gap-1.5 px-2 text-xs" onClick={handleCopyCode}>
                {copied ? <Check className="size-3.5 text-green-500" /> : <Copy className="size-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
            </Button>
        </div>
    )
}