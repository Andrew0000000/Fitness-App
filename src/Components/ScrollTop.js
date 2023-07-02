import React, { useState, useEffect } from 'react';
import { Box, Fade, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fade in={showScroll}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <IconButton aria-label="scroll to top">
          <KeyboardArrowUpIcon style={{ color: '#212121', backgroundColor: '#ae9a60', borderRadius: '8px', width: '30px', height: '30px' }}/>
        </IconButton>
      </Box>
    </Fade>
  );
};

export default ScrollTop;
