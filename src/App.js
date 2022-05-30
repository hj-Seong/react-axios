import axios from "axios";
import "./App.css";

function App() {
  // async와 await 이용
  const onClick = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
    console.log(response);
  };

  return (
    <div className="App">
      <button onClick={onClick}>누르세요</button>
    </div>
  );
}

export default App;
