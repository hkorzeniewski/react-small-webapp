import React from "react";
import { useState } from "react";

const AddActivity = ( {onAdd} ) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add name");
      return;
    }
    onAdd({ text, number });
    setText("");
    setNumber("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Activity</label>
        <input
          type="text"
          placeholder="Add Activity"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Reps</label>
        <input
          type="number"
          placeholder="Add Reps"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <input type="submit" value="Add Activity" />
    </form>
  );
};

export default AddActivity;
