import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fireDb from "../firebase";
import "./styles/Home.css"

const Home = () => {
  const [data, setdata] = useState({});

  useEffect(() => {
    fireDb.child("Contact-app").on("value", (snapcart) => {
      if (snapcart.val() !== null) {
        setdata({ ...snapcart.val() });
      } else {
        setdata({});
      }
    });
    return () => {
      setdata({});
    };
  }, []);
  const handleremove = (id) => {
    fireDb.child(`Contact-app/${id}`).remove();
  };

  return (
    <div className="home_page">
      <table caption="contacts">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>S.NO</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <td scope="row">{index + 1}</td>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td> {data[id].contact}</td>
                <td className="table_btn">
                  <Link to={`/add/${id}`}>
                    <button>edit</button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link to={`/view/${id}`}>
                    <button>view</button>
                  </Link>
                  &nbsp; &nbsp;
                  <button onClick={() => handleremove(id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
