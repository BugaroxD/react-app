import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
/*
 {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/
const FetchNews = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      // retorna um valor
      .then((response) => response.json())
      // retorna
      .then((data) => {
        setNews(data);
        setIsLoading(false);
        console.log(news);
      });
  }, []);

  return (
    <div>
      <h1>Notícias</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        news.map((noticia) => (
          <div key={noticia.id}>
            <div>{noticia.title}</div>
            <div>{noticia.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchNews;

/*
 news.map((noticia) => (
          <div key={noticia.id}>
            <Typography variant="h2">{noticia.title}</Typography>
            <Typography variant="subtitle1">{noticia.body}</Typography>
          </div>
        ))
*/
