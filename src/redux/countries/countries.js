import { getCountriesByNameApi } from '../../api/requestApi';

const GET_COUNTRIES = 'metricswebapp/countries/GET_COUNTRIES';

const initialState = [];

export const getCountries = (countriesNames) => async (dispatch) => {
  const data = await getCountriesByNameApi(countriesNames);
  const countries = data.map((country) => {
    const {
      country: countryName,
      countryInfo,
      cases,
      continent,
    } = country;

    return {
      countryName,
      countryInfo,
      cases,
      continent,
    };
  });
  dispatch({ type: GET_COUNTRIES, countries });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.countries;

    default:
      return state;
  }
};

export default reducer;
