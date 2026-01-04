import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Clock, Package, Percent, ShoppingBag, Star, Truck, Zap } from 'lucide-react'

const promoFeatures = [
    { icon: Truck, text: 'Free Shipping Over $50' },
    { icon: Package, text: 'Easy Returns' },
    { icon: Zap, text: 'Same Day Delivery' },
]

const EcommerceHero01 = () => {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Badge variant="destructive" className="gap-1.5 px-3 py-1.5">
                                <Percent className="size-3.5" />
                                SALE LIVE
                            </Badge>
                            <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
                                <Clock className="size-3.5" />
                                Ends in 2 days
                            </Badge>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            Summer Collection <span className="text-primary">Up to 50% Off</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg">Discover our latest arrivals and trending styles. Premium quality meets unbeatable prices. Limited time offer!</p>

                        <div className="flex flex-wrap gap-3">
                            {promoFeatures.map((feature) => {
                                const IconComponent = feature.icon
                                return (
                                    <div key={feature.text} className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-full">
                                        <IconComponent className="size-4 text-primary" />
                                        <span>{feature.text}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="h-14 px-8 text-base gap-2">
                                <ShoppingBag className="size-5" />
                                Shop the Sale
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base gap-2">
                                View All Products
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                <strong className="text-foreground">4.9/5</strong> from 12,000+ reviews
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="overflow-hidden group p-0 gap-0">
                                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop" alt="Featured Product" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" />
                                <CardContent className="p-4 absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent">
                                    <Badge className="bg-primary">New</Badge>
                                    <p className="text-white font-medium mt-2">Summer Dress</p>
                                    <p className="text-white/80 text-sm">$49.99</p>
                                </CardContent>
                            </Card>

                            <div className="space-y-4">
                                <Card className="overflow-hidden group p-0 gap-0">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" alt="Shoes" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <CardContent className="p-3">
                                        <p className="font-medium text-sm">Running Shoes</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary font-bold">$79.99</span>
                                            <span className="text-muted-foreground line-through text-sm">$120</span>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="overflow-hidden group p-0 gap-0">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" alt="Watch" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <CardContent className="p-3">
                                        <p className="font-medium text-sm">Smart Watch</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary font-bold">$199.99</span>
                                            <span className="text-muted-foreground line-through text-sm">$299</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <Badge className="absolute -top-2 -right-2 px-4 py-2 text-lg font-bold bg-destructive animate-pulse text-white">-50%</Badge>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcommerceHero01
