import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const ScrollIndicator: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 120;
      const isDark = document.documentElement.classList.contains('dark');
      setVisible(!atBottom && !isDark);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="scroll-indicator">
      <button
        onClick={handleClick}
        aria-label="Scroll down"
        className="chev"
      >
        <FiChevronDown className="icon w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollIndicator;
