import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import RestaunrantOrderOnlineCard from './RestaurantOrderOnlineCard'

const RestaunrantOrderOnline = () => {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display={{ xs: 'none', sm: 'flex' }} gap={3}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '200px', borderRight: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation="vertical">
            <Tab label="Today'Exclusive Dishes(3)" {...a11yProps(0)} sx={{ textTransform: 'none', alignItems: 'flex-start', paddingRight: '45px' }} />
            <Tab label="Meal for One" {...a11yProps(1)} sx={{ textTransform: 'none', alignItems: 'flex-start' }} />
            <Tab label="Dimusm" {...a11yProps(2)} sx={{ textTransform: 'none', alignItems: 'flex-start' }} />
            <Tab label="Ramen" {...a11yProps(3)} sx={{ textTransform: 'none', alignItems: 'flex-start' }} />
            <Tab label="Baos" {...a11yProps(4)} sx={{ textTransform: 'none', alignItems: 'flex-start' }} />
            <Tab label="Rice & Noodles" {...a11yProps(5)} sx={{ textTransform: 'none', alignItems: 'flex-start' }} />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%', mx: '12px'}}>
          <CustomTabPanel value={value} index={0}>
            <RestaunrantOrderOnlineCard/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <RestaunrantOrderOnlineCard/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <RestaunrantOrderOnlineCard/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <RestaunrantOrderOnlineCard/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <RestaunrantOrderOnlineCard/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <RestaunrantOrderOnlineCard/>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>

  )
}

export default RestaunrantOrderOnline;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ my: '10px' }} >{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}