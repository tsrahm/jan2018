import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { values } = this.props;
    const gridColumnGap = values.gridColumnGap ? 10 : 0;
    const gridRowGap = values.gridRowGap ? 10 : 0;
    const { justifyItems, alignItems, justifyContent, alignContent } = values;
    const gridTemplateArea1 = 'header header header';
    const gridTemplateArea2 = 'body body sidebar';
    const gridTemplateAreas = `"${gridTemplateArea1}" "${gridTemplateArea2}"`;

    return (
      <section
        className="grid-container"
        style={{
          gridColumnGap,
          gridRowGap,
          justifyItems,
          alignItems,
          justifyContent,
          alignContent,
          gridTemplateAreas
        }}
      >
        <div className="header">Header</div>
        <div className="body">Body</div>
        <div className="sidebar">Sidebar</div>
        <div className="item1">Item1</div>
        <div className="item2">Item2</div>
        <div className="item3">Item3</div>
        <div className="footer">Footer</div>
      </section>
    );
  }
}

export default Grid;
