import React, { Component } from "react";
import TodoItem from './TodoItem';

export default class ItemList extends Component {
  render() {
    let { toDo } = this.props;
    const time = this.props.toDo.map((data, index) => {
      return (

        <TodoItem items={data.items} time={data.time} id={index} delete={this.props.onDelete} />

      );
    });
    return <div>
      <h1 className="wrapper">Item List</h1>
      {time}</div>;
  }
}
