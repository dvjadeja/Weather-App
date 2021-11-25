import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DetailModal from "../DetailModal/DetailModal";

const WeatherDetailCard = ({ data }) => {
  const [show, setShow] = useState(false);
  //   const { country, name, lat, lon } = data.location;
  return (
    <>
      {data ? (
        <>
          <DetailModal show={show} setShow={() => setShow(false)} data={data} />
          <Card
            sx={{ maxWidth: 350 }}
            style={{ margin: 10, textAlign: "left" }}
          >
            <CardContent>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                {data.location.country}
              </Typography>
              <Typography variant="h5" component="div">
                {data.location.name}
              </Typography>
              <Typography variant="h5" component="div">
                Population
              </Typography>
              <Typography variant="h5" component="div">
                {data.location.lat} / {data.location.lon}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="https://picsum.photos/200"
                alt="Paella dish"
                style={{ height: 40, width: 40 }}
              />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setShow(true)}>
                See More Details
              </Button>
            </CardActions>
          </Card>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default WeatherDetailCard;
