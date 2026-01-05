# Verification Steps
After every modification, ensure the following commands are executed to maintain code quality and functionality:

1. **Lint the code**:  
  ```bash
  bun run lint
  ```

2. **Type-check the code**:  
  ```bash
  bun run type-check
  ```

3. **Run the development server**:  
  ```bash
  bun dev
  ```

4. **Build the project**:  
  ```bash
  bun build
  ```

---


## 🎨 UI/Component Rules
- follow shadcn/ui design system and globalcss styles
- shadcn prebuilt components = automatic color adjustment + less manual design
- When creating a component, maintain consistent styling across all pages
- Use shadcn/ui components from `@/components/ui` instead of building from scratch
- Keep component props well-typed with TypeScript

# Shadcn UI Components - Export Reference


---

## 📋 Components Overview (58 Total)
### Components and Exports

- **accordion**: `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
- **alert**: `Alert`, `AlertTitle`, `AlertDescription`
- **alert-dialog**: `AlertDialog`, `AlertDialogPortal`, `AlertDialogOverlay`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`
- **aspect-ratio**: `AspectRatio`
- **avatar**: `Avatar`, `AvatarImage`, `AvatarFallback`
- **avatars**: `Avatars`, `avatarsVariants`
- **badge**: `Badge`, `badgeVariants`
- **breadcrumb**: `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis`
- **button**: `Button`, `buttonVariants`
- **button-group**: `ButtonGroup`, `ButtonGroupSeparator`, `ButtonGroupText`, `buttonGroupVariants`
- **calendar**: `Calendar`, `CalendarDayButton`
- **card**: `Card`, `CardAction`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`
- **carousel**: `type CarouselApi`, `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`
- **chart**: `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`, `ChartStyle`
- **checkbox**: `Checkbox`
- **collapsible**: `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- **command**: `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandShortcut`, `CommandSeparator`
- **context-menu**: `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem`, `ContextMenuCheckboxItem`, `ContextMenuRadioItem`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuShortcut`, `ContextMenuGroup`, `ContextMenuPortal`, `ContextMenuSub`, `ContextMenuSubContent`, `ContextMenuSubTrigger`, `ContextMenuRadioGroup`
- **dialog**: `Dialog`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogOverlay`, `DialogPortal`, `DialogTitle`, `DialogTrigger`
- **drawer**: `Drawer`, `DrawerPortal`, `DrawerOverlay`, `DrawerTrigger`, `DrawerClose`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`
- **dropdown-menu**: `DropdownMenu`, `DropdownMenuPortal`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuLabel`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuSub`, `DropdownMenuSubTrigger`, `DropdownMenuSubContent`
- **empty**: `Empty`, `EmptyHeader`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`, `EmptyMedia`
- **field**: `Field`, `FieldLabel`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldLegend`, `FieldSeparator`, `FieldSet`, `FieldContent`, `FieldTitle`
- **highlight**: `Highlight`, `highlightVariants`
- **hover-card**: `HoverCard`, `HoverCardTrigger`, `HoverCardContent`
- **input**: `Input`
- **input-group**: `InputGroup`, `InputGroupAddon`, `InputGroupButton`, `InputGroupText`, `InputGroupInput`, `InputGroupTextarea`
- **input-otp**: `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator`
- **item**: `Item`, `ItemMedia`, `ItemContent`, `ItemActions`, `ItemGroup`, `ItemSeparator`, `ItemTitle`, `ItemDescription`, `ItemHeader`, `ItemFooter`
- **kbd**: `Kbd`, `KbdGroup`
- **label**: `Label`
- **menubar**: `Menubar`, `MenubarPortal`, `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarGroup`, `MenubarSeparator`, `MenubarLabel`, `MenubarItem`, `MenubarShortcut`, `MenubarCheckboxItem`, `MenubarRadioGroup`, `MenubarRadioItem`, `MenubarSub`, `MenubarSubTrigger`, `MenubarSubContent`
- **navigation-menu**: `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuContent`, `NavigationMenuTrigger`, `NavigationMenuLink`, `NavigationMenuIndicator`, `NavigationMenuViewport`, `navigationMenuTriggerStyle`
- **pagination**: `Pagination`, `PaginationContent`, `PaginationLink`, `PaginationItem`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`
- **popover**: `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverAnchor`
- **progress**: `Progress`
- **radio-group**: `RadioGroup`, `RadioGroupItem`
- **resizable**: `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle`
- **scroll-area**: `ScrollArea`, `ScrollBar`
- **select**: `Select`, `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectScrollDownButton`, `SelectScrollUpButton`, `SelectSeparator`, `SelectTrigger`, `SelectValue`
- **separator**: `Separator`
- **sheet**: `Sheet`, `SheetTrigger`, `SheetClose`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`
- **sidebar**: `Sidebar`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupAction`, `SidebarGroupContent`, `SidebarGroupLabel`, `SidebarHeader`, `SidebarInput`, `SidebarInset`, `SidebarMenu`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuButton`, `SidebarMenuItem`, `SidebarMenuSkeleton`, `SidebarMenuSub`, `SidebarMenuSubButton`, `SidebarMenuSubItem`, `SidebarProvider`, `SidebarRail`, `SidebarSeparator`, `SidebarTrigger`, `useSidebar`
- **skeleton**: `Skeleton`
- **slider**: `Slider`
- **sonner**: `Toaster`
- **spinner**: `Spinner`
- **switch**: `Switch`
- **table**: `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption`
- **tabs**: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- **textarea**: `Textarea`
- **toggle**: `Toggle`, `toggleVariants`
- **toggle-group**: `ToggleGroup`, `ToggleGroupItem`
- **tooltip**: `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider`

---

### Field Component

```tsx
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldSeparator, FieldSet, FieldContent, FieldTitle } from '@/components/ui/field'

