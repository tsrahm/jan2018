import React, { Component } from 'react';
import Select from 'react-select';
import Grid from './Grid';
import BackgroundGrid from './BackgroundGrid';
import logo from './logo.svg';
import 'react-select/dist/react-select.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        gridColumnGap: [
          { value: true, label: 'Yes', key: 'gridColumnGap' },
          { value: false, label: 'No', key: 'gridColumnGap' }
        ],
        gridRowGap: [
          { value: true, label: 'Yes', key: 'gridRowGap' },
          { value: false, label: 'No', key: 'gridRowGap' }
        ],
        justifyItems: [
          { value: 'start', label: 'Start', key: 'justifyItems' },
          { value: 'end', label: 'End', key: 'justifyItems' },
          { value: 'center', label: 'Center', key: 'justifyItems' },
          { value: 'stretch', label: 'Stretch', key: 'justifyItems' }
        ],
        alignItems: [
          { value: 'start', label: 'Start', key: 'alignItems' },
          { value: 'end', label: 'End', key: 'alignItems' },
          { value: 'center', label: 'Center', key: 'alignItems' },
          { value: 'stretch', label: 'Stretch', key: 'alignItems' }
        ],
        justifyContent: [
          { value: 'start', label: 'Start', key: 'justifyContent' },
          { value: 'end', label: 'End', key: 'justifyContent' },
          { value: 'center', label: 'Center', key: 'justifyContent' },
          { value: 'stretch', label: 'Stretch', key: 'justifyContent' }
        ],
        alignContent: [
          { value: 'start', label: 'Start', key: 'alignContent' },
          { value: 'end', label: 'End', key: 'alignContent' },
          { value: 'center', label: 'Center', key: 'alignContent' },
          { value: 'stretch', label: 'Stretch', key: 'alignContent' }
        ]
      },
      values: {
        gridColumnGap: false,
        gridRowGap: false,
        justifyItems: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'start',
        alignContent: 'start'
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(item) {
    const { key, value } = item;
    const state = this.state;
    state.values[key] = value;

    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CSS Grid Playground</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="master-container">
          <div className="dropdown-container first-dropdown">
            <h4 className="dropdown-title">Grid Column Gap</h4>
            <Select
              onChange={this.onChange}
              options={this.state.options.gridColumnGap}
              value={this.state.values.gridColumnGap}
              backspaceRemoves={false}
            />
          </div>
          <div className="dropdown-container">
            <h4 className="dropdown-title">Grid Row Gap</h4>
            <Select
              onChange={this.onChange}
              options={this.state.options.gridRowGap}
              value={this.state.values.gridRowGap}
              backspaceRemoves={false}
            />
          </div>
          <div className="dropdown-container">
            <h4 className="dropdown-title">Justify Items</h4>
            <Select
              onChange={this.onChange}
              options={this.state.options.justifyItems}
              value={this.state.values.justifyItems}
              backspaceRemoves={false}
            />
          </div>
          <div className="dropdown-container">
            <h4 className="dropdown-title">Align Items</h4>
            <Select
              onChange={this.onChange}
              options={this.state.options.alignItems}
              value={this.state.values.alignItems}
              backspaceRemoves={false}
            />
          </div>
          <div className="dropdown-container">
            <h4 className="dropdown-title">Justify Content</h4>
            <Select
              onChange={this.onChange}
              options={this.state.options.justifyContent}
              value={this.state.values.justifyContent}
              backspaceRemoves={false}
            />
          </div>
          <div className="dropdown-container">
            <h4 className="dropdown-title">Align Content</h4>
            <Select
              onChange={this.onChange}
              options={this.state.options.alignContent}
              value={this.state.values.alignContent}
              backspaceRemoves={false}
            />
          </div>
          <BackgroundGrid values={this.state.values} />
          <Grid values={this.state.values} />
        </div>
      </div>
    );
  }
}

export default App;
