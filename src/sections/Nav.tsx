import { useEffect, useState } from 'react'

const links = [
  { label: '概览', href: '#overview' },
  { label: '工作流程', href: '#workflow' },
  { label: '平拍 → 大片', href: '#compare' },
  { label: '优势', href: '#advantages' },
  { label: '成片', href: '#gallery' },
  { label: '视频', href: '#video' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#f2efe8]/90 backdrop-blur-md border-b border-black/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif-sc text-lg font-black tracking-[0.18em]">MAZZONNE</span>
          <span className="hidden font-mono-num text-[10px] uppercase tracking-[0.3em] text-black/50 sm:inline">
            AI Lookbook Workflow
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-black/70 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#gallery"
          className="border border-black/80 px-4 py-1.5 text-[12px] tracking-widest transition-colors hover:bg-black hover:text-[#f2efe8]"
        >
          看成片
        </a>
      </div>
    </header>
  )
}
