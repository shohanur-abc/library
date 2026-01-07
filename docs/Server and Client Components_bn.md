বিষয়বস্তুতে যান

সার্ভার এবং ক্লায়েন্ট কম্পোনেন্ট  
শেষ আপডেট: ১৯ ডিসেম্বর, ২০২৫  

ডিফল্টরূপে, layouts এবং pages সার্ভার কম্পোনেন্ট, যা আপনাকে সার্ভারে data fetch করতে এবং আপনার UI এর অংশগুলি render করতে দেয়, ঐচ্ছিকভাবে ফলাফল cache করে এবং এটি ক্লায়েন্টে stream করে। যখন আপনার interactivity বা browser API প্রয়োজন, আপনি ক্লায়েন্ট কম্পোনেন্ট ব্যবহার করে কার্যকারিতা যোগ করতে পারেন।  

এই পৃষ্ঠা ব্যাখ্যা করে যে server এবং client components Next.js-এ কীভাবে কাজ করে এবং কখন সেগুলি ব্যবহার করতে হয়, আপনার অ্যাপ্লিকেশনে সেগুলি একসাথে কীভাবে সংযুক্ত করতে হয় তার উদাহরণ সহ।  

## সার্ভার এবং ক্লায়েন্ট কম্পোনেন্ট কখন ব্যবহার করতে হয়?  

ক্লায়েন্ট এবং সার্ভার environments-এর বিভিন্ন ক্ষমতা রয়েছে। সার্ভার এবং ক্লায়েন্ট কম্পোনেন্টগুলি আপনাকে আপনার ব্যবহারের ক্ষেত্র অনুযায়ী প্রতিটি environment-এ logic চালাতে দেয়।  

**ক্লায়েন্ট কম্পোনেন্ট ব্যবহার করুন যখন আপনার প্রয়োজন:**  

- State এবং event handlers। যেমন onClick, onChange।  
- Lifecycle logic। যেমন useEffect।  
- Browser-only APIs। যেমন localStorage, window, Navigator.geolocation, ইত্যাদি।  
- Custom hooks।  

**সার্ভার কম্পোনেন্ট ব্যবহার করুন যখন আপনার প্রয়োজন:**  

- Database বা API থেকে উৎসের কাছাকাছি data fetch করুন।  
- API keys, tokens এবং অন্যান্য গোপনীয় তথ্য ব্যবহার করুন ক্লায়েন্টের কাছে প্রকাশ না করে।  
- ব্রাউজারে পাঠানো JavaScript-এর পরিমাণ কমান।  
- First Contentful Paint (FCP) উন্নত করুন এবং ক্লায়েন্টে ধীরে ধীরে content stream করুন।  

উদাহরণস্বরূপ, `<Page>` কম্পোনেন্ট একটি server component যা একটি post সম্পর্কে data fetch করে এবং এটি `<LikeButton>` এ prop হিসাবে pass করে, যা client-side interactivity পরিচালনা করে।  

### app/[id]/page.tsx  
```typescript
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'
 
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const post = await getPost(id)
 
    return (
        <div>
            <main>
                <h1>{post.title}</h1>
                {/* ... */}
                <LikeButton likes={post.likes} />
            </main>
        </div>
    )
}
```

### app/ui/like-button.tsx  
```typescript
'use client'
 
import { useState } from 'react'
 
export default function LikeButton({ likes }: { likes: number }) {
    // ...
}
```

## সার্ভার এবং ক্লায়েন্ট কম্পোনেন্টগুলি Next.js-এ কীভাবে কাজ করে?  

### সার্ভারে  

সার্ভারে, Next.js rendering orchestrate করতে React API ব্যবহার করে। Rendering কাজ খণ্ডগুলিতে বিভক্ত, পৃথক route segments দ্বারা (layouts এবং pages):  

- Server components React Server Component Payload (RSC Payload) নামক একটি বিশেষ data format-এ render করা হয়।  
- Client components এবং RSC Payload HTML pre-render করতে ব্যবহৃত হয়।  

### React Server Component Payload (RSC) কী?  

RSC Payload হল rendered React server component tree-এর একটি compact binary representation। এটি ক্লায়েন্টে browser-এর DOM update করতে React দ্বারা ব্যবহৃত হয়। RSC Payload-এ রয়েছে:  

