import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        console.log(respData);
        setData(respData.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem",
      }}
    >
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        data.map((produto) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={produto.id}
            style={{ marginBottom: "2rem" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={produto.thumbnail}
              alt={produto.brand}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {produto.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {produto.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartilhar</Button>
              <Button size="small">Conheça mais</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
};

export default FetchProducts;
