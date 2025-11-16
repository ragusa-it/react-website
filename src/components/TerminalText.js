import React, { useState, useEffect, memo } from 'react';

/**
 * TerminalText Component
 * Simulates terminal typewriter effect with blinking cursor
 *
 * @param {string} text - The text to type out
 * @param {number} speed - Typing speed in milliseconds (default: 50)
 * @param {number} delay - Delay before starting in milliseconds (default: 0)
 * @param {string} className - Additional CSS classes
 * @param {boolean} showCursor - Show blinking cursor (default: true)
 * @param {function} onComplete - Callback when typing is complete
 */
const TerminalText = memo(({
  text = '',
  speed = 50,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete = null,
  prefix = '> '
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('');
    setIsComplete(false);

    let currentIndex = 0;
    let timeoutId;

    const startTyping = () => {
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
          if (onComplete) {
            onComplete();
          }
        }
      };

      timeoutId = setTimeout(typeNextChar, delay);
    };

    startTyping();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={`terminal-text ${className}`}>
      {prefix}{displayedText}
      {showCursor && (
        <span
          className={`terminal-cursor ${isComplete ? 'terminal-cursor-blink' : ''}`}
          aria-hidden="true"
        >
          █
        </span>
      )}
    </span>
  );
});

TerminalText.displayName = 'TerminalText';

export default TerminalText;
