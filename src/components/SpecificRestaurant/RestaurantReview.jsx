import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

const RestaurantReview = ({ open, handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    userName: "",
    rating: "",
    reviewText: "",
    image: null,
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Trigger the parent handleSubmit when form is submitted
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({
      userName: "",
      rating: "",
      reviewText: "",
      image: null,
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          p: 4,
          backgroundColor: "white",
          margin: "auto",
          mt: 10,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Submit Your Review
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="User Name"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 50,
                borderRadius: "12px", // Rounded corners
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "#ccc", // Soft border color
                },
                "&:hover fieldset": {
                  borderColor: "#bbb", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#bbb", // Brand color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#888888",
                "&.Mui-focused": {
                  color: "#FF5A5F",
                },
              },
              "& .MuiInputBase-input": {
                color: "#4A4A4A",
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset", // Ensures the background remains white
                WebkitTextFillColor: "#4A4A4A", // Ensures the text color stays consistent
              },
            }}
          />
          <TextField
            label="Rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 50,
                borderRadius: "12px", // Rounded corners
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "#ccc", // Soft border color
                },
                "&:hover fieldset": {
                  borderColor: "#bbb", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#bbb", // Brand color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#888888",
                "&.Mui-focused": {
                  color: "#FF5A5F",
                },
              },
              "& .MuiInputBase-input": {
                color: "#4A4A4A",
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset", // Ensures the background remains white
                WebkitTextFillColor: "#4A4A4A", // Ensures the text color stays consistent
              },
            }}
          />
          <TextField
            label="Review"
            name="reviewText"
            value={formData.reviewText}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 50,
                borderRadius: "12px", // Rounded corners
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "#ccc", // Soft border color
                },
                "&:hover fieldset": {
                  borderColor: "#bbb", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#bbb", // Brand color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#888888",
                "&.Mui-focused": {
                  color: "#FF5A5F",
                },
              },
              "& .MuiInputBase-input": {
                color: "#4A4A4A",
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset", // Ensures the background remains white
                WebkitTextFillColor: "#4A4A4A", // Ensures the text color stays consistent
              },
            }}
          />
          <Typography variant="body1" gutterBottom >
            Upload an image (optional):
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            style={{ marginBottom: "1rem" }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#fe0604",
                textTransform: "none",
                padding: "5px 15px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#fe0604",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default RestaurantReview;
