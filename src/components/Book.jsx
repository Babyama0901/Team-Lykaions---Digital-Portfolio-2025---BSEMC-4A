import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";

function Book() {
  // Dynamically import all images from the portfolio folder
  const imagesGlob = import.meta.glob('../Seminars and Field Study - Portfolio/*.png', { eager: true });

  // Convert module object to array of values (the image paths/modules)
  // import.meta.glob with eager: true returns objects like { default: "/src/.../img.png" }
  const images = Object.values(imagesGlob).map(mod => mod.default);

  // Natural sort function to handle "Page 1", "Page 2", "Page 10" correctly
  const sortedImages = images.sort((a, b) => {
    // Extract numbers from filenames for comparison
    // Filenames are part of the URL/path, need to rely on typical structure or just standard natural sort
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  }).slice(0, 24);

  // console.log("Book: sortedImages", sortedImages);

  // State for book dimensions
  const [bookDimensions, setBookDimensions] = useState({ width: 450, height: 636 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Base dimensions (desktop)
      let newWidth = 450;
      let newHeight = 636;

      // Mobile adjustment
      if (screenWidth < 768) {
        // Calculate max available width with some padding
        const maxWidth = screenWidth - 20; // 10px padding on each side
        // Maintain aspect ratio approx 1:1.414 (A4)
        const aspectRatio = 450 / 636;

        newWidth = maxWidth;
        newHeight = newWidth / aspectRatio;

        // Check if height fits, if not constrain by height
        const maxHeight = screenHeight - 100; // Space for button and margins
        if (newHeight > maxHeight) {
          newHeight = maxHeight;
          newWidth = newHeight * aspectRatio;
        }
      }

      setBookDimensions({ width: newWidth, height: newHeight });
    };

    // Initial calculation
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <HTMLFlipBook
      width={bookDimensions.width}
      height={bookDimensions.height}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
      usePortrait={isMobile}
    >
      {sortedImages.map((imgSrc, index) => (
        <div className="page" key={index}>
          <div className="page-content" style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
            <img
              src={imgSrc}
              alt={`Page ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill'
              }}
            />
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default Book