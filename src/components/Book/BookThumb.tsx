type BookThumbProps = {
  image: string;
  alt: string;
}

export const BookThumb = ({ image = '/public/noBookImage.gif', alt = '' }: BookThumbProps) => {
  return (
    <img src={image} alt={alt} className='w-[32rem] h-[16rem] aspect-square' />
  )
}