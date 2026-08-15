import Reveal from '@/components/Reveal'
import { ArrowRight } from 'lucide-react'

const pairs = [
  {
    before: { src: 'images/cloth-jacket.jpg', alt: '平拍的米色拉链夹克样衣', label: 'INPUT · 手机平拍样衣' },
    after: { src: 'images/hero-main.jpg', alt: 'AI 生成的仰拍双人大片，模特身着同款夹克', label: 'OUTPUT · AI 上身成片' },
    name: '米色拉链夹克',
    desc: '平铺状态 → 仰拍蓝天双人大片，拉链与版型完整还原',
  },
  {
    before: { src: 'images/cloth-pants.jpg', alt: '平拍的卡其色阔腿裤样衣', label: 'INPUT · 手机平拍样衣' },
    after: { src: 'images/look-03.jpg', alt: 'AI 生成的草地双人大片，男模身着同款阔腿裤', label: 'OUTPUT · AI 上身成片' },
    name: '卡其阔腿裤',
    desc: '地板平拍 → 草地毯上双人 look，抽绳与褶裥细节保留',
  },
  {
    before: { src: 'images/cloth-4.jpg', alt: '平拍的白色印花 T 恤样衣', label: 'INPUT · 手机平拍样衣' },
    after: { src: 'images/look-05.jpg', alt: 'AI 生成的人像成片，模特身着同款白 Tee', label: 'OUTPUT · AI 上身成片' },
    name: '印花白 Tee',
    desc: '白 Tee 作为内搭配上外衫，领口与下摆层次自然贴合',
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
          中间隔着的，就是这条工作流的全部价值。
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

              <figure className="overflow-hidden border border-black/15 bg-black">
                <img src={p.after.src} alt={p.after.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="border-t border-white/10 px-4 py-2.5 font-mono-num text-[10px] tracking-[0.25em] text-[#f2efe8]/70">
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
