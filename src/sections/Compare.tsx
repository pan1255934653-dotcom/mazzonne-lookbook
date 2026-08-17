import Reveal from '@/components/Reveal'
import { ArrowRight } from 'lucide-react'

const pairs = [
  {
    before: { src: 'images/cloth-offshoulder.webp', alt: '平拍的白色一字肩长袖上衣样衣', label: 'INPUT · 手机平拍样衣' },
    after: { src: 'images/look-11.webp', alt: 'AI 生成的草地肖像，女模身着同款一字肩上衣', label: 'OUTPUT · AI 上身成片' },
    name: '白色一字肩上衣',
    desc: '地板平拍 → 草地鹦鹉肖像，一字肩剪裁与褶皱完整还原',
  },
  {
    before: { src: 'images/cloth-dress.webp', alt: '平拍的波点吊带裙样衣', label: 'INPUT · 手机平拍样衣' },
    after: { src: 'images/look-02.webp', alt: 'AI 生成的全身成片，女模身着同款波点裙', label: 'OUTPUT · AI 上身成片' },
    name: '波点吊带裙',
    desc: '平铺状态 → 卫衣叠穿全身 look，裙摆廓形与波点密度不走样',
  },
  {
    before: { src: 'images/cloth-cargo.webp', alt: '平拍的军绿色工装裤样衣', label: 'INPUT · 手机平拍样衣' },
    after: { src: 'images/look-08.webp', alt: 'AI 生成的俯拍草地 look，女模身着同款工装裤', label: 'OUTPUT · AI 上身成片' },
    name: '军绿工装裤',
    desc: '俯拍草地构图上身，口袋位置与裤型垂感逐一对齐',
  },
]

export default function Compare() {
  return (
    <section id="compare" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-black/50">03 — Before / After</p>
        <h2 className="font-serif-sc mt-4 text-3xl font-black leading-snug md:text-5xl">
          左边是地板上的样衣，
          <br />
          右边是伊犁草原上的人。
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 md:text-base">
          每一组都是同一件衣服：左边是流程起点（手机平拍），右边是流程终点（AI 上身成片）。
          中间隔着的不是运气——是一条毫米级对齐的技术管线，和设计团队对版型、光影与构图的判断。
        </p>
      </Reveal>

      <div className="mt-14 space-y-16">
        {pairs.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
              <figure className="overflow-hidden border border-black/15 bg-white">
                <img src={p.before.src} alt={p.before.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="border-t border-black/10 px-4 py-2.5 font-mono-num text-[10px] tracking-[0.25em] text-black/55">
                  {p.before.label}
                </figcaption>
              </figure>

              <div className="flex flex-col items-center gap-2 md:px-2">
                <ArrowRight className="hidden h-8 w-8 text-black/70 md:block" strokeWidth={1.5} />
                <span className="font-mono-num text-[10px] uppercase tracking-[0.25em] text-black/45 md:[writing-mode:horizontal-tb]">
                  AI 换装
                </span>
                <ArrowRight className="h-6 w-6 rotate-90 text-black/70 md:hidden" strokeWidth={1.5} />
              </div>

              <figure className="overflow-hidden border border-black/15 bg-[#ded9cd]">
                <img src={p.after.src} alt={p.after.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="border-t border-white/10 bg-black px-4 py-2.5 font-mono-num text-[10px] tracking-[0.25em] text-[#f2efe8]/70">
                  {p.after.label}
                </figcaption>
              </figure>
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-serif-sc text-lg font-bold">{p.name}</span>
              <span className="text-[13px] text-black/55">{p.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
