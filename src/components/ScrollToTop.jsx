import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        fontSize: '24px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '50%',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
      }}
      className='w-[57px] lg:mx-7 my-5 bg-[#DAC5A7] bg-opacity-5 border-[#DAC5A7] border-[1px] border-opacity-15'
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
