import PropTypes from 'prop-types';
import './Countries.css';

const Country = (props) => {
  const {
    countryName,
    flag,
    cases,
  } = props;

  return (
    <li className="country-li">
      <div className="flag">
        <img src={flag} alt="flag" />
        <h2>{countryName}</h2>
      </div>
      <div className="arrow">
        <p className="cases-country">{cases}</p>
        <i className="material-symbols-outlined">arrow_circle_right</i>
      </div>
    </li>
  );
};

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
};

export default Country;
