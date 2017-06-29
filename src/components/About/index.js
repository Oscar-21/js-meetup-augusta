import React from 'react';
// import NavBar from '../NavBar';
import styles from '../styles';

const About = props => (
  <div style={styles.About.mainStyle}>
    {/*<NavBar />*/}
    <div styles={styles.Account.headerStyle}>
      About {props.name}
    </div>
  </div>
);
export default About;