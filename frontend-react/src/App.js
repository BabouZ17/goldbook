import React from 'react';
import './App.css';

import TitleComponent from './components/TitleComponent';
import NotesComponent from './components/TableComponent';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TitleComponent className="Title" />
        <NotesComponent />
      </div>
    )
  }
}

export default App;
