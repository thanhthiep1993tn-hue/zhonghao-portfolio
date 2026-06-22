import { useState } from 'react'

const photos = [
  ['/assets/fieldwork/fieldwork-01.jpg', '入户访谈：把抽象议题带回具体生活'],
  ['/assets/fieldwork/fieldwork-02.jpg', '田野路途：空间本身也是研究材料'],
  ['/assets/academic/hku-academic-life.jpg', '研究交流：在方法与现实问题之间往返'],
]

function FieldworkStrip() {
  const [failed, setFailed] = useState({})
  return (
    <div className="fieldwork-strip">
      {photos.map(([src, caption], index) => (
        <figure key={src}>
          {!failed[src] ? (
            <img src={src} alt={caption} onError={() => setFailed((value) => ({ ...value, [src]: true }))} />
          ) : (
            <div className="image-fallback"><span>0{index + 1}</span><strong>田野记录</strong></div>
          )}
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default FieldworkStrip
