// src/components/ListItem.js

import React, { Component } from 'react';

class ListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.item !== nextProps.item;
  }

  render() {
    const { style, onUpdate, onRemove, item } = this.props;
    return (
      <li
        style={style}
        onClick={() => onUpdate(item.id)}
        onContextMenu={e => {
          e.preventDefault();
          onRemove(item.id);
        }}
      ></li>
    );
  }
}

export default ListItem;
