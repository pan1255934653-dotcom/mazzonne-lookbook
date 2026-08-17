import Reveal from '@/components/Reveal'

interface Step {
  no: string
  title: string
  tool: string
  toolClass: string
  lead: string
  points: { k: string; v: string }[]
  images: { src: string; alt: string; caption?: string; wide?: boolean }[]
  note?: string
}

const steps: Step[] = [
  {
    no: '01',
    title: '样衣采集 · 把衣服变成数据',
    tool: 'iPhone 平拍 + 抠图',
    toolClass: 'bg-black text-[#f2efe8]',
    lead: '整个流程唯一需要"拍"的一步：把样衣平铺，用手机在自然光下拍摄正反面与细节——为 AI 提供高保真的服装数据。数据质量决定成片上限。',
    points: [
      { k: '拍摄即素材', v: '版型、面料纹理、印花、五金细节全部来自真实样衣——这是后期 AI 换装"不穿帮"的根基' },
      { k: '单品库', v: '逐件抠图整理为干净素材，形成本季单品库，后续所有 look 都从这里调用' },
      { k: '标准化采集', v: '统一光线、角度与构图规范，保证单品库数据质量稳定，整条流水线可复用' },
    ],
    images: [
      { src: 'images/cloth-offshoulder.webp', alt: '手机平拍的白色一字肩上衣样衣', caption: '一字肩上衣 · 平拍' },
      { src: 'images/cloth-dress.webp', alt: '手机平拍的波点吊带裙样衣', caption: '波点吊带裙 · 平拍' },
      { src: 'images/cloth-cargo.webp', alt: '手机平拍的军绿工装裤样衣', caption: '军绿工装裤 · 平拍' },
      { src: 'images/cloth-sneakers.webp', alt: '手机平拍的白色运动鞋', caption: '白色运动鞋 · 平拍' },
    ],
  },
  {
    no: '02',
    title: '场景企划 · 先定影调再开工',
    tool: '网络取景参考 → Moodboard',
    toolClass: 'bg-[#55624a] text-[#f2efe8]',
    lead: '从网络收集取景参考——本项目锁定新疆伊犁 / 阿勒泰的夏季草原：开阔草地、云杉林、强日照、低饱和绿。参考图只负责定"调性"，最终画面全部由 AI 重新生成。',
    points: [
      { k: '风格板统一语言', v: '把参考图汇入 moodboard，锁定影调、光线方向、色温与构图偏好，全本 lookbook 视觉统一' },
      { k: '规避实拍版权', v: '参考图不进入成片，AI 按其风格重新生成全新场景，无盗用风险' },
      { k: '零差旅勘景', v: '等于把"去新疆勘景"压缩成一次素材收集，成本几乎为零' },
    ],
    images: [
      { src: 'images/scene-1.webp', alt: '伊犁草原取景参考：云杉林与草场', caption: '参考 · 云杉林草场' },
      { src: 'images/scene-2.webp', alt: '阿勒泰草原取景参考', caption: '参考 · 阿勒泰' },
      { src: 'images/scene-3.webp', alt: '伊犁夏日草原取景参考', caption: '参考 · 伊犁之夏' },
    ],
  },
  {
    no: '03',
    title: '底图生成 · 像摄影师一样写 Prompt',
    tool: 'Midjourney + Moodboard 引用',
    toolClass: 'bg-black text-[#f2efe8]',
    lead: '把 moodboard 喂给 Midjourney，再用"摄影参数化"的 prompt 生成虚拟模特 × 草原场景的底图。我们不是写"描述"，而是在写"拍摄指令"。',
    points: [
      { k: '镜头语言', v: 'prompt 中显式指定焦段与光圈逻辑：50–70mm 标准镜头、85mm 长焦压缩、浅景深 bokeh' },
      { k: '机位与构图', v: '仰拍 / 平视 / 过肩特写、单人或双人站位、前后景遮挡关系，全部写进 prompt' },
      { k: '批量产出再选片', v: '一次生成多组构图，像摄影师选片一样挑出最佳底图进入精修环节' },
    ],
    images: [
      { src: 'images/mj-process.webp', alt: 'Midjourney 创作后台：moodboard 与摄影参数 prompt', caption: 'Midjourney 后台 · moodboard + 参数化 prompt', wide: true },
      { src: 'images/mj-out-1.webp', alt: 'Midjourney 生成的草原人像底图', caption: '底图 · 木椅人像' },
      { src: 'images/mj-out-2.webp', alt: 'Midjourney 生成的鹦鹉肖像底图', caption: '底图 · 鹦鹉肖像' },
      { src: 'images/mj-out-3.webp', alt: 'Midjourney 生成的细节特写底图', caption: '底图 · 细节特写' },
    ],
  },
  {
    no: '04',
    title: '画布精修 · 设计把控的最后一公里',
    tool: 'Lovart 画布 · 精准换装 / 局部重绘 / 画幅重构',
    toolClass: 'bg-[#55624a] text-[#f2efe8]',
    lead: '底图只是半成品。进入 Lovart 画布后，设计团队对每张图做四轮技术处理：服装要毫米级对齐真实样衣，光影要符合场景逻辑，细节要经得起放大检视。AI 负责执行，人负责判断——这是"AI 图"变成"品牌物料"的分水岭。',
    points: [
      { k: '毫米级服装还原', v: '真实样衣精准"穿"上虚拟模特：版型、印花位置、铆钉与抽绳逐点对齐，面料垂坠与褶皱符合物理逻辑' },
      { k: '模特矩阵', v: '同一套衣服更换模特面孔与气质而服装纹丝不动——一次企划产出多模特矩阵，适配不同客群投放' },
      { k: '像素级定点重绘', v: '手部、领口等高频出错区域单独框选重绘（修正手部结构、外套无领设计），问题区域不重画整图' },
      { k: '画幅重构', v: '3:4 竖图 outpainting 成 16:9 横幅，构图重心重新设计，直接适配视频与电商横幅物料' },
    ],
    images: [
      { src: 'images/edit-model-swap.webp', alt: '替换模特但保持服装不变的精修成片', caption: '精修 · 替换模特保持服装' },
      { src: 'images/edit-hand-fix.webp', alt: '手部细节定点修复的成片', caption: '精修 · 手部修正' },
      { src: 'images/look-06.webp', alt: '裙装版型调整后的草地人像成片', caption: '精修 · 裙装版型调整' },
      { src: 'images/wide-extend.webp', alt: '3:4 扩展为 16:9 的横幅成片', caption: '精修 · 16:9 画幅扩展', wide: true },
    ],
  },
  {
    no: '05',
    title: '成片交付 · 静帧与视频一次到位',
    tool: 'Lookbook 输出 + AI 视频',
    toolClass: 'bg-black text-[#f2efe8]',
    lead: '精修定稿后输出整套 lookbook 静帧——肖像、双人、全身、特写一应俱全；再基于成片生成 AI 动态视频，一次企划同时拿到图文与视频两种物料。',
    points: [
      { k: '整套输出', v: '统一影调的系列成片，可直接用于电商详情页、社媒投放与品牌册' },
      { k: '静帧转动图', v: '以成片为基础生成动态视频，草地、风与人物微动，无需任何实拍素材' },
      { k: '可复用', v: '下一季只需替换第 01 步的单品库，整条流水线原样复跑' },
    ],
    images: [
      { src: 'images/look-10.webp', alt: '草地躺姿成片', caption: '成片 · 草地肖像' },
      { src: 'video/video-poster.webp', alt: 'AI 生成视频封面帧', caption: '成片 · 视频封面帧' },
    ],
    note: '完整成片见下方「成片画廊」与「成片视频」。',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="border-y border-black/10 bg-[#ece8de] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-black/50">02 — Workflow</p>
          <h2 className="font-serif-sc mt-4 text-3xl font-black leading-snug md:text-5xl">
            从 0 到 1，五个环节。
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 md:text-base">
            每个环节只做一件事，并把结果标准化地交给下一个环节。
            AI 负责重活，设计团队负责判断——这就是这条工作流可以无限复用、无限迭代的原因。
          </p>
        </Reveal>

        <div className="mt-16 space-y-0">
          {steps.map((s, idx) => (
            <article key={s.no} className="border-t border-black/15 py-14 md:py-20">
              <div className="grid gap-10 md:grid-cols-[110px_1fr] lg:grid-cols-[160px_1fr]">
                {/* number */}
                <Reveal>
                  <div className="font-mono-num text-5xl font-medium text-black/25 md:text-7xl">{s.no}</div>
                  <div className={`mt-4 inline-block px-3 py-1.5 text-[11px] leading-snug tracking-wider ${s.toolClass}`}>
                    {s.tool}
                  </div>
                </Reveal>

                <div>
                  <Reveal delay={80}>
                    <h3 className="font-serif-sc text-2xl font-black md:text-4xl">{s.title}</h3>
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">{s.lead}</p>
                  </Reveal>

                  {/* tech points */}
                  <Reveal delay={140}>
                    <ul className="mt-8 grid gap-px overflow-hidden border border-black/15 bg-[#ded9cd]/15 sm:grid-cols-2 lg:grid-cols-3">
                      {s.points.map((p) => (
                        <li key={p.k} className="bg-[#f2efe8] px-5 py-4">
                          <div className="text-[13px] font-bold tracking-wide">{p.k}</div>
                          <div className="mt-1.5 text-[13px] leading-relaxed text-black/60">{p.v}</div>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  {/* images */}
                  <div className="mt-8">
                    {(() => {
                      const wide = s.images.filter((i) => i.wide)
                      const normal = s.images.filter((i) => !i.wide)
                      const cols =
                        normal.length >= 4
                          ? 'grid-cols-2 lg:grid-cols-4'
                          : normal.length === 3
                            ? 'grid-cols-1 sm:grid-cols-3'
                            : 'grid-cols-1 sm:grid-cols-2'
                      return (
                        <>
                          {wide.map((im, wi) => (
                            <Reveal key={im.src} delay={200 + wi * 80}>
                              <figure className="mb-5 overflow-hidden border border-black/15 bg-[#ded9cd]">
                                <img src={im.src} alt={im.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
                                {im.caption && (
                                  <figcaption className="bg-black px-4 py-2.5 font-mono-num text-[11px] tracking-widest text-[#f2efe8]/75">
                                    {im.caption}
                                  </figcaption>
                                )}
                              </figure>
                            </Reveal>
                          ))}
                          <div className={`grid gap-5 ${cols}`}>
                            {normal.map((im, ii) => (
                              <Reveal key={im.src} delay={200 + ii * 80}>
                                <figure className="overflow-hidden border border-black/15 bg-[#ded9cd]">
                                  <img
                                    src={im.src}
                                    alt={im.alt}
                                    loading="lazy"
                                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                  />
                                  {im.caption && (
                                    <figcaption className="bg-black px-3 py-2 font-mono-num text-[10px] tracking-widest text-[#f2efe8]/75">
                                      {im.caption}
                                    </figcaption>
                                  )}
                                </figure>
                              </Reveal>
                            ))}
                          </div>
                        </>
                      )
                    })()}
                    {s.note && <p className="mt-4 text-[13px] text-black/55">{s.note}</p>}
                  </div>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="mt-14 hidden justify-center md:flex">
                  <span className="font-mono-num text-black/30">↓</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
