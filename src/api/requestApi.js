const urlContinents = 'https://corona.lmao.ninja/v3/covid-19/continents';
const urlCountries = 'https://corona.lmao.ninja/v3/covid-19/countries';

export const getContinentsApi = async () => {
  const data = await fetch(`${urlContinents}`)
    .then((response) => response.json());
  return data;
};

export const getContinentByNameApi = async (continentName) => {
  const data = await fetch(`https://corona.lmao.ninja/v3/covid-19/continents/${continentName}`)
    .then((response) => response.json());
  return data;
};

export const getCountriesByNameApi = async (countriesNames) => {
  const data = await fetch(`${urlCountries}/${countriesNames}`)
    .then((response) => response.json());
  return data;
};
