import React from 'react';

const Button = (props) => (
  <div className="calculator-button">
    <button {...props} class="btn btn-default">
      {props.children}
    </button>
  </div>
);

export default Button;
