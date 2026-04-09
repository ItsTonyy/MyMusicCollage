import { PageShell } from '../components/PageShell';
import { CollagePreview } from '../features/collage/components/CollagePreview';

export function App() {
  return (
    <PageShell>
      <div className="space-y-10">
        <section className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
            Music Collage
          </p>
          <div className="space-y-3">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Starter app ready for a Last.fm powered album collage.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Vite, TypeScript, and Tailwind are set up. The project structure is prepared for API
              integration, collage rendering, and shared app utilities.
            </p>
          </div>
        </section>

        <CollagePreview />
      </div>
    </PageShell>
  );
}
