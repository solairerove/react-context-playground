import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmit = language => (language === 'english' ? 'Submit' : 'Подати');

  renderButton(color) {
    return (
      <button type="button" className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

export default Button;
