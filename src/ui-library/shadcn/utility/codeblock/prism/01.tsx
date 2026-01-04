import { Highlight, themes } from 'prism-react-renderer'
import { cn } from '@/lib/utils'


interface CodeBlockProps {
    code: string
    language?: string
    theme?: keyof typeof themes,
    className?: string
}
export const CodeBlock = ({ code, language = 'tsx', theme = 'nightOwl', className = 'bg-slate-800 text-sm overflow-auto p-1' }: CodeBlockProps) => {
    return (
        <section className={className}>
            <Highlight theme={themes[theme]} code={code} language={language} >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={cn(className, 'text-sm leading-5.5 p-4')} style={{ ...style, background: 'transparent', margin: 0 }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                <span className="inline-block w-12 text-right pr-4 select-none text-zinc-500 text-xs">{i + 1}</span>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </section>
    )
}

const sampleCode = () => {
  return <div className='bg-gray-800 overflow-auto'>
        {CodeBlock({
            code: `\
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { registry } from '@/ui-library/shadcn/registry'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center py-12">
        <Card className="max-w-md p-6 shadow-lg">
          <CardHeader>
            <CardTitle>Welcome to the Library</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Explore our collection and find your next favorite book.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8 p-8">
        <h2 className="text-3xl font-bold">Registry Blocks</h2>
        {registry && registry.length > 0 ? (
          registry.map((block) => (
            <div key={block.id} className="border rounded-lg p-6 bg-white shadow-md">
              <h3 className="text-xl font-semibold mb-2">{block.name}</h3>
              <p className="text-sm text-gray-600 mb-4">ID: {block.id}</p>
              <p className="text-sm text-gray-500 mb-4">Description: {block.description || 'N/A'}</p>
              <div className="tags mb-4 flex gap-2">
                {block.tags && block.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                Category: <span className="font-medium">{block.category}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No blocks found in registry.</p>
        )}
      </div>
    </main>
  )
}
        `
        })}
    </div>
}

export default sampleCode