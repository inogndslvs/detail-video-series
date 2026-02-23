export default function ProgramHero({
  title = "Hysteria Berkelana",
  subtitle = "Perayaan seni, budaya, dan kehidupan kampung melalui kerja kolektif warga dan seniman.",
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#d4006f,#8a2a78)]" />
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#ff3aa0]/55 blur-[90px]" />
      <div className="absolute left-[35%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#b34cff]/35 blur-[90px]" />
      <div className="absolute -right-44 bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#ff3aa0]/45 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
