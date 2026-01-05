'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { X, Search, Layers, Tag, Grid3x3, Box, Hash } from 'lucide-react'

type BlockMetadata = {
    uiLibrary: string
    category: string
    block: string
    variant: string
    version: string
    id: string
    tags: string[]
}

interface FilterProps {
    blocks: BlockMetadata[]
    currentFilters: {
        category?: string
        block?: string
        variant?: string
        tags?: string[]
    }
    hideFilter?: boolean
}

export function FilterSystem({ blocks, currentFilters, hideFilter = false }: FilterProps) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [selectedFilters, setSelectedFilters] = useState<{
        category: string[]
        block: string[]
        variant: string[]
        id: string[]
        tags: string[]
    }>({
        category: currentFilters.category ? [currentFilters.category] : [],
        block: currentFilters.block ? [currentFilters.block] : [],
        variant: currentFilters.variant ? [currentFilters.variant] : [],
        id: [],
        tags: currentFilters.tags || []
    })

    const router = useRouter()

    // Extract unique values for each filter group
    const categories = Array.from(new Set(blocks.map(b => b.category))).sort()
    const blockTypes = Array.from(new Set(blocks.map(b => b.block))).sort()
    const variants = Array.from(new Set(blocks.map(b => b.variant))).sort()
    const ids = Array.from(new Set(blocks.map(b => b.id))).sort()
    const allTags = Array.from(new Set(blocks.flatMap(b => b.tags))).filter(Boolean).sort()

    // Keyboard shortcut: Cmd+K or Ctrl+K
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const navigateToFilter = (group: string, value: string) => {
        // Build the URL path based on filter type
        let path = '/ui-library/shadcn'

        if (group === 'category') {
            path += `/${value}`
        } else if (group === 'block') {
            // Find a category that has this block
            const blockWithCategory = blocks.find(b => b.block === value)
            if (blockWithCategory) {
                path += `/${blockWithCategory.category}/${value}`
            }
        } else if (group === 'variant') {
            // Find a category and block that has this variant
            const blockWithVariant = blocks.find(b => b.variant === value)
            if (blockWithVariant) {
                path += `/${blockWithVariant.category}/${blockWithVariant.block}/${value}`
            }
        } else if (group === 'tags') {
            // Find first block with this tag
            const blockWithTag = blocks.find(b => b.tags.includes(value))
            if (blockWithTag) {
                path += `/${blockWithTag.category}/${blockWithTag.block}/${blockWithTag.variant}`
            }
        }

        router.push(path)
        setOpen(false)
    }

    const clearFilter = (group: keyof typeof selectedFilters, value?: string) => {
        setSelectedFilters(prev => {
            if (value) {
                return { ...prev, [group]: prev[group].filter(v => v !== value) }
            }
            return { ...prev, [group]: [] }
        })
    }

    const clearAllFilters = () => {
        setSelectedFilters({
            category: currentFilters.category ? [currentFilters.category] : [],
            block: currentFilters.block ? [currentFilters.block] : [],
            variant: currentFilters.variant ? [currentFilters.variant] : [],
            id: [],
            tags: []
        })
    }

    const navigateToBlock = (blockId: string) => {
        router.push(`/ui-library/${blockId}`)
        setOpen(false)
    }

    const activeFilterCount = Object.values(selectedFilters).flat().length -
        (currentFilters.category ? 1 : 0) -
        (currentFilters.block ? 1 : 0) -
        (currentFilters.variant ? 1 : 0)

    if (hideFilter) return null

    return (
        <>
            {/* Trigger Button */}
            <div className="flex items-center gap-3 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b p-4">
                <Button
                    variant="outline"
                    className="relative gap-2 h-10"
                    onClick={() => setOpen(true)}
                >
                    <Search className="size-4" />
                    <span className="hidden sm:inline">Search & Filter...</span>
                    <span className="sm:hidden">Search...</span>
                    <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                    {activeFilterCount > 0 && (
                        <Badge variant="default" className="ml-2 size-5 flex items-center justify-center p-0 text-xs">
                            {activeFilterCount}
                        </Badge>
                    )}
                </Button>

                {/* Active Filters Display */}
                {activeFilterCount > 0 && (
                    <div className="flex flex-1 items-center gap-2 overflow-x-auto">
                        {selectedFilters.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="gap-1">
                                <Tag className="size-3" />
                                {tag}
                                <X
                                    className="size-3 cursor-pointer hover:text-destructive"
                                    onClick={() => clearFilter('tags', tag)}
                                />
                            </Badge>
                        ))}
                        {selectedFilters.id.map(id => (
                            <Badge key={id} variant="secondary" className="gap-1">
                                <Hash className="size-3" />
                                {id.split('-').pop()}
                                <X
                                    className="size-3 cursor-pointer hover:text-destructive"
                                    onClick={() => clearFilter('id', id)}
                                />
                            </Badge>
                        ))}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs"
                            onClick={clearAllFilters}
                        >
                            Clear all
                        </Button>
                    </div>
                )}
            </div>

            {/* Command Dialog */}
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder="Search by name, category, tag..."
                    value={search}
                    onValueChange={setSearch}
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    {/* Categories Group */}
                    {categories.length > 0 && (
                        <>
                            <CommandGroup heading={
                                <div className="flex items-center gap-2">
                                    <Layers className="size-3" />
                                    <span>Categories</span>
                                    {selectedFilters.category.length > 0 && (
                                        <Badge variant="secondary" className="ml-auto size-4 flex items-center justify-center p-0 text-[10px]">
                                            {selectedFilters.category.length}
                                        </Badge>
                                    )}
                                </div>
                            }>
                                {categories.map(category => (
                                    <CommandItem
                                        key={category}
                                        onSelect={() => navigateToFilter('category', category)}
                                        className="cursor-pointer"
                                    >
                                        <Layers className="mr-2 size-4 text-muted-foreground" />
                                        <span className="capitalize">{category}</span>
                                        <Badge variant="outline" className="ml-auto text-xs">
                                            {blocks.filter(b => b.category === category).length}
                                        </Badge>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {/* Blocks Group */}
                    {blockTypes.length > 0 && (
                        <>
                            <CommandGroup heading={
                                <div className="flex items-center gap-2">
                                    <Box className="size-3" />
                                    <span>Blocks</span>
                                    {selectedFilters.block.length > 0 && (
                                        <Badge variant="secondary" className="ml-auto size-4 flex items-center justify-center p-0 text-[10px]">
                                            {selectedFilters.block.length}
                                        </Badge>
                                    )}
                                </div>
                            }>
                                {blockTypes.map(block => (
                                    <CommandItem
                                        key={block}
                                        onSelect={() => navigateToFilter('block', block)}
                                        className="cursor-pointer"
                                    >
                                        <Box className="mr-2 size-4 text-muted-foreground" />
                                        <span className="capitalize">{block}</span>
                                        <Badge variant="outline" className="ml-auto text-xs">
                                            {blocks.filter(b => b.block === block).length}
                                        </Badge>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {/* Variants Group */}
                    {variants.length > 0 && (
                        <>
                            <CommandGroup heading={
                                <div className="flex items-center gap-2">
                                    <Grid3x3 className="size-3" />
                                    <span>Variants</span>
                                    {selectedFilters.variant.length > 0 && (
                                        <Badge variant="secondary" className="ml-auto size-4 flex items-center justify-center p-0 text-[10px]">
                                            {selectedFilters.variant.length}
                                        </Badge>
                                    )}
                                </div>
                            }>
                                {variants.map(variant => (
                                    <CommandItem
                                        key={variant}
                                        onSelect={() => navigateToFilter('variant', variant)}
                                        className="cursor-pointer"
                                    >
                                        <Grid3x3 className="mr-2 size-4 text-muted-foreground" />
                                        <span className="capitalize">{variant}</span>
                                        <Badge variant="outline" className="ml-auto text-xs">
                                            {blocks.filter(b => b.variant === variant).length}
                                        </Badge>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {/* Tags Group */}
                    {allTags.length > 0 && (
                        <>
                            <CommandGroup heading={
                                <div className="flex items-center gap-2">
                                    <Tag className="size-3" />
                                    <span>Tags</span>
                                    {selectedFilters.tags.length > 0 && (
                                        <Badge variant="secondary" className="ml-auto size-4 flex items-center justify-center p-0 text-[10px]">
                                            {selectedFilters.tags.length}
                                        </Badge>
                                    )}
                                </div>
                            }>
                                {allTags.map(tag => (
                                    <CommandItem
                                        key={tag}
                                        onSelect={() => navigateToFilter('tags', tag)}
                                        className="cursor-pointer"
                                    >
                                        <Tag className="mr-2 size-4 text-muted-foreground" />
                                        <span className="capitalize">{tag}</span>
                                        <Badge variant="outline" className="ml-auto text-xs">
                                            {blocks.filter(b => b.tags.includes(tag)).length}
                                        </Badge>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {/* Component IDs Group */}
                    {ids.length > 0 && (
                        <CommandGroup heading={
                            <div className="flex items-center gap-2">
                                <Hash className="size-3" />
                                <span>Component IDs</span>
                                {selectedFilters.id.length > 0 && (
                                    <Badge variant="secondary" className="ml-auto size-4 flex items-center justify-center p-0 text-[10px]">
                                        {selectedFilters.id.length}
                                    </Badge>
                                )}
                            </div>
                        }>
                            {ids.map(id => (
                                <CommandItem
                                    key={id}
                                    onSelect={() => navigateToBlock(id)}
                                    className="cursor-pointer"
                                >
                                    <Search className="mr-2 size-4" />
                                    <div className="flex flex-col">
                                        <span className="text-sm">{id}</span>
                                        <span className="text-xs text-muted-foreground">
                                            {blocks.find(b => b.id === id)?.category} / {blocks.find(b => b.id === id)?.block}
                                        </span>
                                    </div>
                                    <div className="ml-auto flex gap-1">
                                        {blocks.find(b => b.id === id)?.tags.slice(0, 3).map(tag => (
                                            <Badge key={tag} variant="outline" className="text-[10px] h-4 px-1">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    )}
                </CommandList>

                {/* Footer with filter summary */}
                <div className="border-t p-2 text-xs text-muted-foreground flex items-center justify-between">
                    <span>
                        {blocks.length} component{blocks.length !== 1 ? 's' : ''} available
                    </span>
                    {activeFilterCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onClick={clearAllFilters}
                        >
                            Clear all filters
                        </Button>
                    )}
                </div>
            </CommandDialog>
        </>
    )
}

// Hook to apply filters to blocks
export function useFilteredBlocks(blocks: BlockMetadata[], filters: {
    category: string[]
    block: string[]
    variant: string[]
    id: string[]
    tags: string[]
}) {
    return blocks.filter(block => {
        // If any filter group has selections, block must match at least one
        if (filters.category.length > 0 && !filters.category.includes(block.category)) return false
        if (filters.block.length > 0 && !filters.block.includes(block.block)) return false
        if (filters.variant.length > 0 && !filters.variant.includes(block.variant)) return false
        if (filters.id.length > 0 && !filters.id.includes(block.id)) return false
        if (filters.tags.length > 0 && !filters.tags.some(tag => block.tags.includes(tag))) return false

        return true
    })
}
