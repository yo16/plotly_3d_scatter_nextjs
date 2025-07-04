"use client"

import dynamic from 'next/dynamic';
// サーバー側では一切評価させない
const Chart3d = dynamic(() => import('@/components/chart3d'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>3D Scatter Plot</h1>
      <Chart3d data={[{x: 1, y: 2, z: 3}, {x: 4, y: 5, z: 6}]} />
    </div>
  );
}