- Server component-এর rendered ফলাফল  
- Client components কোথায় render করা উচিত এবং তাদের JavaScript files-এর references  
- Server component থেকে client component-এ pass করা যেকোনো props  

### ক্লায়েন্টে (প্রথম লোড)  

তারপর, ক্লায়েন্টে:  

- HTML ব্যবহারকারীকে দ্রুত non-interactive route preview অবিলম্বে দেখাতে ব্যবহৃত হয়।  
- RSC Payload ক্লায়েন্ট এবং সার্ভার কম্পোনেন্ট tree সামঞ্জস্য করতে ব্যবহৃত হয়।  
- JavaScript client components hydrate করতে এবং application interactive করতে ব্যবহৃত হয়।  

### হাইড্রেশন কী?  

Hydration হল React-এর DOM-এ event handlers সংযুক্ত করার প্রক্রিয়া, যা static HTML কে interactive করে তোলে।  

### পরবর্তী নেভিগেশন  

পরবর্তী নেভিগেশনে:  

- RSC Payload prefetch এবং cache করা হয় তাৎক্ষণিক নেভিগেশনের জন্য।  
- Client components সম্পূর্ণভাবে ক্লায়েন্টে render করা হয়, server-rendered HTML ছাড়াই।  

## উদাহরণ  

### ক্লায়েন্ট কম্পোনেন্ট ব্যবহার করা  

আপনি ফাইলের শীর্ষে, আপনার imports-এর উপরে "use client" directive যোগ করে একটি client component তৈরি করতে পারেন।  

### app/ui/counter.tsx  
```typescript
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
    const [count, setCount] = useState(0)
 
    return (
        <div>
            <p>{count} likes</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
```

"use client" server এবং client module graph (tree)-এর মধ্যে একটি boundary ঘোষণা করতে ব্যবহৃত হয়।  

একবার একটি ফাইল "use client" দিয়ে চিহ্নিত হলে, এর সমস্ত imports এবং child components ক্লায়েন্ট bundle-এর অংশ হিসাবে বিবেচিত হয়। এর মানে আপনাকে ক্লায়েন্টের জন্য অভিপ্রেত প্রতিটি কম্পোনেন্টে directive যোগ করতে হবে না।  

### JS বান্ডেল সাইজ কমানো  

আপনার client JavaScript bundle-এর আকার কমাতে, বড় অংশ client component হিসাবে চিহ্নিত করার পরিবর্তে নির্দিষ্ট interactive components-এ 'use client' যোগ করুন।  

উদাহরণস্বরূপ, `<Layout>` কম্পোনেন্ট একটি logo এবং navigation links-এর মতো বেশিরভাগ static উপাদান ধারণ করে, কিন্তু একটি interactive search bar অন্তর্ভুক্ত করে। `<Search />` interactive এবং একটি client component হওয়া প্রয়োজন, তবে layout-এর বাকি অংশ একটি server component থাকতে পারে।  

### app/layout.tsx  
```typescript
// Client Component
import Search from './search'
// Server Component
import Logo from './logo'
 
// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <Logo />
                <Search />
            </nav>
            <main>{children}</main>
        </>
    )
}
```

### app/ui/search.tsx  
```typescript
'use client'
 
export default function Search() {
    // ...
}
```

### সার্ভার থেকে ক্লায়েন্ট কম্পোনেন্টে ডেটা পাস করা  

আপনি props ব্যবহার করে server component থেকে client component-এ data pass করতে পারেন।  

### app/[id]/page.tsx  
```typescript
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/lib/data'
 
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const post = await getPost(id)
 
    return <LikeButton likes={post.likes} />
}
```

### app/ui/like-button.tsx  
```typescript
'use client'
 
export default function LikeButton({ likes }: { likes: number }) {
    // ...
}
```

বিকল্পভাবে, আপনি use hooks দিয়ে server component থেকে client component-এ data stream করতে পারেন। একটি উদাহরণ দেখুন।  

**জানার মতো বিষয়:** Client component-এ pass করা props-গুলি React দ্বারা serializable হওয়া প্রয়োজন।  

### সার্ভার এবং ক্লায়েন্ট কম্পোনেন্টগুলি interleave করা  

