import { useId, useState } from 'react';

const collageSizeOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const textPositionOptions = [
  { value: 'top-left', label: '↖' },
  { value: 'bottom-left', label: '↙' },
  { value: 'bottom-center', label: '↓' },
] as const;

const periodOptions = [
  { value: '7day', label: '7 Dias' },
  { value: '1month', label: '1 Mês' },
  { value: '3month', label: '3 Meses' },
  { value: '6month', label: '6 Meses' },
  { value: '12month', label: '12 Meses' },
] as const;

const mockAlbums = [
  { id: '1', title: 'Neon Skyline', playcount: 184 },
  { id: '2', title: 'Static Hearts', playcount: 162 },
  { id: '3', title: 'Midnight Cassette', playcount: 149 },
  { id: '4', title: 'Signal Bloom', playcount: 132 },
  { id: '5', title: 'Blue Frequency', playcount: 128 },
  { id: '6', title: 'Afterglow Tape', playcount: 121 },
  { id: '7', title: 'Echo Harbor', playcount: 114 },
  { id: '8', title: 'Parallel Noise', playcount: 106 },
  { id: '9', title: 'Night Transit', playcount: 98 },
];

const tileBackground = 'from-slate-700 via-slate-800 to-slate-900';
const tileMetaPositionClasses = {
  'top-left': 'left-1 top-1 text-left sm:left-2 sm:top-2',
  'bottom-left': 'bottom-1 left-1 text-left sm:bottom-2 sm:left-2',
  'bottom-center': 'bottom-1 left-1/2 -translate-x-1/2 text-center sm:bottom-2',
} as const;

type ToggleProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

function BooleanToggle({ label, value, onChange }: ToggleProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between space-y-3">
      <p className="text-sm font-medium text-slate-200">{label}</p>
      <div className="inline-flex w-fit rounded-full border border-white/10 bg-slate-900/80 p-1">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            value ? 'bg-emerald-400 text-slate-950' : 'text-slate-300'
          }`}
        >
          True
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            !value ? 'bg-emerald-400 text-slate-950' : 'text-slate-300'
          }`}
        >
          False
        </button>
      </div>
    </div>
  );
}

export function CollagePreview() {
  const usernameId = useId();
  const periodId = useId();
  const collageSizeId = useId();
  const textPositionId = useId();
  const [username, setUsername] = useState('');
  const [period, setPeriod] = useState<(typeof periodOptions)[number]['value']>('1month');
  const [collageSize, setCollageSize] = useState<(typeof collageSizeOptions)[number]>(3);
  const [textPosition, setTextPosition] =
    useState<(typeof textPositionOptions)[number]['value']>('top-left');
  const [showAlbumName, setShowAlbumName] = useState(true);
  const [showPlaycount, setShowPlaycount] = useState(true);

  const selectedPeriod = periodOptions.find((option) => option.value === period)?.label ?? '1 mes';
  const collageTiles = Array.from({ length: collageSize * collageSize }, (_, index) => {
    const row = Math.floor(index / collageSize);
    const column = index % collageSize;

    return {
      id: `${row}-${column}`,
      album: mockAlbums[index % mockAlbums.length],
    };
  });
  const canRenderTileMeta = collageSize <= 10 && (showAlbumName || showPlaycount);

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="mx-auto grid max-w-6xl justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <label className="flex h-full min-h-24 w-full max-w-72 flex-col justify-between space-y-3">
            <span className="block text-sm font-medium text-slate-200">Nome de usuario</span>
            <input
              id={usernameId}
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Digite um usuario"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/60"
            />
          </label>

          <label className="flex h-full min-h-24 w-full max-w-72 flex-col justify-between space-y-3">
            <span className="block text-sm font-medium text-slate-200">Dias</span>
            <select
              id={periodId}
              value={period}
              onChange={(event) =>
                setPeriod(event.target.value as (typeof periodOptions)[number]['value'])
              }
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60"
            >
              {periodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex h-full min-h-24 w-full max-w-72 flex-col justify-between space-y-3">
            <span className="block text-sm font-medium text-slate-200">Tamanho</span>
            <select
              id={collageSizeId}
              value={collageSize}
              onChange={(event) =>
                setCollageSize(Number(event.target.value) as (typeof collageSizeOptions)[number])
              }
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60"
            >
              {collageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option} x {option}
                </option>
              ))}
            </select>
          </label>

          <label className="flex h-full min-h-24 w-full max-w-72 flex-col justify-between space-y-3">
            <span className="block text-sm font-medium text-slate-200">Posição</span>
            <select
              id={textPositionId}
              value={textPosition}
              onChange={(event) =>
                setTextPosition(event.target.value as (typeof textPositionOptions)[number]['value'])
              }
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60"
            >
              {textPositionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="flex min-h-24 w-full max-w-72 justify-center sm:justify-start">
            <BooleanToggle
              label="Mostrar Nome do Álbum"
              value={showAlbumName}
              onChange={setShowAlbumName}
            />
          </div>

          <div className="flex min-h-24 w-full max-w-72 justify-center sm:justify-start">
            <BooleanToggle
              label="Mostrar Playcount"
              value={showPlaycount}
              onChange={setShowPlaycount}
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
        <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300/75">
              Preview da Collage
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              {username.trim() || 'Seu usuario'}
            </h2>
          </div>
          <div className="text-sm text-slate-300">
            <p>Período Selecionado: {selectedPeriod}</p>
            <p>
              Densidade: {collageSize} x {collageSize}
            </p>
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden border border-white/10 bg-slate-900">
          <div
            className="grid h-full w-full gap-px bg-slate-950/80"
            style={{ gridTemplateColumns: `repeat(${collageSize}, minmax(0, 1fr))` }}
          >
            {collageTiles.map(({ id, album }) => (
              <article
                key={id}
                className={`relative aspect-square overflow-hidden bg-linear-to-br ${tileBackground}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.12)_38%,rgba(2,6,23,0.5))]" />
                {canRenderTileMeta && (
                  <div
                    className={`absolute z-10 max-w-[85%] rounded-md bg-slate-950/72 px-1.5 py-1 backdrop-blur-[1px] ${tileMetaPositionClasses[textPosition]}`}
                  >
                    {showAlbumName && (
                      <p className="line-clamp-2 text-[8px] font-semibold leading-tight text-white sm:text-[14px] ">
                        {album.title}
                      </p>
                    )}
                    {showPlaycount && (
                      <p className="mt-0.5 text-[8px] leading-none text-slate-300 sm:text-[10px]">
                        {album.playcount} plays
                      </p>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
