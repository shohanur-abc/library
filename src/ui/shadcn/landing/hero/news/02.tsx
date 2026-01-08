import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, BarChart3, BookmarkPlus, Clock, Eye, Flame, Globe2, MessageSquare, Share, TrendingUp, Zap } from 'lucide-react'

const mainStory = {
    title: 'The Rise of Sustainable Aviation: How Electric Planes Are Reshaping the Future of Travel',
    excerpt: 'Major airlines are betting big on electric aircraft as the industry faces mounting pressure to reduce carbon emissions. Here is what the next decade looks like.',
    category: 'Innovation',
    readTime: '12 min',
    views: '245K',
    comments: 842,
    author: { name: 'Emma Watson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', role: 'Aviation Correspondent' },
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200',
}

const sideStories = [
    {
        id: 1,
        title: 'Global Markets Rally as Trade Tensions Ease Between Major Economies',
        category: 'Markets',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
        time: '30 min ago',
        isHot: true,
    },
    {
        id: 2,
        title: 'Tech Giants Face New Regulatory Challenges in European Markets',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
        time: '1 hour ago',
        isHot: false,
    },
    {
        id: 3,
        title: 'Central Banks Signal Policy Shifts Amid Economic Uncertainty',
        category: 'Economy',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400',
        time: '2 hours ago',
        isHot: true,
    },
]

const quickLinks = [
    { label: 'World', count: 24, icon: Globe2 },
    { label: 'Business', count: 32, icon: BarChart3 },
    { label: 'Markets', count: 18, icon: TrendingUp },
    { label: 'Tech', count: 15, icon: Zap },
]

const liveStats = [
    { label: 'S&P 500', value: '+1.2%', positive: true },
    { label: 'NASDAQ', value: '+0.8%', positive: true },
    { label: 'DOW', value: '-0.3%', positive: false },
    { label: 'BTC', value: '+2.4%', positive: true },
]

export default function NewsHero02() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-950/50 via-transparent to-purple-950/30" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            {/* Live Ticker */}
            <div className="relative border-b border-white/10 bg-black/30 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between gap-4 overflow-x-auto">
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-xs font-medium text-red-400">LIVE</span>
                        </div>
                        <div className="flex items-center gap-6">
                            {liveStats.map((stat) => (
                                <div key={stat.label} className="flex items-center gap-2 text-sm shrink-0">
                                    <span className="text-white/60">{stat.label}</span>
                                    <span className={stat.positive ? 'text-green-400' : 'text-red-400'}>
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mx-auto px-4 py-10 md:py-14">
                {/* Quick Links Bar */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                            <Globe2 className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="font-bold text-lg">Daily Pulse</span>
                            <p className="text-xs text-white/50">Your trusted news source</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {quickLinks.map(({ label, count, icon: Icon }) => (
                            <Button key={label} variant="ghost" size="sm" className="text-white/80 hover:bg-white/10 hover:text-white gap-2">
                                <Icon className="h-4 w-4" />
                                {label}
                                <Badge variant="secondary" className="bg-white/20 text-xs">
                                    {count}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Featured Article */}
                    <div className="lg:col-span-2">
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                            <img src={mainStory.image} alt={mainStory.title} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <Badge className="bg-blue-600 px-3 py-1">
                                        <Flame className="h-3 w-3 mr-1" />
                                        {mainStory.category}
                                    </Badge>
                                    <Separator orientation="vertical" className="h-4 bg-white/20" />
                                    <span className="flex items-center gap-1 text-sm text-white/70">
                                        <Clock className="h-3.5 w-3.5" />
                                        {mainStory.readTime}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-white/70">
                                        <Eye className="h-3.5 w-3.5" />
                                        {mainStory.views}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-white/70">
                                        <MessageSquare className="h-3.5 w-3.5" />
                                        {mainStory.comments}
                                    </span>
                                </div>

                                <h1 className="mb-3 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                                    {mainStory.title}
                                </h1>

                                <p className="mb-6 text-white/70 md:text-lg max-w-2xl">
                                    {mainStory.excerpt}
                                </p>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="border-2 border-blue-500/50 h-11 w-11">
                                            <AvatarImage src={mainStory.author.avatar} />
                                            <AvatarFallback>{mainStory.author.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{mainStory.author.name}</p>
                                            <p className="text-sm text-white/60">{mainStory.author.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 h-10 w-10">
                                            <BookmarkPlus className="h-5 w-5" />
                                        </Button>
                                        <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 h-10 w-10">
                                            <Share className="h-5 w-5" />
                                        </Button>
                                        <Button className="bg-white text-black hover:bg-white/90 h-10 px-6">
                                            Read Full Story
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Stories */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="font-bold text-lg flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-blue-400" />
                                Trending Now
                            </h2>
                        </div>

                        {sideStories.map((story, index) => (
                            <Card key={story.id} className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 py-0 gap-0 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                                <CardContent className="flex gap-4 p-0">
                                    <div className="relative">
                                        <img src={story.image} alt={story.title} className="h-28 w-28 flex-shrink-0 object-cover transition-transform group-hover:scale-105" />
                                        <div className="absolute top-2 left-2 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center py-3 pr-4 flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="outline" className="border-white/20 text-white/80 text-xs">
                                                {story.category}
                                            </Badge>
                                            {story.isHot && (
                                                <Flame className="h-3.5 w-3.5 text-orange-400" />
                                            )}
                                        </div>
                                        <h3 className="mb-1 line-clamp-2 font-semibold leading-tight text-white transition-colors group-hover:text-blue-400">
                                            {story.title}
                                        </h3>
                                        <span className="text-xs text-white/50">{story.time}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <Button variant="outline" className="mt-auto border-white/20 text-white hover:bg-white/10">
                            View All Headlines
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
