import { motion, useReducedMotion } from 'motion/react'

function BlurText({
  text,
  delay = 80,
  animateBy = 'words',
  direction = 'bottom',
  stepDuration = 0.45,
  className = '',
  as = 'span',
}) {
  const reduced = useReducedMotion()
  const parts = animateBy === 'letters' ? [...text] : text.split(' ')
  const Component = motion[as] || motion.span
  const offset = direction === 'top' ? -18 : 18

  return (
    <Component
      className={`blur-text ${className}`}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      aria-label={text}
    >
      {parts.map((part, index) => (
        <motion.span
          aria-hidden="true"
          key={`${part}-${index}`}
          variants={{
            hidden: reduced
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: offset, filter: 'blur(10px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {part}{animateBy === 'words' && index < parts.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Component>
  )
}

export default BlurText
