import "./TableFavorite.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";

const TableFavorite = () => {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/game").then(({ data }) => {
      setFavorite(data);
    });
  }, [favorite]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/game/${id}`);
  };

  return (
    <div className="customers">
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            <th>Id</th>
            <th>Effacer</th>
          </tr>
        </thead>
        <tbody>
          {favorite?.map((f) => (
            <tr key={f.id}>
              <td className="col_name">{f.name}</td>
              <td>{f.slug_id}</td>
              <td>
                <button className="trash" onClick={() => handleDelete(f.id)}>
                  <BsTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFavorite;
