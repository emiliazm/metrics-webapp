import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from '../App';
import { reducerContinent, reducerContinents } from '../redux/continents/continents';
import countriesReducer from '../redux/countries/countries';
import HomePage from '../pages/HomePage';

const setupStore = () => {
  const preloadedState = {
    continents: [
      {
        continentName: 'South America',
        cases: 59063198,
        countries: [
          'Argentina',
          'Bolivia',
          'Brazil',
          'Chile',
          'Colombia',
          'Ecuador',
          'Falkland Islands (Malvinas)',
          'French Guiana',
          'Guyana',
          'Paraguay',
          'Peru',
          'Suriname',
          'Uruguay',
          'Venezuela',
        ],
      },
    ],

    continent: [
      {
        active: 1725448,
        activePerOneMillion: 3941.64,
        cases: 59063198,
        casesPerOneMillion: 134924.95,
        continent: 'South America',
        continentInfo: { lat: -15.6551563, long: -100.7484231 },
        countries: [
          'Argentina',
          'Bolivia',
          'Brazil', 'Chile',
          'Colombia',
          'Ecuador',
          'Falkland Islands (Malvinas)',
          'French Guiana',
          'Guyana',
          'Paraguay',
          'Peru',
          'Suriname',
          'Uruguay',
          'Venezuela'],
        critical: 10371,
        criticalPerOneMillion: 23.69,
        deaths: 1302803,
        deathsPerOneMillion: 2976.14,
        population: 437748515,
        recovered: 56034947,
        recoveredPerOneMillion: 128007.17,
        tests: 224883556,
        testsPerOneMillion: 513727.74,
        todayCases: 76598,
        todayDeaths: 104,
        todayRecovered: 11119,
        updated: 1655935422476,
      },
    ],

    countries: [
      {
        countryName: 'Argentina',
        cases: 9341492,
        countryInfo: {
          flag: 'https://disease.sh/assets/img/flags/ar.png',
          _id: 32,
          iso2: 'AR',
          iso3: 'ARG',
          lat: -34,
          long: -64,
        },
        continent: 'South America',
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      continents: reducerContinents,
      continent: reducerContinent,
      countries: countriesReducer,
    },
  });
};

describe('Test the App components', () => {
  it('renders the App correctly', () => {
    const store = setupStore();
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('renders the Home page correctly', () => {
    const store = setupStore();
    const page = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('shows the corresponding page when clicking the continents links', () => {
    const store = setupStore();
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('South America'));
    expect(container.getElementsByClassName('container-countries')).toHaveLength(1);
  });

  it('shows the Home page when clicking the back link', () => {
    const store = setupStore();
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Back'));
    expect(container.getElementsByClassName('container')).toHaveLength(1);
  });
});
