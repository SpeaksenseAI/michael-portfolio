'use client';

import React, { useEffect, useState } from 'react';
import { Row, ToggleButton, useTheme } from '@once-ui-system/core';

/**
 * ThemeToggle Component
 * 
 * Provides a three-state theme toggle: system → light → dark → system
 * 
 * - System: Follows the user's system preference (light/dark mode)
 * - Light: Forces light mode regardless of system preference
 * - Dark: Forces dark mode regardless of system preference
 * 
 * The component automatically listens for system preference changes
 * and updates accordingly when in "system" mode.
 */
export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('system');

  useEffect(() => {
    setMounted(true);
    // Get the actual theme being used (system resolves to light/dark)
    const actualTheme = document.documentElement.getAttribute('data-theme') || 'light';
    // Get the saved theme preference (system, light, or dark)
    const savedTheme = localStorage.getItem('data-theme') || 'system';
    setCurrentTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Update when theme changes
    const savedTheme = localStorage.getItem('data-theme') || 'system';
    setCurrentTheme(savedTheme);
  }, [theme]);

  const getNextTheme = (current: string) => {
    switch (current) {
      case 'system':
        return 'dark';
      case 'light':
        return 'system';
      case 'dark':
        return 'light';
      default:
        return 'system';
    }
  };

  const getIcon = (theme: string) => {
    switch (theme) {
      case 'system':
        return 'computer';
      case 'light':
        return 'sun';
      case 'dark':
        return 'moon';
      default:
        return 'computer';
    }
  };

  const getLabel = (theme: string) => {
    switch (theme) {
      case 'system':
        return 'Switch to dark mode';
      case 'light':
        return 'Switch to light mode';
      case 'dark':
        return 'Switch to system';
      default:
        return 'Switch theme';
    }
  };

  const nextTheme = getNextTheme(currentTheme);
  const icon = getIcon(currentTheme);
  const label = getLabel(currentTheme);

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
