import React from 'react';
import { Box, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import MainSearchBar from '../Searchbar/MainSearchBar';
import HeroImage from '../../../public/HeroImage.jpeg'

const Hero = () => {
  return (
    <Box
      sx={{

        backgroundImage: 'url(/826922.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '573px'

        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "60vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          marginTop: 1,
        }}
      >
        <Navbar />
      </Box>
      <Box

        width="100%"
        height="100%"
        position="relative"
      >
        <Box
          sx={{
            position: 'absolute',
            flexDirection: 'column',
            display: 'flex',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 40, sm: 70 },
              fontFamily: 'poppins, sans-serif',
              color: 'white',
              fontStyle: 'italic',
              fontWeight: '900',
            }}
          >Lazeez</Typography>
          <Typography
            sx={{
              fontFamily: 'poppins, sans-serif',
              color: 'white',
              fontSize: { xs: 25, sm: 35 },
              fontWeight: '300'
            }}
          >Discover the best food & drinks in Delhi NCR</Typography>          
          <MainSearchBar />
        </Box>

        sx={{
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <MainSearchBar />

      </Box>
    </Box>
  );
};

export default Hero;
