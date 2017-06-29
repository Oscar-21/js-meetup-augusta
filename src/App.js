import React, { Component } from 'react';
import Header from './components/Header';

// Now we can render the view for the header
// in any component.
class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
