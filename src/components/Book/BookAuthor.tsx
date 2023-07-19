type BookAuthorProps = {
  children: React.ReactNode;
}

export const BookAuthor = ({children}: BookAuthorProps) => {
  return (
    <h2 className='font-1xl'>
      {children}
    </h2>
  )
}