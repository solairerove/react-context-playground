import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmit = value => {
    return value === 'english' ? 'Submit' : 'Подати';
  };

  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{this.renderSubmit}</LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}

export default Button;
