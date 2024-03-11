import React from 'react';

const styles = {
  Text: {
    paddingTop:'30px',
    color: '#06367a',
    fontSize: '32px',
    fontFamily: 'Inter',
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: '40px',
  },
};


const MeadiaHeading = ({text}) => {
  return (
    <div style={styles.Text}>
      {text}
    </div>
  );
};

export default MeadiaHeading;