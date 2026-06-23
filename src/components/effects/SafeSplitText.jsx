import { motion, useReducedMotion } from 'motion/react'

function SafeSplitText({
  text,
  tag = 'span',
  splitType = 'words',
  delay = 55,
  duration = 0.7,
  className = '',
}) {
  const reduced = useReducedMotion()
  const Component = motion[tag] || motion.span
  const parts = splitType === 'chars'
    ? [...text].reduce((result, character) => {
        if ('，。！？、；：,.!?'.includes(character) && result.length) {
          const tail = result.pop()
          if (result.length) result[result.length - 1] += `${tail}${character}`
          else result.push(`${tail}${character}`)
        } else {
          result.push(character)
        }
        return result
      }, [])
    : text.split(' ')

  return (
    <Component
      className={`safe-split-text ${className}`}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
      aria-label={text}
    >
      {parts.map((part, index) => (
        <motion.span
          className="safe-split-part"
          aria-hidden="true"
          key={`${part}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 30, rotateX: -25, filter: 'blur(7px)' },
            visible: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration, delay: index * delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          {part}{splitType === 'words' && index < parts.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Component>
  )
}

export default SafeSplitText
