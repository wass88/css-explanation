import { useState } from "react";
import { TextArea } from "../component/textarea";
import root from "react-shadow";
import { Header } from "@/component/header";

export function RubyPosition({}) {
  const [styles, setStyles] = useState(
    `.ruby1 { ruby-position: under; }
.ruby2 { ruby-position: over; }
`
  );
  return (
    <>
      <Header name="ruby-position" value="位置" desc="cascade"></Header>
      <div className="demo">
        <div>
          <div className="css-values">
            <p>
              <b>位置</b>: ふりがなの場所
            </p>
            <ul>
              <li>over: ルビを上側に表示する。</li>
              <li>under: ルビを下側に表示する。</li>
              <li>alternate: 上下交互に表示する。(未実装) (初期値)</li>
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
