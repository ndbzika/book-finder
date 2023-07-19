import React from 'react';

type BookTitleProps = {
  children: React.ReactNode;
}

export const BookTitle = ({children}: BookTitleProps) => {
  return (
    <h1 className='font-1xl italic font-semibold py-1'>
      {children}
    </h1>
  )
}