import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Account from './components/Account';
import NavBar from './components/NavBar';
import styles from './components/styles';

// Now we can render the view for the header
// in any component.
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={styles.App.mainStyle}>
          <NavBar />

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
