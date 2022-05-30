import axios from "axios";
import { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState("");

  // async와 await 이용
  const onClick = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
    console.log(response.data.articles[1]);
    setNews(response.data.articles[1]);
  };

  // useEffect 자체에 async 붙일수 없음, 안에 함수를 만들어 붙여줌
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
        console.log(response.data.articles[1]);
        setNews(response.data.articles[1]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>뉴스리스트입니다</h1>
      <button onClick={onClick}>누르세요</button>
      <a href={news.url}>
        <img src={news.urlToImage} alt="" />
      </a>
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
};
export default NewsList;
