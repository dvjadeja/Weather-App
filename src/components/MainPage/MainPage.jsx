import { AppBar, Button, InputBase, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import WeatherDetailCard from "../WeatherDetailCard/WeatherDetailCard";

import getData from "../../httpRequest/api";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const MainPage = () => {
  const [enteredString, setEnteredString] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [click, onClick] = useState(false);
  const onChangeInput = (e) => {
    setEnteredString(e.target.value);
  };

  const handleSearchData = async () => {
    await getData(enteredString).then((response) => {
      if (response !== null) {
        setWeatherData(response.data);
      }
      console.log(weatherData);
    });
    onClick(true);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              WEATHER APP
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="search"
                onChange={onChangeInput}
              ></StyledInputBase>
            </Search>
            {enteredString ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleSearchData}
              >
                Search
              </Button>
            ) : (
              <Button disabled color="success">
                Search
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {click && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <WeatherDetailCard data={weatherData} />
          </div>
        )}
      </Box>
    </>
  );
};

export default MainPage;
