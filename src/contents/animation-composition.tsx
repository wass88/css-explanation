import { useRef, useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function AnimationComposition({}) {
  const [anime, setAnime] = useState("anime");
  const restart = () => {
    setAnime("");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnime("anime");
      });
    });
  };
  const [styles, setStyles] = useState(
    `.box1 { animation-composition: replace; }
.box2 { animation-composition: accumulate; }
.box3 { animation-composition: add; }
.box { transform: rotate(45deg); }
@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(10rem); }
}`
  );
  return (
    <>
      <Header
        name="animation-composition"
        value="合成方法"
        desc="non-cascade"
      ></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <p>
              <b>Type</b> 属性の合成方法
            </p>
            <ul>
              <li>replace 属性を置き換えてアニメーションする (初期値)</li>
              <li>accumulate 属性に加えてアニメーションする</li>
              <li>add 属性を合成してアニメーションする</li>
            </ul>
          </div>
          <TextArea
            onInput={(e: any) => {
              setStyles(e.target.value);
              restart();
            }}
            defaultValue={styles}
          ></TextArea>
        </div>
        <root.div className="demo-box" onMouseEnter={() => restart()}>
          <div className={`box box1 ${anime}`}></div>
          <div className={`box box2 ${anime}`}></div>
          <div className={`box box3 ${anime}`}></div>

          <style>{`
            :where(.box) {
              border: 2px solid black;
              width: 3rem;
              height: 3rem;
            }
            :where(.anime) {
              animation: 3s move ease-in-out both infinite;
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
