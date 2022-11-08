import { useState } from "react";
import List from "./List";

const Form = () => {
const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();    
    const newItem = {id: list.length + 1, title: name};
    setList([...list, newItem]);
    setName('');
  }


  return (
    <>
    <form action="" className="grocery-form" onSubmit={handleSubmit}>
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g. eggs" onChange={(text) => setName(text.target.value)}/>
        <button type="submit" className="submit-btn" onSubmit={handleSubmit}>
          {editing ? "edit" : "submit"}
        </button>
      </div>
    </form>
    {list.length > 0 && (
        <div className="grocery-container">
            <List list={list} />
            <button className="clear-btn">
                clear items
            </button>
        </div>
    )}
    </>
  );
};

export default Form;
