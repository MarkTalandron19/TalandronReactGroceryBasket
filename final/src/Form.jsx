import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const fetchList = () => {
  let currentList = localStorage.getItem("list");
  if (currentList) {
    return (currentList = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Form = () => {
  const [list, setList] = useState(fetchList());
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      handleAlert(true, "danger", "please input an item");
    } else if (name && editing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setEditing(false);
      handleAlert(true, "success", "item changed");
    } else {
      handleAlert(true, "success", "item added to list");
      const newItem = { id: list.length + 1, title: name };
      setList([...list, newItem]);
      setName("");
      setEditing(false);
    }
  };

  const handleAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  const handleClear = () => {
    handleAlert(true, "danger", "empty list");
    setList([]);
  };

  const handleEdit = (id) => {
    const edit = list.find((item) => item.id === id);
    setEditing(true);
    setEditID(id);
    setName(edit.title);
  };

  const handleRemoval = (id) => {
    handleAlert(true, "danger", "item removed");
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            type={alert.type}
            message={alert.message}
            removeAlert={handleAlert}
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
          <List
            list={list}
            handleRemoval={handleRemoval}
            handleEdit={handleEdit}
          />
          <button className="clear-btn" onClick={handleClear}>
            clear items
          </button>
        </div>
      )}
    </>
  );
};

export default Form;