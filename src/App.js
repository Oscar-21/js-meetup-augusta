import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Account from './components/Account';

// Now we can render the view for the header
// in any component.
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route
            path='/About' 
            render={(props) => (<About name='React' />)}
          />

          <Route
            path='/account'
            component={Account}
          />

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
