import Reveal from '@/components/Reveal'

// w/h = intrinsic size, used to reserve layout space before the image loads
const looks = [
  { src: 'images/g-01.webp', w: 571, h: 764, alt: '旷野中持杖的男模全身像', title: '旷野持杖 · 全身', meta: '男线 Look / 全身构图' },
  { src: 'images/g-02.webp', w: 928, h: 1232, alt: '草地上坐姿的一字肩鹦鹉肖像', title: '草地坐姿 · 鹦鹉', meta: '一字肩上衣 / 珍珠配饰' },
  { src: 'images/g-03.webp', w: 1400, h: 781, alt: '16:9 横幅扩展肖像', title: '16:9 横幅 · 画幅扩展', meta: 'Outpainting / 视频物料' },
  { src: 'images/g-04.webp', w: 1045, h: 1400, alt: '草地蹲姿白上衣特写', title: '草地蹲姿 · 特写', meta: '自然光 / 浅景深' },
  { src: 'images/g-05.webp', w: 1045, h: 1400, alt: '手抚发丝的女模肖像', title: '风与发 · 肖像', meta: '肤质与发丝级还原' },
  { src: 'images/g-06.webp', w: 1045, h: 1400, alt: '俯拍草地上的工装裤 look', title: '俯拍草地 · 工装裤', meta: '俯拍构图 / 白鞋搭配' },
  { src: 'images/g-07.webp', w: 1045, h: 1400, alt: '草地躺姿一字肩 look', title: '草地躺姿 · 一字肩', meta: '一字肩上衣 / 军绿工装' },
  { src: 'images/g-08.webp', w: 1045, h: 1400, alt: '岩石旁的一字肩特写', title: '岩石肖像 · 一字肩', meta: '硬景柔光 / 特写' },
  { src: 'images/g-09.webp', w: 1045, h: 1400, alt: '悬崖边躺卧的工装裤 look', title: '悬崖躺卧 · 工装裤', meta: '远景叙事 / 险峻构图' },
  { src: 'images/g-10.webp', w: 1045, h: 1400, alt: '树前的女模肖像', title: '树干肖像 · 一字肩', meta: '硬景柔光 / 特写' },
  { src: 'images/g-11.webp', w: 1045, h: 1400, alt: '溪谷边俯身的白上衣 look', title: '溪谷俯身 · 白上衣', meta: '水面反光 / 动态捕捉' },
  { src: 'images/g-12.webp', w: 928, h: 1232, alt: '云杉前的裙装背影', title: '云杉背影 · 裙装', meta: '背影构图 / 景深层次' },
  { src: 'images/g-13.webp', w: 928, h: 1232, alt: '倚树闭眼的肖像', title: '倚树 · 闭眼肖像', meta: '情绪人像 / 柔光' },
  { src: 'images/g-14.webp', w: 928, h: 1232, alt: '木椅上的绿色调肖像', title: '木椅肖像 · 绿调', meta: '道具叙事 / 影调统一' },
  { src: 'images/g-15.webp', w: 928, h: 1232, alt: '草地上的双人 look', title: '草地双人 · 系列', meta: '双人站位 / 前后关系' },
  { src: 'images/g-16.webp', w: 928, h: 1232, alt: '站姿一字肩鹦鹉肖像', title: '站姿 · 鹦鹉肖像', meta: '一字肩上衣 / 动物元素' },
  { src: 'images/g-17.webp', w: 928, h: 1232, alt: '持杖的男模全身像', title: '持杖 · 全身', meta: '男线 Look / 道具叙事' },
  { src: 'images/g-18.webp', w: 928, h: 1232, alt: '旷野中持杖的背影', title: '背影 · 旷野', meta: '远景叙事 / 留白构图' },
  { src: 'images/g-19.webp', w: 928, h: 1232, alt: '草地上穿黑外套的男模', title: '黑外套 · 草地', meta: '男线 Look / 层次穿搭' },
  { src: 'images/g-20.webp', w: 928, h: 1232, alt: '溪流中穿白裤的男模', title: '溪流 · 白裤', meta: '涉水场景 / 动态' },
  { src: 'images/g-21.webp', w: 928, h: 1232, alt: '溪流中穿黑外套的男模', title: '溪流 · 黑外套', meta: '硬朗影调 / 水花细节' },
  { src: 'images/g-22.webp', w: 928, h: 1232, alt: '躺姿白毛衣 look', title: '白毛衣 · 躺姿', meta: '针织质感 / 柔光' },
  { src: 'images/g-23.webp', w: 928, h: 1232, alt: '溪石上的双人 look', title: '溪石双人', meta: '双人构图 / 场景互动' },
  { src: 'images/g-24.webp', w: 928, h: 1232, alt: '穿绿外套的双人肖像', title: '双人肖像 · 绿外套', meta: '前后站位 / 情绪' },
  { src: 'images/g-25.webp', w: 928, h: 1232, alt: '穿灰毛衣的双人肖像', title: '双人 · 灰毛衣', meta: '亲密构图 / 针织' },
  { src: 'images/g-26.webp', w: 500, h: 750, alt: '手触青苔的细节特写', title: '青苔特写 · 手部', meta: '细节微距 / 质感' },
  { src: 'images/g-27.webp', w: 928, h: 1232, alt: '草地坐姿一字肩 look', title: '草地坐姿 · 一字肩', meta: '自然光 / 草地色块' },
  { src: 'images/g-28.webp', w: 1045, h: 1400, alt: '仰拍双人时尚大片', title: '仰拍双人 · 大片', meta: '仰拍机位 / 天空留白' },
  { src: 'images/g-29.webp', w: 1045, h: 1400, alt: '溪流中穿无领外套的男模', title: '无领外套 · 溪流', meta: '外套修正版 / 男线' },
  { src: 'images/g-30.webp', w: 1045, h: 1400, alt: '一字肩双人肖像', title: '手部修正 · 双人', meta: '定点重绘 / 双人' },
  { src: 'images/g-31.webp', w: 1045, h: 1400, alt: '溪流中穿黑衣白鞋的男模', title: '白色运动鞋 · 溪流', meta: '鞋款替换 / 男线' },
  { src: 'images/g-32.webp', w: 1045, h: 1400, alt: '云杉前穿灰卫衣网格裙的女模', title: '灰卫衣网格裙 · 云杉', meta: '叠穿 Look / 背影' },
  { src: 'images/g-33.webp', w: 1045, h: 1400, alt: '旷野中持杖的肖像', title: '旷野持杖 · 肖像', meta: '配饰细节 / 全身' },
  { src: 'images/g-34.webp', w: 1045, h: 1400, alt: '木椅上穿网格裙卫衣的女模', title: '网格裙卫衣 · 木椅', meta: '叠穿 Look / 绿调' },
  { src: 'images/g-35.webp', w: 939, h: 1400, alt: '草地上躺卧的白上衣女模', title: '替换模特 · 草地躺卧', meta: '模特矩阵 / 同服装' },
  { src: 'images/g-36.webp', w: 1045, h: 1400, alt: '岩壁前穿黑外套的男模', title: '白色内搭 · 岩壁', meta: '内搭特写 / 硬朗' },
  { src: 'images/g-37.webp', w: 1045, h: 1400, alt: '灰卫衣波点裙特写', title: '裙装调整 · 特写', meta: '版型精修 / 波点' },
  { src: 'images/g-38.webp', w: 1045, h: 1400, alt: '溪石上的双人换装 look', title: '溪石双人 · 男生换装', meta: 'AI 换装 / 双人' },
  { src: 'images/g-39.webp', w: 1045, h: 1400, alt: '草地上的鹦鹉人像换装版', title: '草地鹦鹉 · 换装', meta: 'AI 换装 / 动物元素' },
  { src: 'images/g-40.webp', w: 1045, h: 1400, alt: '站姿一字肩鹦鹉珍珠肖像', title: '鹦鹉肖像 · 珍珠配饰', meta: '配饰换装 / 特写' },
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
            本项目 40 张成片全收录：女装、男装、双人构图与细节特写，全部 AI 生成 + 画布精修，零实拍。
            统一的影调与质感，来自同一套美术系统。
          </p>
        </div>
      </Reveal>

      <div className="mt-14 columns-2 gap-3 md:columns-3 md:gap-5 xl:columns-4 [&>figure]:mb-3 md:[&>figure]:mb-5">
        {looks.map((l, i) => (
          <Reveal key={l.src + i} as="figure" delay={(i % 3) * 80} className="break-inside-avoid">
            <div className="group relative overflow-hidden border border-black/10 bg-[#ded9cd]">
              <img
                src={l.src}
                srcSet={`${l.src.replace('.webp', '-m.webp')} 780w, ${l.src} ${l.w}w`}
                sizes="(max-width: 768px) 46vw, (max-width: 1280px) 30vw, 22vw"
                width={l.w}
                height={l.h}
                alt={l.alt}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
