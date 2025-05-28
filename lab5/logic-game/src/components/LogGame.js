import React from "react";

function LogGame(props) {
  const number = Number(props.listLog.value);
  const listLog = props.listLog.arrValues.map((val, index) => (
    <p key={index}>
      {index + 1}. Число {val}{" "}
      {Number(val) > number
        ? "больше задуманного."
        : Number(val) < number
        ? "меньше задуманного."
        : "Угадал!"}
    </p>
  ));
  return <div className="log">{listLog}</div>;
}

export default LogGame;