;<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
  <FieldError>Invalid email format</FieldError>
</Field>
```

### Empty State Component

```tsx
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from '@/components/ui/empty'

;<Empty>
  <EmptyMedia>
    <Inbox className="size-12" />
  </EmptyMedia>
  <EmptyHeader>
    <EmptyTitle>No items found</EmptyTitle>
    <EmptyDescription>Get started by creating a new item.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Create Item</Button>
  </EmptyContent>
</Empty>
```

### Item Component

```tsx
import { Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemSeparator, ItemTitle, ItemDescription, ItemHeader, ItemFooter } from '@/components/ui/item'

;<Item>
  <ItemMedia>
    <Avatar />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Title</ItemTitle>
    <ItemDescription>Description text</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button size="sm">Edit</Button>
  </ItemActions>
</Item>
```

### Input Group Component

```tsx
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea } from '@/components/ui/input-group'

;<InputGroup>
  <InputGroupAddon>https://</InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
  <InputGroupButton>Go</InputGroupButton>
</InputGroup>
```

### Select Component

```tsx
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'

;<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Options</SelectLabel>
      <SelectItem value="opt1">Option 1</SelectItem>
      <SelectItem value="opt2">Option 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### ButtonGroup Component

```tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants } from '@/components/ui/button-group'

;<ButtonGroup>
  <Button>Save</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Cancel</Button>
</ButtonGroup>
```

### Highlight Component

```tsx
import { Highlight, highlightVariants } from '@/components/ui/highlight'

;<p>
  This is <Highlight variant="primary">important</Highlight> text.
</p>
```

---

## 📝 Import Patterns Quick Reference

```tsx
// Single exports
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'

// Multi exports
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardAction } from '@/components/ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogPortal, DialogOverlay } from '@/components/ui/dialog'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from '@/components/ui/select'
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from '@/components/ui/table'

// With variants
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { Toggle, toggleVariants } from '@/components/ui/toggle'

// Hooks
import { useSidebar } from '@/components/ui/sidebar'
import { use-mobile } from 
```

---

## 🔥 Most Frequently Used

| Category         | Components                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **Layout**       | `Card`, `Separator`, `AspectRatio`, `ScrollArea`, `ResizablePanel`                           |
| **Forms**        | `Input`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Textarea`, `Label`, `Field`, `InputGroup` |
| **Buttons**      | `Button`, `Toggle`, `ToggleGroup`, `ButtonGroup`                                             |
| **Feedback**     | `Progress`, `Skeleton`, `Spinner`, `Alert`, `Badge`                                          |
| **Overlays**     | `Dialog`, `Sheet`, `Drawer`, `Popover`, `Tooltip`, `HoverCard`                               |
| **Navigation**   | `Tabs`, `Accordion`, `NavigationMenu`, `Menubar`, `Breadcrumb`                               |
| **Data Display** | `Table`, `Avatar`, `Avatars`, `Stats`, `Calendar`, `Carousel`                                |
| **Sidebar**      | `Sidebar`, `SidebarContent`, `SidebarMenu`, `SidebarMenuItem`, `useSidebar`                  |
