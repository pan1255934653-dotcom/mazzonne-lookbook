import Reveal from '@/components/Reveal'

const marquee = 'MAZZONNE · AI LOOKBOOK WORKFLOW · 手机平拍 × MOODBOARD × MIDJOURNEY × LOVART · '

export default function Footer() {
  return (
    <footer className="bg-black text-[#f2efe8]">
      {/* marquee */}
      <div className="overflow-hidden border-y border-[#f2efe8]/10 py-5">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((n) => (
            <span key={n} className="font-serif-sc px-2 text-2xl font-black tracking-wide text-[#f2efe8]/85 md:text-4xl">
              {marquee}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="font-serif-sc text-2xl font-black tracking-[0.15em]">MAZZONNE</div>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[#f2efe8]/55">
                一条设计团队主导的 AI Lookbook 生产流水线：真实样衣进，时尚大片出。
                下一季只需替换单品库，流程原样复跑。
              </p>
            </div>
            <div>
              <div className="font-mono-num text-[10px] uppercase tracking-[0.3em] text-[#f2efe8]/40">Pipeline</div>
              <ul className="mt-4 space-y-2 text-[13px] text-[#f2efe8]/70">
                <li>01 · 手机平拍 + 抠图建库</li>
                <li>02 · 网络取景 → Moodboard</li>
                <li>03 · Midjourney 参数化生成</li>
                <li>04 · Lovart 画布精修</li>
                <li>05 · 静帧 + 视频交付</li>
              </ul>
            </div>
            <div>
              <div className="font-mono-num text-[10px] uppercase tracking-[0.3em] text-[#f2efe8]/40">Index</div>
              <ul className="mt-4 space-y-2 text-[13px]">
                {[
                  ['概览', '#overview'],
                  ['工作流程', '#workflow'],
                  ['平拍 → 大片', '#compare'],
                  ['优势', '#advantages'],
                  ['成片画廊', '#gallery'],
                  ['成片视频', '#video'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="text-[#f2efe8]/70 transition-colors hover:text-[#f2efe8]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-[#f2efe8]/10 pt-6 text-[11px] tracking-wider text-[#f2efe8]/40">
          <span>© 2026 MAZZONNE LOOKBOOK PROJECT · ALL VISUALS AI-GENERATED</span>
          <span className="font-mono-num">SHOT BY NO CAMERA</span>
        </div>
      </div>
    </footer>
  )
}
