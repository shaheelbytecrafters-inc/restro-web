import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurants } from "../redux/restaurantSlice/Allrestaurant";
import RestaurantCard from "../card/RestaurantCard";

const HomePageCardCalling = () => {
   const dispatch = useDispatch();
   const { restaurants, status, error } = useSelector(
     (state) => state.restaurants
   );
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/foodDetails");
  };
    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchRestaurants());
      }
    }, [dispatch, status]);

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (status === "failed") {
      return <div>Error: {error}</div>;
    }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          textAlign: "Left",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "bold",
          marginBlock: "2rem",
        }}
      >
        MealMate
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4,1fr)",
            },
            width: "90%",
            justifyItems: "center",
          }}
        >
          {restaurants.slice(0, 8).map((restaurant) => (
            <RestaurantCard
              key={restaurant.restaurantId}
              restaurant={restaurant}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginBlock: "20px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fe0604 ",

            color: "white",
            "&:hover": {
              backgroundColor: " #fe0604",
            },
            fontSize: "1.3rem",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={handleShowMoreClick}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default HomePageCardCalling;
