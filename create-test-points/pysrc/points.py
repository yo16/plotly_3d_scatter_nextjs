import os
import sys
import numpy as np


# 三次元の点群を作成する
# x=0, y=0を水面とし、(5,5)に水滴を落としたときの、波紋状の曲面を作成する
# z(x, y) = A * sin(k*r - w*t)*exp(-a*r)
# r: 中心からの距離
#   = sqrt((x-x0)^2 + (y-y0)^2)
# A: 振幅
# k: 波数
# w: 角周波数
# a: 減衰係数
def create_points1():
    # 水滴の中心点
    x0, y0 = 0, 0
    z0 = 0

    # パラメータ
    A = 10
    k = 2*np.pi/10
    a = 0.1
    w = 1
    t = 0

    # 格子を作成
    xs = np.linspace(-10, 10, 21)
    ys = np.linspace(-10, 10, 21)

    point_cloud = []
    for x in xs:
        for y in ys:
            r = np.sqrt((x-x0)**2 + (y-y0)**2)
            z = z0 + A * np.sin(k*r - w*t)*np.exp(-a*r)
            # floatに変換し、格納
            point_cloud.append((float(x), float(y), float(z)))
    
    return point_cloud


if __name__ == "__main__":
    point_cloud = create_points1()
    print(point_cloud)
    # ファイルに保存
    with open("points.txt", "w") as f:
        for point in point_cloud:
            f.write(f"{point[0]},{point[1]},{point[2]}\n")
