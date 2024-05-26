import React, { useEffect, useState } from 'react';
import BookCard from '../component/BookCard.jsx';

function BestSellerBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {
        setBooks(data.slice(0,8));
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <BookCard books={books} headline="Best Seller Books" />}
    </div>
  );
}

export default BestSellerBook;
