import React, { useEffect, useRef, memo } from 'react';

/**
 * MatrixRain Component
 * Renders a Matrix-style falling code effect using HTML5 Canvas
 * Optimized for performance with requestAnimationFrame and visibility detection
 */
const MatrixRain = memo(() => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const columnsRef = useRef([]);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size to full window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    // Matrix characters - mix of katakana, latin, numbers, and symbols
    const chars = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]()=/\\|!@#$%^&*';
    const fontSize = 14;
    const speedMin = 0.3;
    const speedMax = 1.2;

    // Initialize columns
    const initColumns = () => {
      const columnCount = Math.floor(canvas.width / fontSize);
      columnsRef.current = Array(columnCount).fill(0).map(() => ({
        y: Math.random() * canvas.height,
        speed: speedMin + Math.random() * (speedMax - speedMin),
        // Randomize initial positions for staggered effect
        offset: Math.random() * 100
      }));
    };

    setCanvasSize();

    // Animation loop
    const animate = () => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Semi-transparent black overlay for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px "Courier New", monospace`;

      // Draw characters
      columnsRef.current.forEach((column, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        // Gradient effect - brighter at the bottom
        const isHead = Math.random() > 0.975;
        if (isHead) {
          // Bright white head
          ctx.fillStyle = '#ffffff';
        } else {
          // Green tail with varying brightness
          const brightness = Math.random() * 0.5 + 0.5;
          ctx.fillStyle = `rgba(34, 197, 94, ${brightness})`;
        }

        ctx.fillText(char, x, column.y);

        // Move column down
        column.y += column.speed * fontSize;

        // Reset column when it goes off screen
        if (column.y > canvas.height && Math.random() > 0.975) {
          column.y = 0;
          column.speed = speedMin + Math.random() * (speedMax - speedMin);
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle window resize with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setCanvasSize, 250);
    };

    window.addEventListener('resize', handleResize);

    // Visibility observer for performance optimization
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        backgroundColor: '#000000',
      }}
      aria-hidden="true"
    />
  );
});

MatrixRain.displayName = 'MatrixRain';

export default MatrixRain;
