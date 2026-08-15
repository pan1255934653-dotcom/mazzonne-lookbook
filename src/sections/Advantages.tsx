import Reveal from '@/components/Reveal'
import { Banknote, Timer, SlidersHorizontal, Layers, Shirt, Clapperboard } from 'lucide-react'

const items = [
  {
    icon: Banknote,
    title: '成本结构被重写',
    body: '没有模特费、场地费、器材租赁与机酒差旅。主要支出是 AI 工具订阅——多生产一张成片的边际成本趋近于零。',
    tag: 'COST',
  },
  {
    icon: Timer,
    title: '周期从周到小时',
    body: '传统外景 lookbook 以「周」排期；这条流水线从平拍到定稿以「小时」计。客户改需求，当天就能出新图。',
    tag: 'SPEED',
  },
  {
    icon: SlidersHorizontal,
    title: '每个像素都可控',
    body: '模特、机位、焦段、光线、配饰全部参数化。局部不满意就局部重绘——手部、领口定点修复，不用整图重来。',
    tag: 'CONTROL',
  },
  {
    icon: Shirt,
    title: '服装还原不走样',
    body: 'AI 换装以真实样衣为准：版型、印花位置、铆钉与抽绳细节逐一对齐。展示的就是消费者买到的那件衣服。',
    tag: 'FIDELITY',
  },
  {
    icon: Layers,
    title: '整本视觉统一',
    body: 'Moodboard 贯穿生成与精修全流程，几十张成片共享同一套影调与色彩科学，像同一位摄影师同一天拍的。',
    tag: 'CONSISTENCY',
  },
  {
    icon: Clapperboard,
    title: '一次企划，多种物料',
    body: '3:4 静帧扩成 16:9 横幅，静帧再生成动态视频。电商详情页、社媒投放、品牌视频，一次生产全部覆盖。',
    tag: 'SCALE',
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="border-y border-black/10 bg-black py-24 text-[#f2efe8] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-[#f2efe8]/50">04 — Advantages</p>
          <h2 className="font-serif-sc mt-4 text-3xl font-black leading-snug md:text-5xl">为什么是这条工作流。</h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#f2efe8]/15 bg-[#f2efe8]/15 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70} className="bg-black">
              <div className="group flex h-full flex-col px-6 py-8 transition-colors duration-500 hover:bg-[#1c1c18]">
                <div className="flex items-center justify-between">
                  <it.icon className="h-6 w-6 text-[#f2efe8]/80" strokeWidth={1.5} />
                  <span className="font-mono-num text-[10px] tracking-[0.3em] text-[#f2efe8]/35">{it.tag}</span>
                </div>
                <h3 className="font-serif-sc mt-6 text-xl font-bold">{it.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[#f2efe8]/60">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
