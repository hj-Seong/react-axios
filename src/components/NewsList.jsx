import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

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
        console.log(response.data.articles);
        setNews(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  // map을 사용하기 위해서는 배열의 값이 비어있으면 오류가 나기 때문에
  // news 값이 없다면 return 값을 null을 준다
  if (!news) {
    return null;
  }

  return (
    <div>
      <h1>뉴스리스트입니다</h1>
      {news.map((n) => (
        <NewsItem key={n.url} news={n} />
      ))}
    </div>
  );
};
export default NewsList;
