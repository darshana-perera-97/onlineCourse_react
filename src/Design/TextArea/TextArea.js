import React from "react";

export default function TextArea() {
  return (
    <div
      style={{
        margin: "0px 12%",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: "30px 0px" }}>
        <p style={{ margin: "-10px", fontSize: "55px", fontWeight: "bold" }}>
          We are here,
        </p>
        <p style={{ margin: "-10px", fontSize: "70px", fontWeight: "bold" }}>
          To help you
        </p>
        <p style={{ margin: "0px", fontSize: "20px", paddingTop: "20px" }}>
          We have awasome courses for <br /> undergraduates, School Goers,
          Employees <br /> for cheepest price lists for you <br /> with flexible
          class schedules
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px 0px",
          }}
        >
          <button
            style={{
              padding: "5px 15px",
              borderRadius: "20px",
              background: "#00C64F",
              color: "white",
              border: "1px solid #00C64F",
              fontSize: "18px",

            }}
          >
            Read More ...
          </button>
          <button
            style={{
              padding: "5px 15px",
              borderRadius: "20px",
              background: "white",
              color: "#00C64F",
              border: "3px solid #00C64F",
              fontSize: "18px",

            }}
          >
            Register Now
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://thumbs.dreamstime.com/b/online-training-group-lessons-seminars-webinar-colloquium-team-work-concept-workshops-vector-illustration-social-media-138209903.jpg"
          height="400px"
        />
      </div>
    </div>
  );
}
