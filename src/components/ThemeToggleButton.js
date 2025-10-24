// src/components/ThemeToggleButton.js
import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full text-gray-400 hover:text-green-500 hover:bg-green-900/20 transition-all duration-300 hover:glow-green" aria-label="Toggle theme">
      <Sun className="h-5 w-5 hidden dark:block" />
      <Moon className="h-5 w-5 block dark:hidden" />
    </button>
  );
};

export default ThemeToggleButton;
