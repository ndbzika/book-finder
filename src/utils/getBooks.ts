export const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const getBooks = async (query: string | undefined) => {
  const response = await fetch(`${API_URL}${query}`);
  const data = await response.json();
  return data.items;
}
