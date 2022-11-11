import "./App.css";
import { useState } from "react";
import { data } from "./dataTop10";
import { data1 } from "./dataBottom10";

function App() {
  const [top10] = useState(data);
  const [bottom10] = useState(data1);
  const [isShown, setIsShown] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleClick1 = (event) => {
    setIsShow((current) => !current);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>YouTube Music Video History</h2>
          <button onClick={handleClick}>Top 10</button>

          {isShown && (
            <div>
              {top10 &&
                top10.map((item, idx) => {
                  return (
                    <div key={item.subtitles[0].name}>
                      {idx + 1}. {item.title} By {item.subtitles[0].name}
                    </div>
                  );
                })}
            </div>
          )}

          {isShown && <Box />}
        </div>

        <p></p>
        <div>
          <button onClick={handleClick1}>Bottom 10</button>

          {isShow && (
            <div>
              {bottom10 &&
                bottom10.map((item, idx) => {
                  return (
                    <div key={item.subtitles[0].name}>
                      {idx + 1}. {item.title} By {item.subtitles[0].name}
                    </div>
                  );
                })}
            </div>
          )}

          {isShow && <Box />}
        </div>
      </header>
    </div>
  );
}
function Box() {
  return (
    <div>
    </div>
  );
}
export default App;
