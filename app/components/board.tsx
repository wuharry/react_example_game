"use client";
import { useEffect, useState } from "react";
import Square from "./square";

const Board = () => {
  const [player, setPlayer] = useState("player1");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const changePlayer = (): void => {
    if (player === "player1") {
      setPlayer("player2");
    } else if (player === "player2") {
      setPlayer("player1");
    }
  };
  function checkWinner() {
    // 所有可能的贏法的組合
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        alert(squares[a] + "winner");
        return squares[a]; // 有玩家獲勝，返回該玩家的符號（"X" 或 "O"）
      }
    }

    if (squares.every((square) => square)) {
      alert("Draw");
      return "Draw"; // 遊戲平局
    }

    return null; // 遊戲還未結束
  }
  useEffect(() => {
    checkWinner();
  }, [squares]);
  return (
    <div className=" w-60 grid grid-cols-3 grid-rows-3">
      {squares.map((item: number, index: number) => {
        return (
          <div className="w-20 h-20 border-2" key={index}>
            <Square
              player={player}
              index={index}
              setSquares={setSquares}
              squares={squares}
              changePlayer={changePlayer}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
