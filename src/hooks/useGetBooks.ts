import { useRef, useState } from 'react';
import { getBooks } from '../utils/getBooks';

export const useGetBooks = () => {
  const [books, setBooks] = useState<[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleSearchBooks = (query: string | undefined) => {
    if (!query) return;

    setIsLoading(true);
    setBooks([]);

    const queryBooks = getBooks(query);
    queryBooks.then((data) => {
      setBooks(data);
      setIsLoading(false);
    });
  }

  return {
    books,
    handleSearchBooks,
    inputRef,
    isLoading,
  }

}