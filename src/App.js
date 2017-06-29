import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';

// Now we can render the view for the header
// in any component.
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route 
            render={(props) => (<About name='React' />)}
          />

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
