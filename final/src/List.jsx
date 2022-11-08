import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list }) => {
  return (
    <div className="grocery-list">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn"> <FaEdit /></button>
              <button className="delete-btn"><FaTrash /></button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;