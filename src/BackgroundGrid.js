import React, { Component } from 'react';

class BackgroundGrid extends Component {
  render() {
    const { values } = this.props;
    const gridColumnGap = values.gridColumnGap ? 10 : 0;
    const gridRowGap = values.gridRowGap ? 10 : 0;
    const { justifyContent, alignContent } = values;

    return (
        <section
          className="grid-container"
          style={{
          gridColumnGap,
          gridRowGap,
          justifyContent,
          alignContent
        }}
        >
          <div className="block-1" />
          <div className="block-2" />
          <div className="block-3" />
          <div className="block-4" />
          <div className="block-5" />
          <div className="block-6" />
          <div className="block-7" />
        </section>
    );
  }
}

export default BackgroundGrid;
