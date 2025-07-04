"use client"

import { useState } from "react";

import dynamic from 'next/dynamic';
// サーバー側では一切評価させない
const Chart3d = dynamic(() => import('@/components/chart3d'), {
  ssr: false,
});
import { XYZ } from "@/components/chart3d";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState("0,0,0");
  const [data, setData] = useState<XYZ[]>([{x: 0, y: 0, z: 0}]);

  const handleChangedTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n").filter(line => line.trim() !== "");
    setData(lines.map(line => {
      const [x, y, z] = line.split(",").map(Number);
      return { x, y, z };
    }));
  };

  return (
    <div>
      <h1>3D Scatter Plot</h1>
      <textarea
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        onBlur={handleChangedTextArea}
        rows={10}
        cols={40}
      />
      <Chart3d data={data} />
    </div>
  );
}
