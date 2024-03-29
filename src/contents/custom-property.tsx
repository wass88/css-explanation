import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { TopicHeader } from "@/component/header";

export function CustomProperty({}) {
  const [styles, setStyles] = useState(
    `.holder { --color: black }
.box { background: var(--color); } }
.box2 { --color: white }`
  );
  return (
    <>
      <TopicHeader
        anchor="custom-property"
        name="カスタムプロパティ"
        desc="cascade"
      />
      <div className="demo">
        <div>
          <div className="css-values">
            <p>--プロパティ名: 任意</p>
            <p>
              <b>任意</b> カスケードされる独自属性を定義
            </p>
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
