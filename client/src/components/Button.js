import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Button = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="Button">
      <div>
        <button onClick={toggleMode}>
          Darkmode
        </button>
      </div>
    </nav>
  );
};

export default Button;