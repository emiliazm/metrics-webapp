import { useSelector } from 'react-redux';
import './Search.css';

const Search = () => {
  const continents = useSelector((state) => state.continents);
  const inputHandler = (e) => {
    continents.filter((cont) => cont.continentName.toLowerCase().includes(e.target.value));
    // console.log('holae', e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by continent here"
      onChange={inputHandler}
    />
  );
};

export default Search;
