import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed`;

export function ScrollSnapType({}) {
  const [styles, setStyles] = useState(
    `.box1 { scroll-snap-type: both mandatory; }
.box2 { scroll-snap-type: y proximity; }
`
  );
  return (
    <>
      <Header
        name="scroll-snap-type"
        value="軸 種類"
        desc="non-cascade"
      ></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>軸</b>: スクロールスナップする軸 (initial=none)
              </li>
              <li>x: 水平方向のみスナップ</li>
              <li>y: 垂直方向のみスナップ</li>
              <li>block: ブロック方向のみスナップ</li>
              <li>inline: インライン方向のみスナップ</li>
              <li>both: 両方向にスナップ</li>
              <li>
                <b>Type</b>: スクロールスナップの挙動
              </li>
              <li>mandatory: スナップ位置にスクロールする</li>
              <li>proximity: スナップ位置に近い場合にスクロールする</li>
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
          <div className="box box1">
            <div className="solid">
              <div className="inner">↓</div>
              <div className="inner"></div>
              <div className="inner"></div>
              <div className="inner">→</div>
              <div className="inner">→</div>
              <div className="inner">↓</div>
              <div className="inner"></div>
              <div className="inner"></div>
              <div className="inner">🎆</div>
            </div>
          </div>
          <div className="box box2">
            <div className="solid">
              <div className="inner">→</div>
              <div className="inner">↓</div>
              <div className="inner"></div>
              <div className="inner"></div>
              <div className="inner">↓</div>
              <div className="inner"></div>
              <div className="inner"></div>
              <div className="inner">→</div>
              <div className="inner">🍈</div>
            </div>
          </div>
          <style>{`
            .box {
                border: 2px solid black;
                width: 7rem;
                height: 7rem;
                overflow: auto;
            }
            .box + .box {
                margin-top: 1rem;
            }
            .solid {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                width: 17rem;
                padding: 1rem;
                background: white;
            }
            .inner {
                width: 5rem;
                height: 5rem;
                box-sizing: border-box;
                background: black;
                scroll-snap-align: center;
                text-align: center;
                font-size: 2rem;
                line-height: 5rem;
                font-weight: bold;
            }
            .inner:hover {
                color: white;
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
