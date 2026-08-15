export default function Hero() {
  return (
    <section id="top" className="grain relative h-[100svh] min-h-[640px] overflow-hidden bg-black">
      {/* background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="images/hero-main.jpg"
          alt="MAZZONNE AI 生成双人时尚大片"
          className="animate-hero-zoom h-full w-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/70" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-10 pt-24 text-[#f2efe8] md:px-10">
        <div className="animate-fade-up flex items-center gap-4" style={{ animationDelay: '200ms' }}>
          <span className="h-px w-12 bg-[#f2efe8]/60" />
          <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-[#f2efe8]/80">
            Mazzonne · AI Lookbook Workflow · 工作流全解析
          </p>
        </div>

        <div>
          <h1 className="font-serif-sc font-black leading-[1.06] [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]">
            <span className="animate-fade-up block text-[9.5vw] md:text-[6.2vw]" style={{ animationDelay: '350ms' }}>
              从一件平拍样衣，
            </span>
            <span className="animate-fade-up block text-[9.5vw] md:text-[6.2vw]" style={{ animationDelay: '550ms' }}>
              到一场草原大片。
            </span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-sm leading-relaxed text-[#f2efe8]/85 md:text-base"
            style={{ animationDelay: '750ms' }}
          >
            没有摄影棚、没有模特、没有去新疆的机票——只有一部手机、一组 AI 工具，
            和一条可以无限复用的工作流。这是 MAZZONNE 整本 Lookbook 从 0 到 1 的完整过程。
          </p>

          {/* stats */}
          <div
            className="animate-fade-up mt-10 grid max-w-3xl grid-cols-2 gap-px bg-[#f2efe8]/20 sm:grid-cols-4"
            style={{ animationDelay: '950ms' }}
          >
            {[
              { num: '05', label: '个环节 · 全流程AI驱动' },
              { num: '15+', label: '张精选成片 · 本页展示' },
              { num: '01', label: '部成片视频 · 静帧转动图' },
              { num: '0', label: '次实拍 · 无棚无差旅' },
            ].map((s) => (
              <div key={s.label} className="bg-black/45 px-4 py-4 backdrop-blur-sm">
                <div className="font-mono-num text-2xl font-medium md:text-3xl">{s.num}</div>
                <div className="mt-1 text-[11px] leading-snug text-[#f2efe8]/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] tracking-[0.25em] text-[#f2efe8]/60">
          <span>SCROLL ↓</span>
          <span className="font-mono-num">LOOKBOOK / 2026 SS</span>
        </div>
      </div>
    </section>
  )
}