আপনি server components-গুলি একটি client component-এ prop হিসাবে pass করতে পারেন। এটি আপনাকে visually server-rendered UI কে client component-এর মধ্যে nest করতে দেয়।  

একটি সাধারণ pattern হল `<ClientComponent>` এ একটি slot তৈরি করতে children ব্যবহার করা। উদাহরণস্বরূপ, একটি `<Cart>` component যা server-এ data fetch করে, একটি `<Modal>` component-এর মধ্যে যা visibility toggle করতে client state ব্যবহার করে।  

### app/ui/modal.tsx  
```typescript
'use client'
 
export default function Modal({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
```

তারপর, একটি parent server component-এ (যেমন `<Page>`), আপনি `<Cart>` কে `<Modal>` এর child হিসাবে pass করতে পারেন:  

### app/page.tsx  
```typescript
import Modal from './ui/modal'
import Cart from './ui/cart'
 
export default function Page() {
    return (
        <Modal>
            <Cart />
        </Modal>
    )
}
```

এই pattern-এ, সমস্ত server components server-এ সময়ের আগে render করা হবে, props-গুলি সহ। ফলস্বরূপ RSC payload component tree-এর মধ্যে client components কোথায় render করা উচিত তার references ধারণ করবে।  

### Context Provider  

React context সাধারণত current theme-এর মতো global state share করতে ব্যবহৃত হয়। তবে, React context server components-এ supported নয়।  

Context ব্যবহার করতে, একটি client component তৈরি করুন যা children গ্রহণ করে:  

### app/theme-provider.tsx  
```typescript
'use client'
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
```

তারপর, এটি একটি server component-এ import করুন (যেমন layout):  

### app/layout.tsx  
```typescript
import ThemeProvider from './theme-provider'
 
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
```

আপনার server component এখন সরাসরি আপনার provider render করতে সক্ষম হবে এবং আপনার app জুড়ে অন্যান্য সমস্ত client components এই context consume করতে সক্ষম হবে।  

**জানার মতো বিষয়:** আপনার providers-গুলি tree-তে যতটা সম্ভব গভীরভাবে render করা উচিত - মনোযোগ করুন কীভাবে ThemeProvider সম্পূর্ণ `<html>` document-এর পরিবর্তে শুধুমাত্র {children} wrap করে। এটি Next.js-কে আপনার server component-এর static অংশগুলি optimize করা সহজ করে তোলে।  

### Third-party Components  

যখন third-party components ব্যবহার করছেন যা শুধুমাত্র client features-এর উপর নির্ভর করে, আপনি এটি একটি client component-এ wrap করতে পারেন যাতে এটি প্রত্যাশা অনুযায়ী কাজ করে।  

উদাহরণস্বরূপ, `<Carousel />` acme-carousel প্যাকেজ থেকে import করা যায়। এই component useState ব্যবহার করে, কিন্তু এর এখনও "use client" directive নেই।  

যদি আপনি একটি client component-এর মধ্যে `<Carousel />` ব্যবহার করেন, এটি প্রত্যাশা অনুযায়ী কাজ করবে:  

### app/gallery.tsx  
```typescript
'use client'
 
import { useState } from 'react'
import { Carousel } from 'acme-carousel'
 
export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false)
 
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>View pictures</button>
            {/* Works, since Carousel is used within a Client Component */}
            {isOpen && <Carousel />}
        </div>
    )
}
```

তবে, যদি আপনি এটি সরাসরি একটি server component-এ ব্যবহার করার চেষ্টা করেন, আপনি একটি error দেখতে পাবেন। এটি কারণ Next.js জানে না যে `<Carousel />` শুধুমাত্র client features ব্যবহার করছে।  

এটি ঠিক করতে, আপনি third-party components-গুলি যা শুধুমাত্র client features-এর উপর নির্ভর করে, আপনার নিজের client component-এ wrap করতে পারেন:  

### app/carousel.tsx  
```typescript
'use client'
 
import { Carousel } from 'acme-carousel'
 
export default Carousel
```

এখন, আপনি সরাসরি একটি server component-এর মধ্যে `<Carousel />` ব্যবহার করতে পারেন:  

### app/page.tsx  
```typescript
import Carousel from './carousel'
 
export default function Page() {
    return (
        <div>
            <p>View pictures</p>
            {/*  Works, since Carousel is a Client Component */}
            <Carousel />
        </div>
    )
}
```

