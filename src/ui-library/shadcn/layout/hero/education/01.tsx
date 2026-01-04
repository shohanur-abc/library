import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Award, BookOpen, Clock, Code2, GraduationCap, Palette, BarChart3, Smartphone, Play, Star, Users, ArrowRight } from 'lucide-react'

const featuredCourse = {
    title: 'Master Full-Stack Web Development',
    subtitle: 'From HTML to Deployment',
    description: 'A comprehensive journey through modern web development. Learn React, Node.js, databases, and cloud deployment.',
    instructor: {
        name: 'Dr. Sarah Mitchell',
        avatar: 'https://thumbs.dreamstime.com/b/white-chicken-headshot-tilted-head-dark-background-feathered-detailed-posture-343331892.jpg?w=100',
        title: 'Senior Software Engineer at Google',
    },
    stats: { students: '45,000+', rating: 4.9, reviews: 12400, hours: 42 },
    price: { current: 49.99, original: 199.99 },
    progress: 0,
}

const categories = [
    { name: 'Development', courses: 1200, icon: Code2, color: 'bg-blue-100 dark:bg-blue-950', iconColor: 'text-blue-600 dark:text-blue-400' },
    { name: 'Business', courses: 800, icon: BarChart3, color: 'bg-emerald-100 dark:bg-emerald-950', iconColor: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Design', courses: 650, icon: Palette, color: 'bg-pink-100 dark:bg-pink-950', iconColor: 'text-pink-600 dark:text-pink-400' },
    { name: 'Marketing', courses: 450, icon: Smartphone, color: 'bg-purple-100 dark:bg-purple-950', iconColor: 'text-purple-600 dark:text-purple-400' },
]

const achievements = [
    { icon: Award, label: 'Certificate', desc: 'Industry recognized' },
    { icon: Users, label: '24/7 Support', desc: 'Community access' },
    { icon: BookOpen, label: 'Lifetime Access', desc: 'Learn at your pace' },
]

export default function EducationHero01() {
    return (
        <section className="relative overflow-hidden bg-background">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="container relative mx-auto px-4 py-12 md:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <Badge className="mb-4" variant="secondary">
                            <GraduationCap className="mr-1.5 h-3 w-3" />
                            #1 Online Learning Platform
                        </Badge>

                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                            Unlock Your
                            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Potential</span>
                        </h1>

                        <p className="mb-6 text-lg text-muted-foreground md:text-xl">Join millions of learners worldwide. Access 10,000+ courses taught by industry experts and transform your career.</p>

                        {/* Category Pills */}
                        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {categories.map((cat) => {
                                const IconComponent = cat.icon
                                return (
                                    <Card key={cat.name} className="group cursor-pointer border border-border/50 py-0 gap-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-border">
                                        <CardContent className="flex flex-col items-center p-4 text-center">
                                            <div className={`mb-3 rounded-lg ${cat.color} p-3`}>
                                                <IconComponent className={`h-5 w-5 ${cat.iconColor}`} />
                                            </div>
                                            <p className="font-semibold text-sm">{cat.name}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{cat.courses} courses</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>

                        {/* Achievements */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
                            {achievements.map(({ icon: Icon, label, desc }) => (
                                <div key={label} className="flex items-start gap-4">
                                    <div className="rounded-xl bg-primary/10 p-3 flex-shrink-0 mt-0.5">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{label}</p>
                                        <p className="text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Featured Course Card */}
                    <div className="relative">
                        <Card className="overflow-hidden border border-border/50 py-0 gap-0 shadow-xl">
                            {/* Course Preview */}
                            <div className="relative aspect-video bg-slate-900">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" alt="Course preview" className="h-full w-full object-cover opacity-85" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <Button size="lg" className="h-16 w-16 rounded-full shadow-xl">
                                        <Play className="h-6 w-6 fill-current" />
                                    </Button>
                                </div>
                                <Badge className="absolute right-4 top-4 bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
                            </div>

                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-2 flex-wrap">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span className="font-bold text-sm">{featuredCourse.stats.rating}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">({featuredCourse.stats.reviews.toLocaleString()} reviews)</span>
                                    <span className="text-muted-foreground">•</span>
                                    <span className="text-xs text-muted-foreground">{featuredCourse.stats.students} students</span>
                                </div>

                                <h3 className="mb-2 text-lg font-bold leading-snug">{featuredCourse.title}</h3>
                                <p className="mb-5 text-sm text-muted-foreground">{featuredCourse.subtitle}</p>

                                <div className="mb-5 flex items-center gap-3 pb-5 border-b border-border/50">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={featuredCourse.instructor.avatar} />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-sm">{featuredCourse.instructor.name}</p>
                                        <p className="text-xs text-muted-foreground">{featuredCourse.instructor.title}</p>
                                    </div>
                                </div>

                                <div className="mb-5 flex items-center gap-5 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        {featuredCourse.stats.hours} hours
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4" />
                                        156 lectures
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold">${featuredCourse.price.current}</span>
                                        <span className="text-sm text-muted-foreground line-through">${featuredCourse.price.original}</span>
                                    </div>
                                    <Button size="lg" className="gap-2">
                                        Enroll Now
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Floating badges */}
                        <div className="absolute -left-4 top-1/4 hidden rounded-lg border bg-card p-3 shadow-lg lg:block">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <Avatar key={i} className="h-8 w-8 border-2 border-background">
                                            <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 10}`} />
                                        </Avatar>
                                    ))}
                                </div>
                                <span className="text-sm font-medium">+2.5k enrolled today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
