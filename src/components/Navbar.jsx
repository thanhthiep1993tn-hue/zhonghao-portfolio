import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const navItems = [
  ['首页', 'home'],
  ['证据', 'evidence'],
  ['研究', 'academic'],
  ['项目', 'projects'],
  ['经历', 'experience'],
  ['关于我', 'profile'],
  ['联系', 'contact'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0.04, 0.2] },
    )
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    navItems.forEach(([, id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="nav-brand" onClick={() => scrollTo('home')} aria-label="返回首页">
        <span>ZH</span>
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
