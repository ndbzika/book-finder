type BookRootProps = {
  children: React.ReactNode;
}

export const BookRoot = ({ children }: BookRootProps) => {
  return (
    <div className='w-[10rem] flex flex-col justify-center items-start'>
      {children}
    </div>
  )
}