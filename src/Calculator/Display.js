import React from 'react';

const Display = (props) => (
  <div className="form-group">
    <input id="calculator-display" type="text" class="form-control" {...props} />
  </div>
);

export default Display;
