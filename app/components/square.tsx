"use client";

import { useEffect, useState } from "react";

interface SquareProps {
  player: string;
  changePlayer: () => void;
}
const Square: React.FC<SquareProps> = (props) => {
  useEffect(() => {}, []);
  const [value, setValue] = useState("");
  const clickHandler = (): void => {
    if (value === "") {
      setValue(props.player === "player1" ? "X" : "O");
      props.changePlayer();
    }

    // console.log(props.player); // 將console.log移至setValue之後
  };
  return (
    <div>
      <button className="w-4/5 h-20 " onClick={clickHandler}>
        {value}
      </button>
    </div>
  );
};

export default Square;
