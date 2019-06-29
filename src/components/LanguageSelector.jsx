import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange('english')}
        />
        <i
          className="flag ua"
          onClick={() => this.props.onLanguageChange('ukraine')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
