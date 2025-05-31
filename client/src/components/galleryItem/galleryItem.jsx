
import './galleryItem.css'
export default function GalleryItem({item}) {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
      <img src={item.media} alt="" />
    </div>
  )
}
