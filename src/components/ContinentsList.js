import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Continent from './Continent';
import NavContinents from './NavContinents';
import './Continent.css';

function ContinentsList() {
  const continents = useSelector((state) => state.continents);

  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(continents);
  }, [continents]);

  const inputHandler = (e) => {
    const text = e.target.value.toLowerCase();
    setValue(
      continents.filter((cont) => cont.continentName.toLowerCase().includes(text)),
    );
  };

  return (
    <>
      <NavContinents />
      <div className="input-container">
        <input
          type="text"
          placeholder="Search by continent here"
          onChange={inputHandler}
        />
      </div>
      <ul className="continents-ul">
        {value?.map((continent) => (
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
