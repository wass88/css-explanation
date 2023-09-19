import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed`;

export function Orphans({}) {
  const [styles, setStyles] = useState(
    `.box1 { orphans: 1; }
.box2 { orphans: 3; }
`
  );
  return (
    <>
      <Header name="orphans" value="数" desc="non-cascade"></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <p>
              <b>数</b> 要素分断時に前へ送る最小必要行数 (初期値 2)
            </p>
          </div>
          <TextArea
            onInput={(e: any) => {
              setStyles(e.target.value);
            }}
            defaultValue={styles}
          ></TextArea>
        </div>
        <root.div className="demo-box wide">
          <div className="box box1">
            <p className="text">{LoremIpsum}</p>
            <p className="text">{LoremIpsum}</p>
            <p className="text">{LoremIpsum}</p>
          </div>
          <div className="box box2">
            <p className="text">{LoremIpsum}</p>
            <p className="text">{LoremIpsum}</p>
            <p className="text">{LoremIpsum}</p>
          </div>
          <style>{`
            .box {
                border: 2px solid black;
                column-gap: 1em;
                padding: 1em;
                column-fill: auto;
                columns: 3;
                height: 13rem;
            }
            .box + .box {
                margin-top: 1rem;
            }
            p {
                margin: 0 0 1lh 0;
                border: 2px solid black;
                padding: 1em;
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
