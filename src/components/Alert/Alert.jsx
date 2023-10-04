

import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  const alertClass = tipo === 'success' ? 'alert-success' : 'alert-danger' ;

  return (
    <div className={`alert alert-${tipo} my-3`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;