const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const Books = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li>{book.name}</li>
      ))}
    </ul>
  );
};

const BookList = () => {
  return (
    <div>
      <Books books={favouriteBooks} />
    </div>
  );
};

export default BookList;