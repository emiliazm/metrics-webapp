import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducerContinents, reducerContinent } from './continents/continents';
import countriesReducer from './countries/countries';

const store = configureStore({
  reducer: {
    continents: reducerContinents,
    continent: reducerContinent,
    countries: countriesReducer,
  },
  middleware: [thunk, logger],
});

export default store;
