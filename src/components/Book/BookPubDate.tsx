type BookPubDateProps = {
  children: React.ReactNode;
}

export const BookPubDate = ({ children }: BookPubDateProps) => {
  return (
    <h3 className='font-1xl'>
      {children}
    </h3>
  )
}