'use client';

import React, { useEffect } from 'react';

export default function ErrorComponent({ error, reset }) {
  // Use useEffect hook inside the component function
  useEffect(() => {
    console.log(error);
  }, [error]); // Ensure dependencies are properly defined in the dependency array

  return (
    <div className='text-center mt-20'>
      <h1>Something went wrong. Please try again</h1>
      <button className='hover:text-amber-600' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
