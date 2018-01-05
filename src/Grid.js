import React, { Component } from 'react';

class Grid extends Component {
  renderItems() {
    let itemsArray = [];
    for (let i = 1; i <= this.props.numColumns; i++) {
      const bgColor = 50 + i * 40;
      itemsArray.push(
        <div
          className={`item${i}`}
          style={{ gridColumn: i, backgroundColor: `rgb(0,${bgColor},255)` }}
          key={i}
        >
          {`Item${i}`}
        </div>
      )
    }

    return itemsArray;
  }

  render() {
    const { values, numColumns } = this.props;
    const { gridTemplateColumns, justifyItems, alignItems, justifyContent, alignContent } = values;
    // const { justifyItems, alignItems, justifyContent, alignContent } = values;
    const gridColumnGap = values.gridColumnGap ? 10 : 0;
    const gridRowGap = values.gridRowGap ? 10 : 0;
    const hfColumnEnd = numColumns + 1;
    // const gridTemplateColumns = '30% 30% 30%';

    return (
      <section
        className="grid-container"
        style={{
          gridTemplateColumns,
          gridColumnGap,
          gridRowGap,
          justifyItems,
          alignItems,
          justifyContent,
          alignContent,
        }}
      >
        <div
          className="header"
          style={{ gridColumn: `1 / ${hfColumnEnd}` }}
        >Header</div>
        <div
          className="body"
          style={{ gridColumn: `1 / ${numColumns}` }}
        >Body</div>
        <div
          className="sidebar"
          style={{ gridColumn: numColumns }}
        >Sidebar</div>
        {this.renderItems()}
        <div
          className="footer"
          style={{ gridColumn: `1 / ${hfColumnEnd}` }}
          >Footer</div>
      </section>
    );
  }
}

export default Grid;
