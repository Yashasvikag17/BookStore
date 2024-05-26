import React from 'react';
import Banner from '../component/Banner';
import FavBook from './favBook';
import BestSellerBook from './BestSellerBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner />
      <BestSellerBook />
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      
    </div>
  );
}
