import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import ItemList from "./ItemList";
import DeletedItemList from "./DeletedItemList";
import moment from "moment";

export default class App extends Component {
  constructor() {
    super();

    // this.InputHandler = this.InputHandler.bind(this);
    this.state = {
      defaultValue: "",
      ToDoItems: [],
      deleted: [],
    };
  }

  toDoOnChangeHandler = (e) => {
    this.setState({
      defaultValue: e.target.value,
      message: "",
      class: "",
    });
    if (e.target.value.split("").length < 3) {
      this.setState({
        message: "Minimum 2 Characters Required",
        class: "visible",
      });
    }
    if (e.target.value.split("").length > 200) {
      this.setState({
        message: "Maximum 200 Characters",
        class: "visible",
      });
    }
  };

  toDoInputHandler = (e) => {
    if (this.state.class === "" && this.state.message === "") {
      let date = moment().format("MMMM Do YYYY, h:mm:ss a");
      this.setState((prevState) => ({
        ToDoItems: [
          ...prevState.ToDoItems,
          { "items": this.state.defaultValue, "time": date },
        ],
        defaultValue: "",
      }));
    }
  };

  onDeleteHandler = (e) => {
    let apples = this.state.ToDoItems
    let deleted = apples.splice(e.target.value, 1)
    console.log(deleted);
    this.setState((prevState) => ({
      ToDoItems: apples,
      deleted: [...prevState.deleted, deleted[0]]
    }))
  }

  render() {

    return (
      <div className="center">
        <Form
          onChange={this.toDoOnChangeHandler}
          value={this.state.defaultValue}
          onKeyUp={this.toDoInputHandler}
          message={this.state.message}
          class={this.state.class}
        />
        <ItemList toDo={this.state.ToDoItems} onDelete={this.onDeleteHandler} />
        <DeletedItemList deleted={this.state.deleted} />
      </div>
    );
  }
}
