import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md focus:outline-none transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <span role="img" aria-label="Light mode">🌞</span>
            ) : (
                <span role="img" aria-label="Dark mode">🌜</span>
            )}
        </button>
    );
};

export default ThemeToggle;