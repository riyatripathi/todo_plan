import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan.js";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState({ itemList: [], text: "" });

  function handleText(e) {
    setInput((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  }

  function handleDelete(id) {
    const newItem = input.itemList.filter((value, idx) => {
      if (id !== idx) {
        return value;
      }
    });
    setInput({ itemList: newItem, text: "" });
  }

  function handleItems() {
    if (input.text !== "") {
      const items = [...input.itemList, input.text];
      setInput({ itemList: items, text: "" });
    }
  }

  return (
    <div className="App">
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center p-4">Today's Plan</h1>

            <div className="row">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Plan here"
                  value={input.text}
                  onChange={handleText}
                />
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-warning px-4 fw-bold"
                  onClick={handleItems}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="container-fluid">
              <ul className="list-unstyled row mt-5 mx-3">
                {input.itemList.map((value, idx) => {
                  return (
                    <Plan value={value} idx={idx} handleDelete={handleDelete} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
