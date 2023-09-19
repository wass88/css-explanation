import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { TopicHeader } from "@/component/header";

function ColorCube({
  color,
}: {
  color: (z: number, y: number, x: number) => string;
}) {
  const colors = 5;
  return (
    <div className="colors">
      {[...Array(colors)].map((_, i) => (
        <div
          className="layer"
          key={i}
          style={{
            transform: `translate(${i * 0.5}rem, ${i * 0.5}rem)`,
          }}
        >
          {[...Array(colors)].map((_, j) =>
            [...Array(colors)].map((_, k) => (
              <div
                key={`${i}-${j}-${k}`}
                className="rect"
                style={{
                  background: color(
                    i / (colors - 1),
                    j / (colors - 1),
                    k / (colors - 1)
                  ),
                }}
              ></div>
            ))
          )}
        </div>
      ))}
      <style jsx>{`
        .rect {
          width: 1rem;
          height: 1rem;
        }
        .layer {
          display: flex;
          flex-wrap: wrap;
          width: 5rem;
          position: absolute;
        }
        .colors {
          position: relative;
          height: 8rem;
          width: 8rem;
        }
        .layer:hover ~ .layer {
          opacity: 0.01;
        }
      `}</style>
    </div>
  );
}
export function ColorFunction({}) {
  const [styles, setStyles] = useState(`.box { background: #000 }`);

  return (
    <>
      <TopicHeader anchor="color" name="色" desc="value"></TopicHeader>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>色名 red, black...</li>
              <li>transparent 透明</li>
              <li>currentcolor colorプロパティ</li>
              <li>Hex値 #123456</li>
              <li>rgb(赤 緑 青% or 0-255)</li>
              <li>hsl(色相-deg 彩度% 明度% / 0.5)</li>
              <li>hwb(色相-deg 白% 黒% / 0.5)</li>
              <li>lab(H% 緑赤-125~125 青黄25~125 / 0.5)</li>
              <li>lch(彩度% 色量0~150? 色相-deg / 0.5)</li>
              <li>oklab(H% 緑赤-0.4~0.4 青黄-0.4~0.4 / 0.5)</li>
              <li>oklch(彩度% 色量 色相-deg / 0.4)</li>
              <li>その他の色空間 color(色空間 値…)</li>
              <li>color-mix(in 色空間, 色 割合%, 色 割合%)</li>
              <li>color-mix(in 色空間 shorter hue, 色 割合%, 色 割合%)</li>
              <li>color-mix(in 色空間 longer hue, 色 割合%, 色 割合%)</li>
            </ul>
          </div>
          <TextArea
            onInput={(e: any) => {
              setStyles(e.target.value);
            }}
            defaultValue={styles}
          ></TextArea>
        </div>
        <root.div className="demo-box">
          <div className="holder">
            <div className={`box box1`}></div>
          </div>
          <style>{`
            :where(.box) {
              height: 3rem;
              width: 3rem;
              border: 2px solid black;
            }
            .box {
              margin: 1rem;
            }
            ${styles}
            `}</style>
        </root.div>
        <div className="tips">
          <div className="tips-container">
            <div className="rgb">
              <h4>RGB</h4>
              <ColorCube
                color={(x, y, z) => `rgb(${x * 100}% ${y * 100}% ${z * 100}%)`}
              />
            </div>
            <div className="hsl">
              <h4>HSL</h4>
              <ColorCube
                color={(x, y, z) => `hsl(${x}turn ${y * 100}% ${z * 100}%)`}
              />
            </div>
            <div className="hwb">
              <h4>HWB</h4>
              <ColorCube
                color={(x, y, z) => `hwb(${x}turn ${y * 100}% ${z * 100}%)`}
              />
            </div>
            <div className="lab">
              <h4>LAB</h4>
              <ColorCube
                color={(x, y, z) =>
                  `lab(${x * 100}% ${y * 250 - 125} ${z * 250 - 125})`
                }
              />
            </div>
            <div className="lch">
              <h4>LCH</h4>
              <ColorCube
                color={(x, y, z) => `lch(${x * 100}% ${y * 150} ${z}turn)`}
              />
            </div>
            <div className="oklab">
              <h4>OKLAB</h4>
              <ColorCube
                color={(x, y, z) =>
                  `oklab(${x * 100}% ${y * 0.8 - 0.4} ${z * 0.8 - 0.4})`
                }
              />
            </div>
            <div className="oklch">
              <h4>OKLCH</h4>
              <ColorCube
                color={(x, y, z) => `oklch(${x * 100}% ${y * 0.4} ${z}turn)`}
              />
            </div>
          </div>
          <style jsx>{`
            .tips {
              grid-column: 1/3;
            }
            .tips-container {
              background: #eee;
              padding: 2rem 2rem;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
