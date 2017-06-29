import React from 'react';
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
      this.setState({ markup: <span> {user}'s' Account Information </span> });
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
        {this.state.markup}
      </div>
    );
  }
}
export default Account;