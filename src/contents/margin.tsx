import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function Margin({}) {
  const [styles, setStyles] = useState(
    `.box1{ margin: 1em 2em 3em 4em }
.box2{ margin: 3em auto;
       width: 80%; }
.box3{ margin: -1em -1em 1em }`
  );
  return (
    <>
      <Header name="margin" value="同次余白指定" desc="non-cascade"></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>4値: 上　右　下　左</li>
              <li>3値: 上　左右　下</li>
              <li>2値: 上下　左右</li>
              <li>1値: 上下左右</li>
              <li>長さ: 必要とする余白の大きさ (initial: 0)</li>
              <li>パーセンテージ: 包含に対する幅</li>
              <li>
                auto:{" "}
                <a href="https://www.w3.org/TR/CSS22/visudet.html#the-width-property#Computing_widths_and_margins">
                  均等に分配される
                </a>
              </li>
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
            <div className={`box box2`}></div>
            <div className={`box box3`}></div>
          </div>
          <style>{`
            .holder {
              width: 100%;
              border: 2px solid black;
            }
            :where(.box) {
              height: 3rem;
              border: 2px solid black;
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
