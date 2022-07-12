import React from "react";

export default function Card(props) {
  const date = props.date;
  const icon = props.icon;
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="img-container row center">
          <img className="card-img-top icon" src={icon} alt="Card image cap" />
        </div>
          <div className="card-body">
            <h5 className="card-title">{date}</h5>
            <p className="card-text">Today's weather</p>
          </div>
      </div>
    </>
  );
}
