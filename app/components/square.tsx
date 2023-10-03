"use client";

import { useEffect } from "react";

const Square = () => {
  useEffect(() => {
  }, []);
  const clickHandler = (): void => {
  };
  return (
    <div>
      <button className="w-4/5 h-20 " onClick={clickHandler}></button>
    </div>
  );
};

export default Square;
