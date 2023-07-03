import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

export function ShapeOutside({}) {
  const [styles, setStyles] = useState(
    `.left {
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}
.right {
  float: right;
  shape-outside: polygon(0 0, 100% 0, 100% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}
`
  );
  return (
    <>
      <h3>
        <span className="css-name">shape-outside: Type</span>
        <span className="css-desc">non-cascade</span>
      </h3>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>Type</b> インライン要素が回り込む形 (initial=none)
              </li>
              <li>none なし</li>
              <li>
                &lt;shape-box&gt; margin-box, border-box, padding-box,
                content-box
              </li>
              <li>&lt;basic-shape&gt; 形</li>
              <li>&lt;image&gt; アルファチャネルのある画像</li>
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
          <div className="box">
            <div className="left"> </div>
            <div className="right"> </div>
            <p>{LoremIpsum}</p>
          </div>
          <style>{`
            .box {
                width: 100%;
                height: 15em;
            }
            .box + .box {
                margin-top: 1rem;
            }
            .left, .right {
              --ease: cubic-bezier(0.175, 0.885, 0.32, 1.275);
              background: #000;
              width: 3rem;
              height: 100%;
              transition: shape-outside 1s var(--ease), clip-path 1s var(--ease);
              background: white;
            }
            p {
              background: black;
              color: white;
            }
            .box:hover .left {
              shape-outside: polygon(0 0, 100% 0, 0 100%);
              clip-path: polygon(0 0, 100% 0, 0 100%);
              transition: shape-outside 1s var(--ease), clip-path 1s var(--ease);
            }
            .box:hover .right {
              shape-outside: polygon(0 100%, 100% 0, 100% 100%);
              clip-path: polygon(0 100%, 100% 0, 100% 100%);
              transition: shape-outside 1s var(--ease), clip-path 1s var(--ease);
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
