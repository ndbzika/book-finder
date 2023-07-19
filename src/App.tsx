import { TailSpin } from 'react-loading-icons';
import { Book } from './components/Book';
import { useGetBooks } from './hooks/useGetBooks';
import { IBook } from './interfaces/Book';

function App() {
  const { books, handleSearchBooks, inputRef, isLoading } = useGetBooks();
  return (
      <>
        <h1 className='text-sky-300 text-4xl font-sans flex justify-center m-5'>Book Finder App</h1>
        <div className='m-5'>
          <input 
          type="text" 
          placeholder="Search for books" 
          className='w-4/5 bg-gray-200 p-2 rounded-sm'
          ref={inputRef} 
          />
          <button 
          className='bg-blue-200 p-2 rounded-md w-1/5'
          onClick={() => handleSearchBooks(inputRef.current?.value)}
          >
            Search
          </button>
        </div>
        <div className='w-auto p-3 m-6 bg-blue-400 min-h-[15rem] shadow-2xl'>
          <h2 className='text-3xl text-white'>Results</h2>
          <ul className='w-full flex flex-wrap justify-center items-center content-center'>
            { isLoading && <TailSpin stroke='#fff' /> }
            { books.length > 0 && books.map((book: IBook) => (
                <li
                key={book.id} 
                className='w-[15rem] p-3 m-3 flex justify-center
                bg-white rounded-md shadow-md hover:shadow-lg 
                transition duration-300 ease-in-out transform 
                hover:-translate-y-1 hover:scale-110 hover:rotate-2 
                hover:rotate-[-2deg' 
                >
                  <a target='_blank' href={book.volumeInfo.canonicalVolumeLink}>
                    <Book.Root>
                      <Book.Thumb
                      image={book.volumeInfo.imageLinks?.thumbnail}
                      alt={book.volumeInfo.title}/>
                      <Book.Title>{book.volumeInfo.title}</Book.Title>
                      <Book.Author>{book.volumeInfo.authors}</Book.Author>
                      <Book.PubDate>{book.volumeInfo.publishedDate}</Book.PubDate>
                    </Book.Root>
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </>
    )
}

export default App
