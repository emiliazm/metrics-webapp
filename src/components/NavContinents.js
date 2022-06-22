import './NavContinents.css';
import map from '../images/map.png';

function NavContinents() {
  return (
    <div>
      <nav className="nav-container">
        <h1>Covid Cases by Continets</h1>
        <div className="icons-container">
          <i className="material-symbols-outlined">mic</i>
          <i className="material-symbols-outlined">settings</i>
        </div>
      </nav>
      <div className="map">
        <img className="nav-logo" src={map} alt="logo" />
      </div>
    </div>
  );
}

export default NavContinents;
