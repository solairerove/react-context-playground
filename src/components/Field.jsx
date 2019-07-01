/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { language } = this.context;
    const text = language === 'english' ? 'Name' : "Ім'я";
    return (
      <div className="ui field">
        <label htmlFor="field">
          <input id="field" type="text" />
          {text}
        </label>
      </div>
    );
  }
}

export default Field;
