import React, { Component } from 'react';

class BackgroundGrid extends Component {
  renderItems() {
    let itemsArray = [];
    for (let i = 1; i <= this.props.numColumns; i++) {
      const bgColor = i * 2;
      itemsArray.push(
        <div
          className={`block-${i}`}
          style={{ gridColumn: i, backgroundColor: `#${bgColor}${bgColor}${bgColor}` }}
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
    // const gridTemplateColumns = '30% 30% 30%';

    return (
        <section
          className="grid-container"
          style={{
          gridTemplateColumns,
          gridColumnGap,
          gridRowGap,
          justifyContent,
          alignContent
        }}
        >
          <div
            className="block-header"
            style={{ gridColumn: `1 / ${hfColumnEnd}`}}
          ></div>
          <div
            className="block-body"
            style={{ gridColumn: `1 / ${numColumns}` }}
          ></div>
          <div
            className="block-sidebar"
            style={{ gridColumn: numColumns }}
          ></div>
          {this.renderItems()}
          <div className="block-4" />
          <div className="block-5" />
          <div className="block-6" />
          <div
            className="block-footer"
            style={{ gridColumn: `1 / ${hfColumnEnd}`}}
          ></div>
        </section>
    );
  }
}

export default BackgroundGrid;
