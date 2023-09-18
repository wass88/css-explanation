import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";

export function FontPalette({}) {
  const [styles, setStyles] = useState(
    `.box1 { font-palette: normal; }
.box2 { font-palette: --pink; }`
  );
  const [paletteStyles, setPaletteStyles] = useState(
    `@font-palette-values --pink {
  font-family: nabla;
  base-palette: 1;
}`
  );
  return (
    <>
      <h3>
        <span className="css-name">font-palette: パレット</span>
        <span className="css-desc">cascade</span>
      </h3>
      <style>{paletteStyles}</style>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>パレット</b>: COLRv1フォントの色を指定 (initial=normal)
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
          <h4>
            <span className="css-topic">@font-palette-value</span>
          </h4>
          <div className="css-values">
            <ul>
              <li>font-family: フォントファミリ</li>
              <li>base-palette: パレット番号</li>
              <li>override-colors: 色を上書きする</li>
            </ul>
          </div>
          <TextArea
            onInput={(e: any) => {
              setPaletteStyles(e.target.value);
            }}
            defaultValue={paletteStyles}
          ></TextArea>
        </div>
        <root.div className="demo-box">
          <p className={`box box1`}>Hello</p>
          <p className={`box box2`}>World</p>
          <style>{`
            .box {
                font-family: "Nabla";
                font-size: 3rem;
                line-height: 1rem;
            }
            ${styles}
          `}</style>
        </root.div>
      </div>
    </>
  );
}
