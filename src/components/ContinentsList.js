// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Continent from './Continent';
import Search from './Search';
import NavContinents from './NavContinents';
import './continents/Continent.css';

function ContinentsList() {
  const continents = useSelector((state) => state.continents);

  // const [value, setValue] = useState('');

  // const inputHandler = (e) => {
  //   setValue(
  //     continents.filter((cont) => cont.toLowerCase().includes(e.target.value)),
  //   );
  // };

  return (
    <>
      <NavContinents />
      <Search />
      <ul className="continents-ul">
        {continents.map((continent) => (
          <Continent
            key={continent.continentName}
            continentName={continent.continentName}
            cases={continent.cases}
          />
        ))}
      </ul>
    </>
  );
}

export default ContinentsList;
