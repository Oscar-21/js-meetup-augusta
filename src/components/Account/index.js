import React from 'react';
import PropTypes from 'prop-types';
//import NavBar from '../NavBar';
import styles from '../styles';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      markup: [],
    };
  }

  componentWillMount() {
    fetch('http://homestead.app/api/userName'
    ).then(function(response) {
       return response.json();
    }).then(function(user) {
      this.setState({ markup: <span> {user} Account Information </span> });
    }.bind(this));
  } 

/* componentWillMount() {
    fetch('http://homestead.app/api/userName'
    ).then( response => {
      return response.json();
    }).then( user => {
      this.setState({ markup: <span> {user}'s Account Information </span> });
    });
  } */ 

  render() {
    return (
      <div style={styles.Account.mainStyle}>
        {/* <NavBar /> */}

        <div style={styles.Account.headerStyle}>
          {this.state.markup}
        </div>

      </div>
    );
  }
}
