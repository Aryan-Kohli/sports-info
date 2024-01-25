import React from "react";

export default function match(props) {
  const targetTime = new Date(props.date).getTime();

  const currentTime = new Date().getTime();

  const timeDifference = targetTime - currentTime;

  const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
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
        <div className="col ">
          Time remaining: {remainingDays < 0 ? 0 : remainingDays}Days{" "}
          {remainingHours < 0 ? 0 : remainingHours}hours{"  "}
          {remainingMinutes < 0 ? 0 : remainingMinutes}Min{" "}
        </div>
      </div>
    </div>
  );
}