## লাইব্রেরি লেখকদের জন্য পরামর্শ  

যদি আপনি একটি component library তৈরি করছেন, শুধুমাত্র client features-এর উপর নির্ভর করে এমন entry points-এ "use client" directive যোগ করুন। এটি আপনার ব্যবহারকারীদের wrapper তৈরি করার প্রয়োজন ছাড়াই server component-এ components import করতে দেয়।  

এটি লক্ষ করার যোগ্য যে কিছু bundlers "use client" directive সরিয়ে ফেলতে পারে। আপনি React Wrap Balancer এবং Vercel Analytics repositories-এ esbuild configure করার জন্য একটি উদাহরণ খুঁজে পেতে পারেন।  

## পরিবেশ বিষ এড়ানো  

JavaScript modules server এবং client component modules-এর মধ্যে share করা যায়। এর মানে দুর্ঘটনাজনিতভাবে server-only code ক্লায়েন্টে import করা সম্ভব। উদাহরণস্বরূপ, নিম্নলিখিত function বিবেচনা করুন:  

### lib/data.ts  
```typescript
export async function getData() {
    const res = await fetch('https://external-service.com/data', {
        headers: {
            authorization: process.env.API_KEY,
        },
    })
 
    return res.json()
}
```

এই function-এ একটি API_KEY রয়েছে যা ক্লায়েন্টের কাছে কখনও প্রকাশ করা উচিত নয়।  

Next.js-এ, শুধুমাত্র NEXT_PUBLIC_ prefix সহ environment variables ক্লায়েন্ট bundle-এ অন্তর্ভুক্ত করা হয়। যদি variables-গুলি prefix না থাকে, Next.js সেগুলি একটি empty string-এর সাথে প্রতিস্থাপন করে।  

ফলস্বরূপ, যদিও getData() ক্লায়েন্টে import এবং execute করা যায়, এটি প্রত্যাশা অনুযায়ী কাজ করবে না।  

Client component-এ দুর্ঘটনাজনিত ব্যবহার প্রতিরোধ করতে, আপনি server-only প্যাকেজ ব্যবহার করতে পারেন।  

তারপর, server-only code সম্বলিত ফাইলে প্যাকেজ import করুন:  

### lib/data.js  
```javascript
import 'server-only'
 
export async function getData() {
    const res = await fetch('https://external-service.com/data', {
        headers: {
            authorization: process.env.API_KEY,
        },
    })
 
    return res.json()
}
```

এখন, যদি আপনি module-টি একটি client component-এ import করার চেষ্টা করেন, তাহলে একটি build-time error হবে।  

সংশ্লিষ্ট client-only প্যাকেজ modules চিহ্নিত করতে ব্যবহার করা যেতে পারে যেখানে window object-এ access করার মতো code রয়েছে।  

Next.js-এ, server-only বা client-only install করা optional। তবে, যদি আপনার linting rules-গুলি অতিরিক্ত dependency flag করে, আপনি সমস্যাগুলি এড়াতে সেগুলি install করতে পারেন।  

### টার্মিনাল  
```bash
pnpm add server-only
```

Next.js environment বিষ থেকে স্পষ্ট error message প্রদানের জন্য অভ্যন্তরীণভাবে server-only এবং client-only imports পরিচালনা করে। NPM থেকে এই প্যাকেজগুলির বিষয়বস্তু Next.js দ্বারা ব্যবহৃত হয় না।  

Next.js নিজেই server-only এবং client-only-এর জন্য type declarations প্রদান করে, TypeScript configuration-এর জন্য যেখানে noUncheckedSideEffectImports সক্রিয়।  

## পরবর্তী পদক্ষেপ  

এই পৃষ্ঠায় উল্লেখ করা API সম্পর্কে আরও জানুন।  
- use client - জানুন কীভাবে ক্লায়েন্টে একটি কম্পোনেন্ট render করতে use client directive ব্যবহার করতে হয়।  
- পূর্ববর্তী: Linking এবং Navigation  
- পরবর্তী: Cache Components  

এটি সহায়ক ছিল কি?  

আপনার প্রতিক্রিয়া...  

সমর্থিত।  

আরম্ভ করা: Server এবং Client Components | Next.js  
