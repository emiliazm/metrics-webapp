import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Continent = (props) => {
  const {
    continentName,
    cases,
  } = props;

  return (
    <li>
      <Link to="/details">
        <h2>{continentName}</h2>
        <p>{cases}</p>
      </Link>
    </li>
  );
};

Continent.propTypes = {
  continentName: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
};

export default Continent;
