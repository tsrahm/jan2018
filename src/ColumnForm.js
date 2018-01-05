import React, { Component } from 'react';

class ColumnForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.input.value);
  }

  render() {
    return (
      <form className="input-container first-input" onSubmit={this.handleSubmit}>
        <label>
          <h4 className="input-title">Column Values</h4>
          <input className="Select-control input-box" type="text" ref={(input) => this.input = input} />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default ColumnForm;
