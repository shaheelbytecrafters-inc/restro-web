import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const NightLifeBanner = () => {
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Box
        sx={{
          height: { xs: "28%", sm: "32%", md: "37%", lg: "42%" },
          marginInline: {
            xs: "1rem",
            sm: "2rem",
            md: "3rem",
            lg: "5rem",
            xl: "5rem",
          },
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUvhi-mYdaquhn2WlKlHKiP6VEQQ0izxhKg&s)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: { xs: "1rem", sm: "2rem" },
            color: "white",
            textAlign: { xs: "center", sm: "left" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "32px", lg: "36" },
              lineHeight: { xs: "32px", sm: "40px", md: "48px" },
              marginBottom: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            Get up to
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "30px", lg: "45px" },
              lineHeight: { xs: "22px", sm: "30px", md: "50px" },
              marginBottom: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            50% off on your online order
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon style={{ fontSize: "1.6rem" }} />}
            sx={{
              backgroundColor: "#0366D6",
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.2rem" },
              textTransform: "none",
              minWidth: { xs: "100px", sm: "120px", md: "140px", lg: "160px" },
            }}
          >
            Start now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NightLifeBanner;
