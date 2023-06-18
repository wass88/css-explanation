import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";

export function CustomProperty({}) {
  const [styles, setStyles] = useState(
    `.holder { --color: black }
.box { background: var(--color); } }
.box2 { --color: white }`
  );
  return (
    <>
      <h3>
        <span className="css-name">--名前: 任意</span>
        <span className="css-desc">cascade</span>
      </h3>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>任意</b> 継承される独自属性を定義
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
          </div>
          <style>{`
            .holder {
              width: fit-content;
              border: 2px solid black;
              padding: 1rem;
            }
            :where(.box) {
              height: 3rem;
              width: 3rem;
              border: 2px solid black;
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
