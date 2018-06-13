import React, { Component } from 'react';

class ForegroundGrid extends Component {
  renderOddItems(row) {
    let itemsArray = [];
    for (let i = 1; i <= 4; i++) {
      const bgColor = i * 2;
      itemsArray.push(
        <div
          className={`block-${i}`}
          style={{ gridColumn: i, gridRow: row, backgroundColor: `#${bgColor}${bgColor}${bgColor}` }}
          key={i}
        >
        </div>
      )
    }

    return itemsArray;
  }

  renderEvenItems(row) {
    let itemsArray = [];
    let x = 5;
    for (let i = 1; i <= 4; i++) {
      x--;
      const bgColor = x * 2;
      itemsArray.push(
        <div
          className={`block-${i}`}
          style={{ gridColumn: i, gridRow: row, backgroundColor: `#${bgColor}${bgColor}${bgColor}` }}
          key={i}
        >
        </div>
      )
    }

    return itemsArray;
  }

  render() {
    const { values, numColumns } = this.props;
    const { gridTemplateColumns, justifyContent, alignContent } = values;
    const gridColumnGap = values.gridColumnGap ? 10 : 0;
    const gridRowGap = values.gridRowGap ? 10 : 0;
    const hfColumnEnd = numColumns + 1;
    const display = values.display ? 'grid' : 'none';
    // const gridTemplateColumns = '30% 30% 30%';

    return (
        <section
          className="grid-container"
          style={{
          gridTemplateColumns,
          gridColumnGap,
          gridRowGap,
          justifyContent,
          alignContent,
          display
        }}
        >
          {this.renderOddItems(1)}
          {this.renderEvenItems(2)}
          {this.renderOddItems(3)}
          {this.renderEvenItems(4)}
          {this.renderOddItems(5)}
        </section>
    );
  }
}

export default ForegroundGrid;
