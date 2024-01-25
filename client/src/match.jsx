import React from "react";

export default function match(props) {
  const isoDateString = props.date;
  const isoDate = new Date(isoDateString);

  const formattedDate = isoDate.toLocaleDateString();
  const formattedTime = isoDate.toLocaleTimeString();
  return (
    <div className="mainsingle">
      <div className="row ">
        <div className="col-sm-4 matchnames">{props.home}</div>
        <div className="col-sm-1 vs ">vs</div>
        <div className=" col-sm-4 matchnames">{props.away}</div>
      </div>
      <div className="row">
        <div className="col">Venue : {props.venue}</div>
      </div>
      <div className="row">
        <div className="col-md-2">Date: {formattedDate}</div>
        <div className="offset-md-2 col-md-2">Time: {formattedTime}</div>
      </div>
    </div>
  );
}
