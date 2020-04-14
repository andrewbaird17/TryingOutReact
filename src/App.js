import React from 'react';
import './App.css';

class App extends React.Component{
  render() {
    return <div className="header">{this.props.title}</div>
  }
}

export default App;
