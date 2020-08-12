import React from 'react';

import './styles.css';

const Input = React.forwardRef(({ label, name, error, ...rest }, ref) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} ref={ref} {...rest} />
      {error && <div className="input__error">{error.message}</div>}
    </div>
  );
});

export default Input;
