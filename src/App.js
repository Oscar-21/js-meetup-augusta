import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';

// Now we can render the view for the header
// in any component.
class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <About name='React' />
        </div>
    );
  }
}
export default App;
