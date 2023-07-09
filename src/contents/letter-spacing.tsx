import { useRef, useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";

export function LetterSpacing({}) {
  const [styles, setStyles] = useState(
    `.box1 { letter-spacing: normal; }
.box2 { letter-spacing: 5px; }
.box3 { letter-spacing: -3px; }
.box4::first-letter {
  letter-spacing: -2px;
  font-size: 200%;
  font-weight: bold;
}`
  );
  return (
    <>
      <h3>
        <span className="css-name">letter-spacing: Length</span>
        <span className="css-desc">cascade</span>
      </h3>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>Length</b> 文字の間の隙間の大きさ (initial=normal)
              </li>
              <li>normal: デフォルト</li>
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
          <p className={`box box1`}>Hello World</p>
          <p className={`box box2`}>Hello World</p>
          <p className={`box box3`}>Hello World</p>
          <p className={`box box4`}>Hello World</p>
          <style>{`
            :where(.box) {
              width: 100%;
              margin: 0;
              padding: 0;
              font-size: 1.5rem;
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
