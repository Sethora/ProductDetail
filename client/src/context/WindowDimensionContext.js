import React, { createContext, useContext, useState, useEffect } from 'react';

export const WindowDimensionContext = createContext({
  windowHeight: null,
  windowWidth: null
});

export const WindowDimensionProvider = ({ children }) => {
  const [{ windowHeight, windowWidth }, setWindowSize] = useState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <WindowDimensionContext.Provider value={{ windowHeight, windowWidth }}>
      {children}
    </WindowDimensionContext.Provider>
  );
};