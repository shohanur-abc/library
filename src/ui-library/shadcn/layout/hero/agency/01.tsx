import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Award, Dribbble, Figma, Framer, Play, Sparkles } from 'lucide-react'

const clients = [
    { name: 'Figma', icon: Figma },
    { name: 'Framer', icon: Framer },
    { name: 'Dribbble', icon: Dribbble },
]

const awards = [
    { year: '2024', title: 'Awwwards SOTD' },
    { year: '2024', title: 'CSS Design Award' },
    { year: '2023', title: 'FWA of the Day' },
]

const AgencyHero01 = () => {
    return (
        <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <Badge variant="outline" className="px-4 py-2 gap-2 text-sm border-primary/50">
                        <Sparkles className="size-4 text-primary" />
                        Award-Winning Creative Agency
                    </Badge>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                        We craft{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                digital
                            </span>
                        </span>
                        <br />
                        experiences
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We're a creative studio specializing in brand identity, web design, and digital experiences that captivate and convert.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="h-14 px-10 text-base gap-2 rounded-full">
                            Start a Project
                            <ArrowRight className="size-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-base gap-2 rounded-full group">
                            <Play className="size-5 group-hover:text-primary transition-colors" />
                            Watch Showreel
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground uppercase tracking-wider">Trusted by</span>
                            <div className="flex items-center gap-4">
                                {clients.map((client) => {
                                    const IconComponent = client.icon
                                    return (
                                        <div key={client.name} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                            <IconComponent className="size-5" />
                                            <span className="font-medium">{client.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8">
                        {awards.map((award) => (
                            <div key={award.title} className="group p-4 rounded-xl border bg-card/50 hover:bg-card hover:border-primary/50 transition-all cursor-pointer">
                                <div className="flex items-center justify-between mb-2">
                                    <Award className="size-5 text-primary" />
                                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <p className="text-xs text-muted-foreground">{award.year}</p>
                                <p className="font-medium text-sm">{award.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgencyHero01
