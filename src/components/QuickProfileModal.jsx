import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { quickProfile } from '../data/portfolio'

function QuickProfileModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="quick-profile-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="快速了解钟皓"
        >
          <button className="quick-profile-backdrop" onClick={onClose} aria-label="关闭快速了解我" />
          <motion.div
            className="quick-profile-panel"
            initial={{ y: 26, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="quick-profile-head">
              <span>快速了解我</span>
              <button onClick={onClose} aria-label="关闭">×</button>
            </div>
            <div className="quick-profile-hero">
              <strong>{quickProfile.name}</strong>
              <p>{quickProfile.target}</p>
              <small>优先 base：{quickProfile.base}</small>
            </div>
            <div className="quick-profile-grid">
              <div>
                <span>可用方向</span>
                <ul>{quickProfile.directions.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <span>三个核心项目</span>
                <ul>{quickProfile.projects.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <span>三个核心能力</span>
                <ul>{quickProfile.abilities.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <span>联系方式</span>
                <p>{quickProfile.contact.phone}</p>
                <p>{quickProfile.contact.email}</p>
              </div>
            </div>
            <div className="quick-profile-actions">
              <a href={quickProfile.resume} target="_blank" rel="noreferrer">打开简历 PDF ↗</a>
              <a href="#contact" onClick={onClose}>去联系模块 ↓</a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default QuickProfileModal
