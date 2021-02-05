import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

// Creamos un componente con una sencilla función flecha.
const Header = props => {
  const { title = 'Pomodoro Timer', url = 'http://localhost:3000' } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>
    </header>
  );
};

// Podemos validar PropTypes incluso con componentes funcionales.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
