import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
//import Grid from "@mui/material/Grid"; // Grid version 1
//import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

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
    <Grid container spacing={2} xs={12}>
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        data.map((produto) => (
          <Grid
            item
            sx={2}
            xs={2}
            md={4}
            lg={4}
            display="flex"
            alignItems="stretch"
          >
            <Card
              key={produto.id}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "stretch",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
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
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FetchProducts;

/*
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
          <Grid2 container spacing={2}>
            <Card
              sx={{ maxWidth: 345 }}
              key={produto.id}
              style={{ marginBottom: "2rem" }}
            >
              <Grid2 item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  height="140"
                  image={produto.thumbnail}
                  alt={produto.brand}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {produto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {produto.description}
                  </Typography>
                </CardContent>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <CardActions>
                  <Button size="small">Compartilhar</Button>
                  <Button size="small">Conheça mais</Button>
                </CardActions>
              </Grid2>
            </Card>
          </Grid2>
        ))
      )}
    </div>
  );
};

export default FetchProducts;
*/
