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
  });

  return (
    <HTMLFlipBook
      width={450}
      height={636}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
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
                objectFit: 'contain', // Changed from 'cover' to 'contain' or 'fill' based on request? 
                // User said "No cropped images" -> 'contain' (might leave space) or 'fill' (might stretch).
                // User said "no margin". If aspect ratio matches, cover is fine. 
                // Given the instruction "Add all the images... No cropped images... no margin", 
                // usually 'fill' stretches to fit, avoiding crop and margin.
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