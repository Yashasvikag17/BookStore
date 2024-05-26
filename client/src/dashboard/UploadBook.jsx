import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

function Uploadbook() {
  const bookcategory = [
    'Fiction',
    'Non-Fiction ',
    'Mistery',
    'Programming',
    'Science Fiction',
    'Fantasy',
    'Thriller',
    'Horror',
    'Romance',
    'Bibligraphy',
    'Autobiography',
    'History',
    'Self Help',
    'Health & Wellness',
    'Cooking',
    'Art & Design',
    'Engineering',
    'Technology',
    'Memoir',
    'Travel',
    'Business',
    'Education',
    'Religion',
    'Children Book',
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookcategory[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const category = selectedBookCategory;  // Use selectedBookCategory instead of form.category.value
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch('http://localhost:5000/upload-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book Uploaded Done!');
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author name" required />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Upload Image URL" required />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              onChange={handleChangeSelectedValue}
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
            >
              {bookcategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="bookDescription" />
          </div>
          <Textarea id="bookDescription" placeholder="Write your book descr...." required rows={6} className="w-full"></Textarea>
        </div>

        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookPDFRURL" value="Book Pdf URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" placeholder="Book pdf URL" required />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
}

export default Uploadbook;
