import { useRef, useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function BackgroundAttachment({}) {
  const [styles, setStyles] = useState(
    `.box1{ background-attachment: scroll; }
.box2{ background-attachment: local; }
.box3{ background-attachment: fixed; }
  `
  );
  return (
    <>
      <Header
        name="background-attachment"
        value="種類"
        desc="non-cascade"
      ></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <p>
              <b>種類</b> 背景をスクロールに追従させるか
            </p>
            <ul>
              <li>scroll スクロールで動かない (初期値)</li>
              <li>local スクロールで動く</li>
              <li>fixed 画面に固定される</li>
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
            <div className={`box box1`}>
              <div className="text">Scroll Down</div>
            </div>
            <div className={`box box2`}>
              <div className="text">Scroll Down</div>
            </div>
            <div className={`box box3`}>
              <div className="text">Scroll Down</div>
            </div>
          </div>
          <style>{`
            :where(.box) {
              border: 2px solid black;
              width: 100%;
              height: 3rem;
              background-image: 
                radial-gradient(white 19.2%, transparent 19.2%),
                radial-gradient(white 19.2%, transparent 19.2%);
              background-position: 0px 0px, 16px 16px;
              background-size: 32px 32px;
              background-color: black;
              overflow-y: scroll;
            }
            .box + .box {
              margin-top: 1rem;
            }
            .text {
              color: white;
              height: 300%;
              font-size: 1.5rem;
              font-weight: bold;
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
