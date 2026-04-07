import type { PropsWithChildren } from 'react'

export function PageShell({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        {children}
      </div>
    </main>
  )
}
