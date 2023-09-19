import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

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
      <Header name="shape-outside" value="形" desc="non-cascade"></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>形</b> インライン要素が回り込む形 (initial=none)
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
