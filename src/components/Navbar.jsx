import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const navItems = [
  ['首页', 'home'],
  ['教育', 'education'],
  ['档案', 'archive'],
  ['项目', 'projects'],
  ['经历', 'experience'],
  ['关于我', 'profile'],
  ['联系', 'contact'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const spyItems = [
      ...navItems.map(([, id]) => ({ id, activeId: id })),
      { id: 'r-visualization', activeId: 'archive' },
      { id: 'methods', activeId: 'profile' },
    ]
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const marker = window.scrollY + window.innerHeight * 0.34
      const sections = spyItems
        .map((item) => ({ ...item, section: document.getElementById(item.id) }))
        .filter((item) => item.section)
        .sort((a, b) => a.section.offsetTop - b.section.offsetTop)
      let current = sections[0]?.activeId || 'home'
      sections.forEach((item) => {
        if (item.section.offsetTop <= marker) current = item.activeId
      })
      const nearPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (nearPageEnd) current = 'contact'
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="nav-brand" onClick={() => scrollTo('home')} aria-label="返回首页">
        <span>皓</span>
        <strong>{profile.name}</strong>
      </button>
      <nav aria-label="主要导航">
        {navItems.map(([label, id]) => (
          <button
            key={id}
            className={active === id ? 'is-active' : ''}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>联系我 ↗</button>
    </header>
  )
}

export default Navbar
