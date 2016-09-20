import React from 'react';
import { compose, withState, mapProps } from 'recompose';
import Display from './Display';
import Button from './Button';

const enhance = compose(
  withState('calc', 'handleClick', '0'),
  mapProps(({ calc, handleClick }) => ({
    buttonClick: (event) => {
      event.persist();
      return handleClick(() => {
        const value = event.target.innerText;

        if (calc === '0' &&  value !== '0')
          return value;

        return calc + value;
      });
    },
    submitCalc: () => handleClick(() => {
      try {
        return eval(calc);
      } catch (e) {
        return calc;
      }
    }),
    clear: () => handleClick(() => '0'),
    calc
  }))
);

const Calculator = enhance(({ calc, buttonClick, submitCalc, clear }) =>
  <div id="calculator">
    <Display value={calc} disabled="disabled" />
    <div className="calculator-buttons">
      <Button onClick={buttonClick}>7</Button>
      <Button onClick={buttonClick}>8</Button>
      <Button onClick={buttonClick}>9</Button>
      <div className="clearfix"></div>

      <Button onClick={buttonClick}>4</Button>
      <Button onClick={buttonClick}>5</Button>
      <Button onClick={buttonClick}>6</Button>
      <div className="clearfix"></div>

      <Button onClick={buttonClick}>1</Button>
      <Button onClick={buttonClick}>2</Button>
      <Button onClick={buttonClick}>3</Button>
      <div className="clearfix"></div>

      <Button onClick={buttonClick}>0</Button>
    </div>

    <div className="calculator-action-buttons">
      <Button onClick={buttonClick}>+</Button>
      <Button onClick={buttonClick}>-</Button>
      <div className="clearfix"></div>

      <Button onClick={buttonClick}>*</Button>
      <Button onClick={buttonClick}>/</Button>
      <div className="clearfix"></div>

      <Button onClick={submitCalc}>=</Button>
      <Button onClick={clear}>CR</Button>
      <div className="clearfix"></div>
    </div>
    <div className="clearfix"></div>
  </div>
);

export default Calculator;
