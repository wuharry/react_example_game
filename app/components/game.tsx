// 九宮格會需要跟用戶端大量交流所以使用client端渲染
"use client";

import { useEffect } from "react";
import Board from "./board";
import service from "../api/fetchMethod";
export default function Game() {
  useEffect(() => {
    service.get("/casinos").then((res) => {
      console.log(res.data);
      return res.data;
    });
  }, []);
  return <Board />;
}
