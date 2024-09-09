import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import res from "../../../src/assets/images/res.jpeg";

// Remove custom arrow components
// const ArrowButton = styled(Box)(({ direction }) => ({
//   position: "absolute",
//   top: "50%",
//   transform: "translateY(-50%)",
//   cursor: "pointer",
//   zIndex: 1,
//   [direction]: "-40px",
// }));

// const PrevArrow = ({ onClick }) => (
//   <ArrowButton direction="left" onClick={onClick}>
//     <IconButton
//       sx={{
//         color: "white",
//         fontWeight: "bold",
//         background: "black",
//         "&:hover": {
//           background: "black",
//         },
//         boxShadow: "0px 4px 10px black",
//       }}
//     >
//       <ArrowBackIosIcon />
//     </IconButton>
//   </ArrowButton>
// );

// const NextArrow = ({ onClick }) => (
//   <ArrowButton direction="right" onClick={onClick}>
//     <IconButton
//       sx={{
//         color: "white",
//         background: "black",
//         "&:hover": {
//           background: "black",
//         },
//         boxShadow: "0px 4px 10px black",
//       }}
//     >
//       <ArrowForwardIosIcon />
//     </IconButton>
//   </ArrowButton>
// );

function CardSlider() {
  const cards = [
    {
      name: "The Gourmet Kitchen",
      image: res,
    },
    {
      name: "Sushi World",
      image: res,
    },
    {
      name: "Pasta Palace",
      image: res,
    },
    {
      name: "Bistro Delight",
      image: res,
    },
    {
      name: "Urban Bites",
      image: res,
    },
  ];

  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // Remove arrow buttons from settings
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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

  const handleRedirect = () => {
    navigate("/restaurantname");
  };

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
          sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.5rem",
              md: "1.7rem",
              lg: "2rem",
            },
            // pl: {
            //   xs: 2,
            //   lg: 8,
            // },
            pb: {
              xs: 0.8,
              sm: 1,
              md: 2,
              lg: 3,
            },
            // textAlign: "center",
            marginBottom: "1rem",
            // bgcolor:"red"
          }}
        >
          Foodie Favorites restaurants
        </Typography>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box
              onClick={handleRedirect}
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
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  {/* Text overlay at the bottom */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.6)", // Slightly dark background for better text visibility
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
