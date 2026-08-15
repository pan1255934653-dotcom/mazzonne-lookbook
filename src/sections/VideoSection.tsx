import Reveal from '@/components/Reveal'

export default function VideoSection() {
  return (
    <section id="video" className="grain relative border-t border-black/10 bg-[#161511] py-24 text-[#f2efe8] md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="font-mono-num text-[11px] uppercase tracking-[0.35em] text-[#f2efe8]/50">06 — Motion</p>
          <h2 className="font-serif-sc mt-4 text-3xl font-black leading-snug md:text-5xl">
            静帧之外，还有成片视频。
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#f2efe8]/65 md:text-base">
            基于同一批 AI 成片生成动态视频：草地起伏、光影流转、人物微动。
            不需要任何实拍素材，静态 lookbook 直接升格为品牌视频物料。
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex justify-center">
            <div className="overflow-hidden border border-[#f2efe8]/15">
              <video
                className="max-h-[75vh] w-full max-w-[420px] bg-black object-contain"
                src="video/final-video.mp4"
                poster="video/video-poster.jpg"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>
          <div className="mx-auto mt-4 flex max-w-[420px] flex-wrap items-center justify-between gap-3 text-[12px] text-[#f2efe8]/50">
            <span className="font-mono-num tracking-[0.2em]">FINAL CUT · 9:16 · 24s</span>
            <span>静态成片 → 动态视频 · 零实拍素材</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
