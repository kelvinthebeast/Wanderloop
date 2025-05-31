import { Image } from '@imagekit/react';

export default function ImagePost({path, alt, className, w, h}) {
  return (
    <div>
      <Image
        urlEndpoint={import.meta.env.VITE_URL_IMAGE_ENDPOINT}
        src={path}
        alt={alt}
        className={className}
        transformation={[{ width: w, height: h }]}
        loading="eager"
    />
    </div>
  )
}
