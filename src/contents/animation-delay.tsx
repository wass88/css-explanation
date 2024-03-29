import { useRef, useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function AnimationDelay({}) {
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
    `.box1 { animation-delay: 0s; }
.box2 { animation-delay: 1s; }
.box3 { animation-delay: -1s; }`
  );
  return (
    <>
      <Header name="animation-delay" value="時間" desc="non-cascade"></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <p>
              <b>時間</b> アニメーションを遅らせる時間 (初期値 0s)
            </p>
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
              animation: 3s move ease-in-out both;
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
