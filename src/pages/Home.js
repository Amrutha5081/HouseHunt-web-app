import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import When from '../components/When';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
