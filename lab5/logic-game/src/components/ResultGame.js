import React from "react";

function ResultGame(props) {
  const n = Number(props.step);
  const result =
    n < 7
      ? "Прекрасная логика, да ты еще и везунчик!"
      : n > 7
      ? "Пока не очень, попробуй еще раз..."
      : "Логика у тебя в крови.";

  return <h3>{result}</h3>;
}

export default ResultGame;
