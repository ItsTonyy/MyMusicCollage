export function CollagePreview() {
  const slots = Array.from({ length: 9 }, (_, index) => index);

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {slots.map((slot) => (
            <div
              key={slot}
              className="aspect-square rounded-2xl border border-dashed border-white/10 bg-slate-900/80"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold text-white">Prepared Structure</h2>
        <ul className="space-y-3 text-sm leading-6 text-slate-300">
          <li>
            <span className="font-medium text-slate-100">features/lastfm</span> for API access and
            mapping Last.fm responses.
          </li>
          <li>
            <span className="font-medium text-slate-100">features/collage</span> for collage UI and
            image generation flow.
          </li>
          <li>
            <span className="font-medium text-slate-100">components</span> for shared UI building
            blocks.
          </li>
          <li>
            <span className="font-medium text-slate-100">lib</span> and{' '}
            <span className="font-medium text-slate-100">types</span> for shared helpers and domain
            types.
          </li>
        </ul>
      </div>
    </section>
  );
}
