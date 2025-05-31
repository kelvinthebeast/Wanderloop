
import './galleryItem.css'
import { Link } from 'react-router'
import { Image } from '@imagekit/react';
export default function GalleryItem({item}) {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
      {/* <img src={item.media} alt="" /> */}
       <Image
        urlEndpoint={import.meta.env.VITE_URL_IMAGE_ENDPOINT}
        src={item.media}
        // width={item.width}
        // height={item.height}
        alt="Picture of the author"
    />
      <Link to={`/pin/${item.id}`} className='overlay' ></Link>
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />

        </button>
      </div>

    </div>
  )
}
