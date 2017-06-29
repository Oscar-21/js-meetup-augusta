import React from 'react';

const mainStyle = {
  fontFamily: 'Lato, sans-serif',
  textAlign: 'center',
  fontSize: '3em',
  fontWeight: 'bold',
};

const About = (props) => (
  <div style={mainStyle}>
    About {props.name}
  </div>
);

export default About;