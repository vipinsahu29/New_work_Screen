import React from 'react';

const styles = {
  Text: {
    color: '#06367a',
    fontSize: '20px',
    fontFamily: 'Work Sans',
    fontWeight: 700,
    lineHeight: '26px',
  },
};

const AtomText = ({text,children}) => {
  return (
    <p style={styles.Text}>
      {text}
      {children}
    </p>
  );
};

export default AtomText;