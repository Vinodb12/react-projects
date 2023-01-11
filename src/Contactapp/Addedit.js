import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { createBrowserHistory } from "@remix-run/router";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Addedit.css";
const Addedit = () => {
  const intialstate = {
    name: "",
    email: "",
    contact: "",
  };
  const [user, setUser] = useState(intialstate);
  const [data, setdata] = useState({});

  const { name, email, contact } = user;
  const history = useNavigate();
  const { id } = useParams();
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
  }, [id]);
  useEffect(() => {
    if (id) {
      setUser({ ...data[id] });
    } else {
      setUser({ ...intialstate });
    }

    return () => {
      setUser({ ...intialstate });
    };
  }, [id, data]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitform = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      window.alert("fill all inputdetails");
    } else {
      if (!id) {
        fireDb.child("Contact-app").push(user, (err) => {
          if (err) {
            window.alert("error in firebase");
          } else {
            window.alert(" add sucessfulll");
          }
        });
      } else {
        fireDb.child(`Contact-app/${id}`).set(user, (err) => {
          if (err) {
            window.alert("error in firebase");
          } else {
            window.alert("update sucessfulll");
          }
        });
      }
    }
    setTimeout(() => history("/"), 1000);
  };
  console.log(id, data);
  return (
    <div className="addpage">
      <form className="form_controls" onSubmit={submitform}>
        <label htmlFor="username">user Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name || ""}
          placeholder="enter tha username"
          onChange={handlechange}
        />
        <label htmlFor="email">user mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email || ""}
          placeholder="enter tha username"
          onChange={handlechange}
        />
        <label htmlFor="email">contact</label>
        <input
          type="number"
          id="number"
          name="contact"
          value={contact || ""}
          placeholder="enter tha contact no"
          onChange={handlechange}
        />
        <input id="send_btn" type="submit" value={id ? "update" : "save"} />
      </form>
    </div>
  );
};

export default Addedit;
