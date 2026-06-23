import { useState } from 'react'
import { mediaLibrary } from '../../data/portfolio'

function FieldworkStrip() {
  const [failed, setFailed] = useState({})
  const photos = mediaLibrary.fieldwork.filter((item) => item.usedIn.startsWith('academic-fieldwork'))
  return (
    <div className="fieldwork-strip">
      {photos.map((photo, index) => (
        <figure key={photo.src}>
          {!failed[photo.src] ? (
            <img src={photo.src} alt={photo.alt} onError={() => setFailed((value) => ({ ...value, [photo.src]: true }))} />
          ) : (
            <div className="image-fallback"><span>0{index + 1}</span><strong>田野记录</strong></div>
          )}
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default FieldworkStrip
