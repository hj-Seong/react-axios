import axios from "axios";

const NewsList = () => {
  // async와 await 이용
  const onClick = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
    console.log(response);
  };

  return (
    <div>
      <h1>뉴스리스트입니다</h1>
      <button onClick={onClick}>누르세요</button>
    </div>
  );
};
export default NewsList;
