import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import res from "../../../src/assets/images/res.jpeg";
import { useDispatch, useSelector } from "react-redux";
import CardShimmer from "./CardShimmer";
import { useEffect } from "react";
import { fetchRestaurants } from "../../redux/restaurantSlice/Allrestaurant";
function CardSlider() {
  const dispatch = useDispatch();
  const { restaurants, isLoading } = useSelector((state) => state.restaurants);
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleRedirect = (id) => {
    navigate(`/specificDetails/${id}`);
  };

  if (isLoading) {
    return <CardShimmer />;
  }

  return (
    <Box
      sx={{
        paddingTop: "1rem",
        paddingBottom: "50px",
        paddingInline: "50px",
        cursor: "pointer",
        color: "black",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          cursor: "pointer",
          // bgcolor:"red"
        }}
      >
        <Typography
          fontWeight="bold"
          fontFamily="Playwrite DE Grund, cursive"
          sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.5rem",
              md: "1.7rem",
              lg: "1.8rem",
            },
            pb: {
              xs: 0.8,
              sm: 1,
              md: 2,
              lg: 3,
            },
            marginBottom: "1rem",
          }}
        >
          Foodie Favorites restaurants
        </Typography>
        <Slider {...settings}>
          {restaurants.map((card, index) => (
            <Box
              onClick={() => handleRedirect(card.restaurantId)}
              key={index}
              sx={{
                padding: "0 5px",
                boxSizing: "border-box",
              }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "320px",
                    backgroundImage: `url(${res})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    border: "2px solid black",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                      padding: "8px 12px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      {card.name}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default CardSlider;
