import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    let { items, time, id } = this.props;
    return <div className="wrapper">
      <div className='items'>{items}</div><div className='time'>{time}</div>
      <button type="submit" value={id} onClick={(e) => {
        e.persist()
        e.preventDefault()
        this.props.delete(e);
      }}>Delete</button>
    </div>
      ;
  }
}
