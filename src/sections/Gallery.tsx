import Reveal from '@/components/Reveal'

const looks = [
  { src: 'images/look-01.webp', alt: '草地上的双人鹦鹉肖像', title: '草地鹦鹉 · 双人肖像', meta: 'AI 换装 / 珍珠配饰' },
  { src: 'images/look-02.webp', alt: '身着卫衣网格裙的女性肖像', title: '字母卫衣 × 网格裙', meta: 'AI 换装 / 配饰叠加' },
  { src: 'images/look-03.webp', alt: '草地白毯上的双人 look', title: '白毯双人 · 男生换装', meta: '整套换装 / 道具场景' },
  { src: 'images/hero-main.webp', alt: '仰拍蓝天双人时尚大片', title: '仰拍双人 · 蓝天构图', meta: '低机位 / 85mm 压缩' },
  { src: 'images/look-04.webp', alt: '灰色卫衣网格裙肖像', title: '灰卫衣 × 网格裙', meta: 'AI 换装 / 草地场景' },
  { src: 'images/look-05.webp', alt: '白色内搭肖像', title: '白色内搭 · 特写', meta: '印花对齐 / 浅景深' },
  { src: 'images/look-06.webp', alt: '裙装调整版草地人像', title: '裙装调整 · 草地人像', meta: '版型迭代 / 影调统一' },
  { src: 'images/look-07.webp', alt: '白色运动鞋肖像', title: '白鞋换装 · 肖像', meta: '鞋履换装' },
  { src: 'images/look-08.webp', alt: 'AI 生成时尚成片', title: '草原系列 · Look 08', meta: 'Midjourney + Lovart' },
  { src: 'images/look-09.webp', alt: 'AI 生成时尚成片', title: '草原系列 · Look 09', meta: 'Midjourney + Lovart' },
  { src: 'images/look-10.webp', alt: 'AI 生成时尚成片', title: '草原系列 · Look 10', meta: 'Midjourney + Lovart' },
  { src: 'images/look-11.webp', alt: 'AI 生成时尚成片', title: '草原系列 · Look 11', meta: 'Midjourney + Lovart' },
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
