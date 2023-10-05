"use client";
import { useEffect, useState } from "react";
import Square from "./square";

const Board = () => {
  const [player, setPlayer] = useState("player1");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const changePlayer = (): void => {
    if (player === "player1") {
      console.log(`1`);
      setPlayer("player2");
    } else if (player === "player2") {
      console.log(`2`);
      setPlayer("player1");
    }
  };
  return (
    <div className=" w-60 grid grid-cols-3 grid-rows-3">
      {squares.map((item: number, index: number) => {
        return (
          <div className="w-20 h-20 border-2" key={index}>
            <Square player={player}   changePlayer={changePlayer} />
          </div>
        );
      })} 
    </div>
  );
};

export default Board;
