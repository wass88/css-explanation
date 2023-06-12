import { useRef, useState } from "react";

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
      <h3>
        <span className="css-name">animation-delay: Time</span>
        <span className="css-desc">non-cascade</span>
      </h3>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>Time: アニメーションを遅らせる時間 (initial=0s)</li>
            </ul>
          </div>
          <textarea
            onInput={(e) => {
              setStyles(e.target.value);
              restart();
            }}
            defaultValue={styles}
          ></textarea>
        </div>
        <div className="demo-box" onMouseEnter={() => restart()}>
          <div className={`box box1 ${anime}`}></div>
          <div className={`box box2 ${anime}`}></div>
          <div className={`box box3 ${anime}`}></div>
          <style jsx>{`
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
        </div>
      </div>
    </>
  );
}
