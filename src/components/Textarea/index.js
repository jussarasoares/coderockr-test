import React from 'react';
import './styles.css';

const Textarea = React.forwardRef(({ label, name, error, ...rest }, ref) => {
  return (
    <div className="textarea">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} ref={ref} {...rest} />
      {error && <div className="textarea__error">{error.message}</div>}
    </div>
  );
});

export default Textarea;
