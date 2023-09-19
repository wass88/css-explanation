import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function BoxSizing({}) {
  const [styles, setStyles] = useState(
    `.box1{ box-sizing: content-box; }
.box2{ box-sizing: border-box; }
.box { width: 100% }`
  );
  return (
    <>
      <Header name="box-sizing" value="種類" desc="non-cascade"></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>Type</b> 大きさ指定に境界線を含める (initial=content-box)
              </li>
              <li>content-box: 大きさ指定に境界線を含める</li>
              <li>border-box: 大きさ指定に境界線を含めない</li>
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
          </div>
          <style>{`
            .holder {
              width: 8rem;
              border: 2px solid black;
            }
            :where(.box) {
              height: 3rem;
              border: 0.5rem double black;
            }
            .box + .box {
              margin-top: 1rem;
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
