import Reveal from '@/components/Reveal'

const looks = [
  { src: 'images/look-01.webp', alt: '草地上的鹦鹉肖像', title: '草地鹦鹉 · 肖像', meta: 'AI 换装 / 珍珠配饰' },
  { src: 'images/look-02.webp', alt: '身着卫衣波点裙的女性全身像', title: '字母卫衣 × 波点裙', meta: 'AI 换装 / 全身 Look' },
  { src: 'images/look-04.webp', alt: '灰色卫衣波点裙肖像', title: '灰卫衣 × 波点裙', meta: 'AI 换装 / 草地场景' },
  { src: 'images/look-08.webp', alt: '俯拍草地上的工装裤 look', title: '俯拍草地 · 工装裤', meta: '俯拍构图 / 白鞋搭配' },
  { src: 'images/look-10.webp', alt: '草地躺姿一字肩 look', title: '草地躺姿 · 一字肩', meta: '一字肩上衣 / 军绿工装' },
  { src: 'images/look-11.webp', alt: '坐姿鹦鹉肖像', title: '坐姿鹦鹉 · 肖像', meta: '一字肩上衣 / 珍珠配饰' },
  { src: 'images/look-12.webp', alt: '木椅上的卫衣波点裙坐姿', title: '木椅坐姿 · 卫衣波点裙', meta: '系列影调统一' },
  { src: 'images/look-13.webp', alt: '草地蹲姿白上衣 look', title: '草地蹲姿 · 白上衣', meta: '自然光 / 浅景深' },
  { src: 'images/look-14.webp', alt: '草地珍珠项链特写', title: '草地特写 · 珍珠项链', meta: '配饰特写 / 肤质还原' },
  { src: 'images/look-15.webp', alt: '岩石旁的一字肩特写', title: '岩石特写 · 一字肩', meta: 'Midjourney + Lovart' },
  { src: 'images/look-16.webp', alt: '悬崖边躺卧的工装裤 look', title: '悬崖躺卧 · 工装裤', meta: 'Midjourney + Lovart' },
  { src: 'images/look-17.webp', alt: '旷野中的卫衣长裙全身像', title: '旷野全身 · 卫衣长裙', meta: '全身构图 / 远景叙事' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-black/50">05 — Final Looks</p>
            <h2 className="font-serif-sc mt-4 text-3xl font-black leading-snug md:text-5xl">成片画廊。</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-black/60">
            以下全部为 AI 生成并经画布精修的最终成片——零实拍。
            统一的新疆草原影调来自第 02 步锁定的 moodboard。
          </p>
        </div>
      </Reveal>

      <div className="mt-14 columns-2 gap-3 md:gap-5 lg:columns-3 [&>figure]:mb-3 md:[&>figure]:mb-5">
        {looks.map((l, i) => (
          <Reveal key={l.src + i} as="figure" delay={(i % 3) * 80} className="break-inside-avoid">
            <div className="group relative overflow-hidden border border-black/10 bg-[#ded9cd]">
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100 max-md:px-3 max-md:pb-2 max-md:pt-6">
                <div className="font-serif-sc text-sm font-bold text-[#f2efe8] max-md:text-[12px]">{l.title}</div>
                <div className="font-mono-num mt-0.5 text-[10px] tracking-[0.2em] text-[#f2efe8]/60 max-md:text-[9px]">{l.meta}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
