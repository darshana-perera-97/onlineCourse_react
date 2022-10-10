import React from "react";

export default function SingleLink(prop) {
  return (
    <div>
      <p
        style={{
          margin: "0px",
          padding: "10px 20px",
          color: "white",
          fontSize: "20px",
          paddingTop: "28px",
        }}
      >
        {prop.data}
      </p>
    </div>
  );
}
