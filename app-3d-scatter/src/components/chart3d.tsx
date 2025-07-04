"use client"

import Plot from 'react-plotly.js'
import * as Plotly from "plotly.js";


export type XYZ = {
    x: number;
    y: number;
    z: number;
};

type Chart3dProps = {
    data: XYZ[];
    width?: number;
    height?: number;
};

export default function Chart3d({ data, width = 600, height = 400 }: Chart3dProps) {
    const layout = {
        width: width,
        height: height,
        margin: {t: 40, r: 10, b: 10, l: 10},
        paper_bgcolor: "#eee",
    };
    const plotlyData: Plotly.Data[] = [{
        x: unpackXyz(data, "x"),
        y: unpackXyz(data, "y"),
        z: unpackXyz(data, "z"),
        mode: "markers",
        marker: {
            size: 1.5,
        },
        type: "scatter3d",
    }];
    return (
        <Plot
            data={plotlyData}
            layout={layout}
        />
    )
}


function unpackXyz(data: XYZ[], axis: "x" | "y" | "z"): number[]{
    return data.map((rec:XYZ) => rec[axis])
}

