import { motion, useReducedMotion } from 'motion/react'

function FloatingTags({ tags }) {
  const reduced = useReducedMotion()
  return (
    <div className="floating-tags" aria-hidden="true">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          className={`floating-tag tag-${index + 1}`}
          animate={reduced ? undefined : { y: [0, -7, 0], rotate: [0, index % 2 ? 1.5 : -1.5, 0] }}
          transition={{ duration: 3.4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  )
}

export default FloatingTags
