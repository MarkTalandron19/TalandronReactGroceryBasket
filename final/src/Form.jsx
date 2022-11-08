import { useState } from "react";

const Form = () => {
  const [editing, setEditing] = useState(false);

  return (
    <form action="" className="grocery-form">
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g. eggs" />
        <button type="submit" className="submit-btn">
          {editing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;