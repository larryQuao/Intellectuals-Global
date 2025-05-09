import React, { useState, useEffect, useRef } from 'react';

const CountUpNumber = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const targetRef = useRef(null); // For Intersection Observer
  const [isInView, setIsInView] = useState(false);

  const numericEnd = parseInt(String(end).replace(/\D/g, ''), 10); // Extract numeric part

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);


  useEffect(() => {
    if (!isInView || isNaN(numericEnd)) {
      // If not in view or end is not a number, display the original 'end' value directly
      // This handles cases like "50+" correctly if animation is disabled or before it starts
      setCount(end); 
      return;
    }
    
    if (isNaN(numericEnd)) { // If numericEnd is still NaN after parsing
        setCount(end); // Display original string if no number found
        return;
    }


    const startTime = performance.now();

    const animateCount = (timestamp) => {
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentVal = Math.floor(percentage * numericEnd);
      
      setCount(currentVal);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        // Ensure the final display is exactly the 'end' prop string, including non-numeric parts
        setCount(end); 
      }
    };

    requestAnimationFrame(animateCount);
    
  }, [end, duration, isInView, numericEnd]); // Rerun if end, duration, or isInView changes

  // Determine if 'count' is the fully resolved 'end' prop (string) or the animated number
  const displayValue = (count === end || typeof count === 'string') ? count : `${prefix}${count}${typeof end === 'string' && !String(end).match(/^\d+$/) ? String(end).replace(/\d+/g, '') : suffix}`;


  return <span ref={targetRef}>{displayValue}</span>;
};

export default CountUpNumber;