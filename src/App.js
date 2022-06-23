import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:continentName" element={<CountriesList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
