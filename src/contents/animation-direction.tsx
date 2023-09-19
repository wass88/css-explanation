import { useRef, useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function AnimationDirection({}) {
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
    `.box1 { animation-direction: normal; }
.box2 { animation-direction: reverse; }
.box3 { animation-direction: alternate; }
.box4 { animation-direction: alternate-reverse; }`
  );
  return (
    <>
      <Header
        name="animation-direction"
        value="向き"
        desc="non-cascade"
      ></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <span>
              <b>向き</b> アニメーションの向き
            </span>
            <ul>
              <li>normal 通常 (初期値)</li>
              <li>reverse 逆向き</li>
              <li>alternate 交互に</li>
              <li>alternate-reverse 交互に逆向き</li>
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
          <div className={`box box4 ${anime}`}></div>
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
            @keyframes move {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(10rem);
              }
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
