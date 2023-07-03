import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";

export function RubyPosition({}) {
  const [styles, setStyles] = useState(
    `.ruby1 { ruby-position: under; }
.ruby2 { ruby-position: over; }
`
  );
  return (
    <>
      <h3>
        <span className="css-name">ruby-position: Type</span>
        <span className="css-desc">cascade</span>
      </h3>
      <div className="demo">
        <div>
          <div className="css-values">
            <ul>
              <li>
                <b>Type</b>: ふりがなの場所 (initial=alternate)
              </li>
              <li>over: ルビを上側に表示する。</li>
              <li>under: ルビを下側に表示する。</li>
              <li>alternate: 上下交互に表示する。(未実装)</li>
              <li>inter-character: ルビを文字の間に表示する。(未実装)</li>
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
            <p>
              <ruby className="ruby1">
                <ruby className="ruby2">
                  枢機<rt>すうき</rt>へ<rt></rt>還<rt>かえ</rt>す<rt></rt>光
                  <rt>ひかり</rt>
                </ruby>
                <rt>スパラグモス</rt>
              </ruby>
            </p>
          </div>
          <style>{`
            p {
              border: 0;
              padding: 0;
              font-size: 1.5rem;
            }
            .box {
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
