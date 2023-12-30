// ScrollToTopButton.js
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconButton
      id="scrollToTopBtn"
      style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '20px', backgroundColor:"#90C53B",borderRadius:20}}
      color="primary"
     
      
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;
