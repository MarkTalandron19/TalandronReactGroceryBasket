import { useState } from "react";
import List from "./List";
import Alert from "./Alert";

const Form = () => {
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAlert(true, 'success', 'item added to list');
    const newItem = { id: list.length + 1, title: name };
    setList([...list, newItem]);
    setName("");
  };

  const handleAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  const handleClear = () => {
    handleAlert(true, "danger", "empty list");
    setList([]);
  };

  
  const handleRemoval = (id) => {
    handleAlert(true, "danger", "item removed");
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };


  return (
    <>
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            type={alert.type}
            message={alert.message}
            removeAlert={handleAlert}
            list={list}
          />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(text) => setName(text.target.value)}
          />
          <button type="submit" className="submit-btn" onSubmit={handleSubmit}>
            {editing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List list={list} handleRemoval={handleRemoval}/>
          <button className="clear-btn" onClick={handleClear}>clear items</button>
        </div>
      )}
    </>
  );
};

export default Form;
