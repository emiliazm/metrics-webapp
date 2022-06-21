import { useSelector } from 'react-redux';
import Continent from './Continent';

function ContinentsList() {
  const continents = useSelector((state) => state.continents);
  return (
    <div>
      <ul>
        {continents.map((continent) => (
          <Continent
            key={continent.continentName}
            continentName={continent.continentName}
            cases={continent.cases}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContinentsList;
