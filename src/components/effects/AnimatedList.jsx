import { motion, useReducedMotion } from 'motion/react'

function AnimatedList({ items, selectedId, onSelect, ariaLabel = '可选择列表' }) {
  const reduced = useReducedMotion()
  const selectByOffset = (offset) => {
    const index = items.findIndex((item) => item.id === selectedId)
    const next = (index + offset + items.length) % items.length
    onSelect(items[next].id)
  }

  return (
    <div
      className="animated-list"
      role="listbox"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowDown') { event.preventDefault(); selectByOffset(1) }
        if (event.key === 'ArrowUp') { event.preventDefault(); selectByOffset(-1) }
      }}
    >
      {items.map((item, index) => {
        const selected = item.id === selectedId
        return (
          <motion.button
            className={`animated-list-item ${selected ? 'is-selected' : ''}`}
            role="option"
            aria-selected={selected}
            onClick={() => onSelect(item.id)}
            initial={reduced ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.045 }}
            whileHover={reduced ? undefined : { x: 4 }}
            key={item.id}
          >
            <small>{item.meta}</small>
            <strong>{item.title}</strong>
            <span>{item.subtitle}</span>
          </motion.button>
        )
      })}
    </div>
  )
}

export default AnimatedList
