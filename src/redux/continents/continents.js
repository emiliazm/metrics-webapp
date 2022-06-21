import { getContinentsApi, getContinentByNameApi } from '../../api/requestApi';

const GET_CONTINENT = 'metricswebapp/continents/GET_CONTINENT';
const GET_CONTINENTS = 'metricswebapp/continents/GET_CONTINENTS';

const initialState = [];

export const getContinents = () => async (dispatch) => {
  const data = await getContinentsApi();
  const continents = data.map((continent) => {
    const {
      continent: continentName,
      cases,
      countries,
    } = continent;

    return {
      continentName,
      cases,
      countries,
    };
  });
  dispatch({ type: GET_CONTINENTS, continents });
};

export const getContinent = () => async (dispatch) => {
  const data = await getContinentByNameApi();
  const continent = data.map((continent) => {
    const {
      continent: continentName,
      cases,
      countries,
    } = continent;

    return {
      continentName,
      cases,
      countries,
    };
  });
  dispatch({ type: GET_CONTINENT, continent });
};

export const reducerContinents = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.continents;

    default:
      return state;
  }
};

export const reducerContinent = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return action.continent;

    default:
      return state;
  }
};
