import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import fireDb from "../firebase";
import "./styles/View.css";

const View = () => {
  const [view, setview] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`Contact-app/${id}`)
      .get()
      .then((snap) => {
        if (snap.exists()) {
          setview({ ...snap.val() });
        } else {
          setview({});
        }
      });

    return () => {
      setview({});
    };
  }, [id]);

  return (
    <div className="container_box">
      <h1>contact details</h1>

      <div className="contact_details">
        <div>
        <h1>ID</h1>
        <span>{id}</span>
        <h1>Name</h1>
        <span>{view.name}</span>
        <h1>email</h1>
        <span>{view.email}</span>
        <h1>contact</h1>
        <span>{view.contact}</span>
        </div>
      </div>
      <Link to="/">
        <button>Go back </button>
      </Link>
    </div>
  );
};

export default View;
