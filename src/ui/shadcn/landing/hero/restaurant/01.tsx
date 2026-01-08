import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Calendar, ChefHat, Clock, Flame, Globe, MapPin, Phone, Quote, Sparkles, Star, Utensils } from 'lucide-react'

const restaurant = {
    name: 'La Maison Dorée',
    tagline: 'Where Culinary Art Meets Timeless Elegance',
    description: 'An award-winning destination for discerning palates. Our master chefs transform the finest seasonal ingredients into extraordinary dining experiences that awaken all senses.',
    rating: 4.9,
    reviews: 847,
    priceRange: '$$$',
    cuisine: 'French Contemporary (Halal)',
    hours: 'Tue-Sun: 5PM - 11PM',
    location: '123 Gourmet Avenue, Downtown',
}

const specialties = [
    {
        name: "Chef's Tasting Menu",
        price: '$185',
        desc: '8-course seasonal journey with mocktail pairing option',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
        tag: 'Signature',
    },
    {
        name: 'Mocktail Experience',
        price: '$95',
        desc: 'Curated selections of refreshing non-alcoholic beverages',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300',
        tag: 'Popular',
    },
    {
        name: 'Private Dining',
        price: 'Custom',
        desc: "Exclusive chef's table for up to 12 guests",
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300',
        tag: 'Premium',
    },
]

const awards = [
    { title: 'Michelin', detail: '⭐⭐', icon: Star },
    { title: 'Halal Certification', detail: 'Certified', icon: Globe },
    { title: 'Zagat', detail: '28/30', icon: Globe },
]

const testimonial = {
    quote: 'An extraordinary dining experience. Every dish tells a story of passion and precision.',
    author: 'James Morrison',
    source: 'Food & Wine Magazine',
}

const highlights = [
    { icon: ChefHat, label: 'Master Chefs', value: '3 Michelin-starred' },
    { icon: Utensils, label: 'Tasting Menus', value: '4 seasonal' },
    { icon: Globe, label: 'Halal Certified', value: '100%' },
]

export default function RestaurantHero01() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-stone-950">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/80" />
            </div>

            {/* Decorative elements */}
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-amber-500/20 animate-pulse" />
            <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border border-amber-500/10" />
            <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-amber-400/50" />
            <div className="absolute bottom-1/3 left-1/3 h-1 w-1 rounded-full bg-amber-400/30" />

            <div className="container relative mx-auto px-4 py-16 md:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="text-white">
                        {/* Awards Row */}
                        <div className="mb-8 flex flex-wrap gap-3">
                            {awards.map(({ title, detail, icon: Icon }) => (
                                <Badge key={title} variant="outline" className="border-amber-500/50 bg-amber-500/10 text-amber-400 gap-2 px-3 py-1.5">
                                    <Icon className="h-3.5 w-3.5" />
                                    {title} {detail}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="mb-3 font-serif text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">{restaurant.name}</h1>
                        <p className="mb-6 text-xl text-amber-400/90 italic">{restaurant.tagline}</p>

                        <p className="mb-8 max-w-lg text-lg text-white/70 leading-relaxed">{restaurant.description}</p>

                        {/* Rating & Info */}
                        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-1.5 bg-amber-500/10 rounded-full px-4 py-2">
                                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                                <span className="font-bold text-amber-400">{restaurant.rating}</span>
                                <span className="text-white/60">({restaurant.reviews})</span>
                            </div>
                            <Separator orientation="vertical" className="h-6 bg-white/20" />
                            <div className="flex items-center gap-1.5 text-white/80">
                                <ChefHat className="h-4 w-4 text-amber-400/70" />
                                {restaurant.cuisine}
                            </div>
                            <div className="text-amber-400 font-medium">{restaurant.priceRange}</div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-8 grid grid-cols-3 gap-4">
                            {highlights.map(({ icon: Icon, label, value }) => (
                                <div key={label} className="text-center border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-sm">
                                    <Icon className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                                    <p className="text-xs text-white/50 mb-1">{label}</p>
                                    <p className="font-semibold text-sm">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Info Cards */}
                        <div className="mb-8 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                                    <Clock className="h-5 w-5 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50">Hours</p>
                                    <p className="font-medium">{restaurant.hours}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50">Location</p>
                                    <p className="font-medium">{restaurant.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400 h-12 px-8">
                                <Calendar className="mr-2 h-5 w-5" />
                                Reserve a Table
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                                <Phone className="mr-2 h-5 w-5" />
                                (800) 123-4567
                            </Button>
                        </div>
                    </div>

                    {/* Right - Specialties */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="flex items-center gap-2 font-serif text-xl text-amber-400">
                                <Sparkles className="h-5 w-5" />
                                Signature Experiences
                            </h3>
                        </div>

                        {specialties.map((item) => (
                            <Card key={item.name} className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 py-0 gap-0 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-amber-500/30">
                                <CardContent className="flex items-center gap-4 p-0">
                                    <div className="relative">
                                        <img src={item.image} alt={item.name} className="h-28 w-28 flex-shrink-0 object-cover transition-transform group-hover:scale-110" />
                                        <Badge className="absolute top-2 left-2 bg-amber-500/90 text-xs">{item.tag}</Badge>
                                    </div>
                                    <div className="flex-1 py-4 pr-4">
                                        <div className="mb-1.5 flex items-center justify-between">
                                            <h4 className="font-semibold text-white group-hover:text-amber-400 transition-colors">{item.name}</h4>
                                            <span className="text-amber-400 font-bold">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-white/60">{item.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Testimonial */}
                        <div className="mt-6 p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
                            <Quote className="h-8 w-8 text-amber-500/30 mb-3" />
                            <p className="text-white/80 italic mb-3">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="font-medium text-amber-400">{testimonial.author}</span>
                                <span className="text-white/40">—</span>
                                <span className="text-white/50">{testimonial.source}</span>
                            </div>
                        </div>

                        <Button variant="link" className="text-amber-400 hover:text-amber-300 p-0">
                            <Flame className="mr-2 h-4 w-4" />
                            Explore Full Menu →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
