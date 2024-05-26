import React from 'react';
import BannerCard from '../home/BannerCard.jsx';

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-6xl font-bold leading-snug text-black'>
            Buy and Sell Your Books{' '}
            <span className='text-blue-700'>for the best prices</span>
          </h2>
          <p className='md:w-4/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            veniam reprehenderit velit incidunt eveniet nihil vel corrupti
            suscipit porro repudiandae. Dolorum repellendus velit optio ullam,
            voluptas dolores laboriosam nesciunt sequi!
          </p>
          <div style={{ display: 'inline-block' }}>
  <input
    type="text"
   
    placeholder="Search here"
    style={{
      padding: '7px',
      marginRight: '5px',
      border: '1px solid rgb(204, 204, 204)',
      borderRadius: '20px',
      border: 'none',
      outline:"none",
      borderBottom: '2px solid'
    }}
  />
  <button
    className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200"
    style={{
      cursor: 'pointer',
      borderRadius: '20px',
      border: 'none',
    }}
  >
    Search
  </button>
</div>

        </div>

        {/* Right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
