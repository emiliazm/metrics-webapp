import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    countryName,
    flag,
    cases,
  } = props;

  return (
    <li>
      <img src={flag} alt="flag" />
      <h2>{countryName}</h2>
      <p>{cases}</p>
    </li>
  );
};

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
};

export default Country;
