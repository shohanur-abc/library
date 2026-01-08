import shadcn, { Block } from "./shadcn/registry";

export const registry: Record<string, Block[]> = {
    shadcn
};

export default registry;


export class ui {
    static registry = { shadcn } as Record<string, Block[]>;
    static list = {
        lib: Object.keys(this.registry),
        category: ["navigation", "authentication"],
        block: ["hero", "stats", "product", "features", "testimonials", "pricing", "faq", "cta", "footer", "header", "contact", "profile", "dashboard", "gallery", "blog", "comments", "search", "sidebar", "navbar", "breadcrumb", "pagination"],
        variant: ["card", "list", "grid", "table", "detail", "modal"],
        animation: ["framer-motion"],
        website: ["agency", "blog", "ecommerce", "landing", "news", "portfolio", "restaurant", "saas", "startup", "travel", "documentation", "education", "healthcare", "finance", "real-estate", "nonprofit", "event", "personal", "fitness", "music", "photography", "fashion", "automotive", "construction", "legal", "marketing", "technology", "wellness"],
    }
    static lookup = {
        ...Object.fromEntries(this.list.lib.map(libName => [libName, 'lib'])),
        ...Object.fromEntries(this.list.block.map(categoryName => [categoryName, 'category'])),
        ...Object.fromEntries(this.list.animation.map(animationName => [animationName, 'animation'])),
        ...Object.fromEntries(this.list.website.map(websiteName => [websiteName, 'website'])),
    };

    static detect(slug: string[]) { return Object.fromEntries(slug.map(v => [this.lookup[v], v])) }

    static output = [] as Block[];

    static lib(name: string) { return this.output = this.registry[name] || []; }

    static block(name: string) { return this.output = this.output.filter(item => item.block === name); }

    static animation(name: string) { return this.output = this.output.filter(item => item.animation === name); }

    static website(name: string) { return this.output = this.output.filter(item => item.website === name); }

    static keywords(names: string[]) { return this.output = this.output.filter(item => names.every(tag => item.keywords.includes(tag))); }


    // detect: Object
};