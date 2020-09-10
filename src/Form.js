import React from "react";

export default function Form(props) {
  let warning = { color: 'red' }
  return (
    <div className="inputfield">
      <form>
        <input
          type="text"
          name="Input"
          onChange={(e) => {
            e.persist();
            props.onChange(e);
          }}
          value={props.value}
        />

        <button
          type="submit"
          onClick={(e) => {
            e.persist();
            e.preventDefault();
            props.onKeyUp(e);
          }}
        >
          Submit
        </button>
        <p className='{props.class}' style={warning}>{props.message}</p>
      </form>
    </div>
  );
}
