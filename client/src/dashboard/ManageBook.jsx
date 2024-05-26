import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
function ManageBook() {
  const [allbook, setAllBook] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((res) => res.json())
      .then((data) => setAllBook(data));
  }, []);
  const handleDelete = (id) => {
    const answer = window.confirm("Are you sure you want to delete this book?");
  
    if (answer) {
      fetch(`http://localhost:5000/book/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            // Handle error response
            throw new Error(`Failed to delete book: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          alert("Book deleted successfully!");
          // Optionally update your state or perform other actions after deletion
          let filteredBooks = allbook.filter((book) => book._id !== id);
          setAllBook(filteredBooks);
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
          // Handle error, e.g., show an error message to the user
          alert("Failed to delete book. Please try again.");

        });

    }
  };
  

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage your Book</h2>
      <div className='overflow-x-auto'>
        <Table hoverable className='lg:w-[1180px]'>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Book name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {allbook.map((book, index) => {
              return (
                <Table.Row key={book._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {index + 1}
                  </Table.Cell>
                  <Table.Cell>{book.bookTitle}</Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>&#x20B9;150</Table.Cell>
                  <Table.Cell>
                  <Link
               className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5'
              to={`/admin/dashboard/edit_books/${book._id}`}
                  >
             Edit
                </Link>
                <button onClick={() =>{handleDelete(book._id)}} className='bg-red-600 px-4 py-1 font-semibold text-white roundede-sm hover:bg-sky-600 '>Delete</button>

                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ManageBook;
