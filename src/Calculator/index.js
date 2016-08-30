import React from 'react';
import Display from './Display';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        calc: "",
        history: []
     };

     this.buttonClick = this.buttonClick.bind(this);
     this.submitCalc = this.submitCalc.bind(this);
     this.clear = this.clear.bind(this);
  }

  buttonClick() {
    return (e) => {
      const calc = this.state.calc + e.target.innerText;
      this.setState({ ...this.state, calc });
    };
  }

  submitCalc() {
    const result = eval(this.state.calc);
    const calc = this.state.calc + " = " + result;
    const history = [
       ...this.state.history,
       calc
    ];
    this.setState({ ...this.state, history, calc });
  }

  clear() {
    this.setState({ ...this.state, calc: "" });
  }

  render() {
    return (
      <div id="calculator">
        <div className="row">
          <Display value={this.state.calc} disabled="disabled" />
        </div>
        <div className="row calculator-buttons">
          <div className="col-md-6">
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>1</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>2</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>3</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>4</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>5</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>6</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>7</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>8</Button>
          </div>
          <div className="col-md-4">
            <Button onClick={this.buttonClick()}>9</Button>
          </div>
          <div className="col-md-6">
            <Button onClick={this.buttonClick()}>0</Button>
          </div>
          </div>

          <div className="col-md-6 calculator-op-buttons">
          <div className="col-md-6">
          <Button onClick={this.buttonClick()}>+</Button>
          </div>
          <div className="col-md-6">
          <Button onClick={this.buttonClick()}>-</Button>
          </div>
          <div className="col-md-6">
          <Button onClick={this.buttonClick()}>*</Button>
          </div>
          <div className="col-md-6">
          <Button onClick={this.buttonClick()}>/</Button>
          </div>
          <div className="col-md-6">
          <Button onClick={this.clear}>CR</Button>
          </div>
          <div className="col-md-12">
          <Button onClick={this.submitCalc}>=</Button>
          </div>
          </div>
       </div>
     </div>
   );
  }
}
