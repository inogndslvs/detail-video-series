export default function Home() {
  const episodes = [
    {
      title: "Episode 1 - Jejak Pertama",
      duration: "24 menit",
      date: "12 Januari 2026",
    },
    {
      title: "Episode 2 - Menyusuri Sunyi",
      duration: "26 menit",
      date: "19 Januari 2026",
    },
    {
      title: "Episode 3 - Batas Senja",
      duration: "28 menit",
      date: "26 Januari 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 px-4 py-10 text-zinc-900 sm:px-6 lg:px-8">
      <main className="mx-auto w-full max-w-5xl space-y-8">
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium text-zinc-500">Video Series / Detail</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Hysteria Berkelana
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600 sm:text-base">
            Seri perjalanan bernuansa misteri yang membawa penonton menyusuri
            tempat-tempat sunyi, kisah lokal, dan fragmen kejadian yang belum
            terjawab.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900">
            <div className="flex aspect-video items-center justify-center text-sm font-medium text-zinc-300">
              Area Video / Trailer Utama
            </div>
          </div>

          <div className="mt-5 grid gap-3 text-sm text-zinc-600 sm:grid-cols-3">
            <p>
              <span className="font-semibold text-zinc-900">Genre:</span> Dokumenter
              Misteri
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Total Episode:</span> 8
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Tahun Rilis:</span> 2026
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold">Sinopsis</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
            Hysteria Berkelana mengikuti tim eksplorasi yang mendokumentasikan
            jejak-jejak cerita dari berbagai daerah. Setiap episode menampilkan
            perspektif baru antara sejarah, mitos, dan pengalaman warga setempat.
            Halaman ini disiapkan sebagai tampilan detail frontend-only dan siap
            disesuaikan dengan style final dari tim desain.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Daftar Episode</h2>
            <span className="text-sm text-zinc-500">3 dari 8 ditampilkan</span>
          </div>

          <div className="mt-5 space-y-3">
            {episodes.map((episode) => (
              <article
                key={episode.title}
                className="rounded-xl border border-zinc-200 p-4"
              >
                <h3 className="font-semibold text-zinc-900">{episode.title}</h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-600">
                  <p>Durasi: {episode.duration}</p>
                  <p>Rilis: {episode.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
