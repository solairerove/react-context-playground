import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { onLanguageChange } = this.context;
    return (
      <div>
        Select language:
        <div className="ui icon buttons">
          <button type="button" className="ui button" onClick={() => onLanguageChange('english')}>
            <i className="flag us" />
          </button>

          <button type="button" className="ui button" onClick={() => onLanguageChange('ukraine')}>
            <i className="flag ua" />
          </button>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
