
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

// Custom styles for the arrow buttons
const ArrowButton = styled(Box)(({ direction, isHidden }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: direction === "left" ? "-40px" : "-23px", // Adjust this value to move the button further from the card
  display: isHidden ? "none" : "block", // Hide the button if it's at the edge
}));

function CardSlider() {
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  const cards = [
    {
      title: "Card 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 1",
    },
    {
      title: "Card 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 2",
    },
    {
      title: "Card 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 3",
    },
    {
      title: "Card 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 4",
    },
    {
      title: "Card 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 5",
    },
  ];

  const settings = {
    dots: false,
    infinite: false, // Set to false to show/hide arrows at edges
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Scrolls one card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <ArrowButton direction="right" isHidden={hideRightArrow}>
        <IconButton
          sx={{
            color: "white",
            background: "#D32F2F", // Initial background color

            "&:hover": {
              background: "#D32F2F", // Background color on hover
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </ArrowButton>
    ),
    prevArrow: (
      <ArrowButton direction="left" isHidden={hideLeftArrow}>
        <IconButton
          sx={{
            color: "white",
            background: "#D32F2F", // Initial background color
            "&:hover": {
              background: "#D32F2F", // Background color on hover
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </ArrowButton>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
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
    beforeChange: (current, next) => {
      // Hide the left arrow when on the first slide
      setHideLeftArrow(next === 0);
      // Hide the right arrow when on the last slide
      setHideRightArrow(next === cards.length - settings.slidesToShow);
    },
  };

  return (
    <Box sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.4rem",
            sm: "1.5rem",
            md: "1.7rem",
            lg: "2rem",
          },
          pl: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
          },
          pb: {
            xs: 0.8,
            sm: 1,
            md: 2,
            lg: 3,
          },
          fontWeight: "bold",
        }}
      >
        Popular restaurants
      </Typography>

      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 0",
          position: "relative",
        }}
      >
        <Slider {...settings} sx={{ background: "red" }}>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                padding: "0 5px", // Adjusted padding to include space around each card
              }}
            >
              <Card
                sx={{
                  width: "calc(100% - 10px)", // Adjusted width to account for the padding on both sides
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    sx={{
                      mt: "5px",
                      mb: 2,
                      backgroundColor: "#D32F2F", // Set button background color
                      color: "white", // Set button text color
                      "&:hover": {
                        backgroundColor: "#B71C1C", // Darker shade for hover effect
                      },
                    }}
                  >
                    Order now
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default CardSlider;
