import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../redux/countries/countries';
import { getContinent } from '../redux/continents/continents';
import Country from './Country';

function CountriesList() {
  const { continentName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinent(continentName));
  }, [continentName]);

  const { countries } = useSelector((state) => state.continent);
  const countriesString = countries?.toString();

  useEffect(() => {
    if (countriesString) {
      dispatch(getCountries(countriesString));
    }
  }, [countriesString]);

  const countriesData = useSelector((state) => state.countries);

  return (
    <div>
      <ul>
        {countriesData.map((country) => (
          <Country
            key={country.countryName}
            flag={country.countryInfo.flag}
            countryName={country.countryName}
            cases={country.cases}
            continent={country.continent}
          />
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
