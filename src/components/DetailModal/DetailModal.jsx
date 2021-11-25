import React from "react";
import { Modal, Box, Typography, CardMedia } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import GrainIcon from "@mui/icons-material/Grain";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  alignItems: "center",
};

const DetailModal = ({ show, setShow, data }) => {
  const { temperature, wind_speed, precip } = data.current;
  const WeatherIcon = data.current.weather_icons[0];
  return (
    <>
      {data ? (
        <>
          <Modal
            open={show}
            onClose={setShow}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div style={{ display: "flex" }}>
                <ThermostatIcon />
                <Typography variant="h6" component="div">
                  {temperature} °C
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  height="194"
                  image={WeatherIcon}
                  alt="Paella dish"
                  style={{ height: 40, width: 40 }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <AirIcon />
                <Typography variant="h6" component="div">
                  {wind_speed} km/hr
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <GrainIcon />
                <Typography variant="h6" component="div">
                  {precip} precipitation
                </Typography>
              </div>
            </Box>
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailModal;
