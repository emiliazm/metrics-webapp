import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import Country from './Country';

function CountriesList() {
  const { countries } = useSelector((state) => state.continent);
  const countriesString = countries?.toString();
  console.log('countries', countries, countriesString);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countriesString) {
      dispatch(getCountries(countriesString));
    }
  }, []);

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
