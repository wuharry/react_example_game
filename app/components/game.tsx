// 九宮格會需要跟用戶端大量交流所以使用client端渲染
"use client";

import { useEffect } from "react";
import Board from "./board";
export default function Game() {
  useEffect(() => {
  }, []);
  return <Board />;
}
