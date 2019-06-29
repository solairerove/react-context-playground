import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag ua"
            onClick={() => this.onLanguageChange('ukraine')}
          />
        </div>
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
