import React from "react";
import notfound from "../assets/notfound.jpg";
function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "500px",
          height: "500px",
        }}
        src={notfound}
        alt=""
      />
    </div>
  );
}

export default NotFound;
