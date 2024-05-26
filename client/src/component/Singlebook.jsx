import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';

function SingleBook() {
  const { _id, bookTitle, imageURL, authorName, bookDescription, category ,bookPDFURL} = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <img src={imageURL} style={{ height: '389px', borderRadius: '10%' }} alt="Book Cover" /> <br />
          <div className='text-amber-500 flex gap-2' style={{ fontSize: "27px", margin:"0 0 0 27" }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div><br />
        </div>
        <div style={{ width: '70%', margin: '0 0 0 30px' }}>
          <h1 style={{ fontWeight: 'bolder', fontSize: '3.6rem' }}>{bookTitle}</h1>
          <h2 style={{ color: 'grey', fontSize: '28px', display: 'block' }}>{authorName}</h2><br />
          
          <h3 style={{ fontSize: "22px" }}> Category : <span >{category}</span></h3><br />
          <p style={{ fontSize: "20px" }}>{bookDescription}</p><br />
         <div style={{display:"flex", flexDirection:"row", rowGap:"2"}}>
         <p style={{ fontSize: "18px" }}>Download PDF Here </p>
         <a href={bookPDFURL}style={{margin:"7px 0 0 12px"}} ><FaDownload/></a>
         </div>
         <div style={{display:"flex"}}>
          <div style={{border:"2px solid "  ,   margin: "5px 14px 4px 0px"}}>
          <button style={{padding :"1px 32px 4px 34px", background:"blue"}}>Buy Now</button>
          </div>
          <div style={{border:"2px solid ", padding:""  ,   margin: "5px 40px 4px 0px"}}>
            <button style={{padding :"1px 10px 4px 14px"}} >Add to WishList</button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
