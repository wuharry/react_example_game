// 九宮格會需要跟用戶端大量交流所以使用client端渲染
"use client";

import Board from "./board";
export default function Game() {
  const ticTac = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" w-60 grid grid-cols-3 grid-rows-3">
      {ticTac.map((item) => {
        return <Board key={item} ></Board>;
      })}
    </div>
  );
}
