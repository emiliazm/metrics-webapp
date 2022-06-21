import React from 'react';
import ContinentsList from '../components/ContinentsList';
import CountriesList from '../components/CountriesList';

const Home = () => (
  <div className="container">
    <ContinentsList />
    <CountriesList />
  </div>
);

export default Home;
