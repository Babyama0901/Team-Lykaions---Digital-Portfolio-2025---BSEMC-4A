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

  // State for book dimensions and mobile status
  const [bookDimensions, setBookDimensions] = useState({ width: 450, height: 636 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const mobile = screenWidth < 768;

      setIsMobile(mobile);

      // Base dimensions (desktop)
      let newWidth = 450;
      let newHeight = 636;

      // Mobile adjustment
      if (mobile) {
        // Calculate max available width with conservative padding
        const maxWidth = screenWidth - 40; // 20px padding on each side
        // Maintain aspect ratio approx 1:1.414 (A4)
        const aspectRatio = 450 / 636;

        newWidth = maxWidth;
        newHeight = newWidth / aspectRatio;

        // Check if height fits, if not constrain by height
        // Mobile view often has browser bars, so we need more buffer
        const maxHeight = screenHeight - 140; // Space for button (top) + margins + browser bars
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