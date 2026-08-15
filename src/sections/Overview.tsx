import Reveal from '@/components/Reveal'

const rows = [
  { item: '团队配置', traditional: '摄影师 / 模特 / 妆造 / 灯光 / 制片，5–10 人团队', ai: '1 名操作人员 + AI 工具链' },
  { item: '场地与差旅', traditional: '外景地勘景、机酒差旅、场地协调（如新疆草原）', ai: '网络取景参考 + AI 场景生成，零差旅' },
  { item: '制作周期', traditional: '企划 → 拍摄 → 选片 → 修图，以「周」为单位', ai: '拍摄样衣 → 生成 → 精修，以「小时」为单位' },
  { item: '修改成本', traditional: '重拍 = 重新约模特、约场地、再等档期', ai: '局部修复 / 换装 / 换模特，分钟级迭代' },
  { item: '成本结构', traditional: '人员 + 场地 + 器材 + 差旅，单次数万元级', ai: '主要为工具订阅费用，边际成本趋近于零' },
]

export default function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-black/50">01 — Overview</p>
        <h2 className="font-serif-sc mt-4 max-w-3xl text-3xl font-black leading-snug md:text-5xl">
          同一本 Lookbook，
          <br />
          两种完全不同的生产方式。
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 md:text-base">
          传统外景 Lookbook 的本质是「组织一场拍摄」；我们的做法是把拍摄拆解成数据流：
          真实样衣是输入，AI 是相机与影棚，画布是修图台。下面这张表是两种方式的正面对比。
        </p>
      </Reveal>

      <Reveal className="mt-14" delay={150}>
        <div className="overflow-hidden border border-black/15">
          {/* head */}
          <div className="grid grid-cols-[1fr] md:grid-cols-[180px_1fr_1fr]">
            <div className="hidden border-b border-black/15 bg-black px-5 py-4 md:block" />
            <div className="hidden border-b border-black/15 bg-black px-5 py-4 text-[#f2efe8] md:block">
              <span className="font-mono-num text-[10px] uppercase tracking-[0.3em] text-[#f2efe8]/60">A</span>
              <span className="ml-3 font-serif-sc text-lg font-bold">传统外景拍摄</span>
            </div>
            <div className="hidden border-b border-black/15 bg-[#55624a] px-5 py-4 text-[#f2efe8] md:block">
              <span className="font-mono-num text-[10px] uppercase tracking-[0.3em] text-[#f2efe8]/60">B</span>
              <span className="ml-3 font-serif-sc text-lg font-bold">MAZZONNE AI 工作流</span>
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={r.item} className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr]">
              <div className="border-b border-black/10 bg-black/[0.035] px-5 py-4 text-sm font-semibold md:border-r">
                <span className="font-mono-num mr-2 text-[10px] text-black/40">{String(i + 1).padStart(2, '0')}</span>
                {r.item}
              </div>
              <div className="border-b border-black/10 px-5 py-4 text-sm leading-relaxed text-black/55">
                <span className="font-mono-num mr-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] text-[#f2efe8] md:hidden">A</span>
                {r.traditional}
              </div>
              <div className="border-b border-black/10 border-l-0 px-5 py-4 text-sm font-medium leading-relaxed md:border-l">
                <span className="font-mono-num mr-2 rounded bg-[#55624a] px-1.5 py-0.5 text-[9px] text-[#f2efe8] md:hidden">B</span>
                {r.ai}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-black/45">
          * 对比为方式级定性描述：传统列是行业普遍做法，AI 列是本项目实际执行方式。
        </p>
      </Reveal>
    </section>
  )
}
