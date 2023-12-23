import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Details() {
  const [user, setUser] = useState([]);
  //   const [userObject, setUserObject] = useState();
  const navigate = useNavigate();
  //   funct
  useEffect(() => {
    // console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") == null) {
      //   callNavigate();
      navigate("/");
      return;
    }
    const id = JSON.parse(localStorage.getItem("user")).id;
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // setUser(Object.entries(data));
        // console.log(Object.flat(data));
        // setUserObject(data);
        setUser(JSON.stringify(data).split(","));
        // console.log(user);
      });
  }, []);
  return (
    <div id="detail-container">
      <h1>User Data</h1>
      <div id="card">
        {user.map((s, i) => {
          return <p key={i}>{s}</p>;
        })}
      </div>
    </div>
  );
}

export default Details;
