"use client";

import { useEffect, useState } from "react";

interface SquareProps {
  player: string;
  index: number;
  squares: Array<string>;
  setSquares: (data: any) => void;
  changePlayer: () => void;
}
const Square: React.FC<SquareProps> = (props) => {
  useEffect(() => {}, []);
  const [value, setValue] = useState("");
  const clickHandler = (): void => {
    if (value === "") {
      if (props.player === "player1") {
        setValue("X");
        props.setSquares((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[props.index] = "player1";
          return newArray;
        });
      } else if (props.player === "player2") {
        setValue("O");
        props.setSquares((prevArray: any) => {
          const newArray = [...prevArray];
          newArray[props.index] = "player2";
          return newArray;
        });
      }
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
