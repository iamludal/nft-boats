import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import useSound from 'use-sound';
import { Switch } from '@chakra-ui/switch';
import { Grid } from '@chakra-ui/layout';
import { useState, useEffect } from 'react';

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState(colorMode === 'dark');
  const [play] = useSound('/assets/audio/switch.mp3', {
    volume: 0.1,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const toggle = () => {
    toggleColorMode();
    play({ id: isDarkMode ? 'off' : 'on' });
    setIsDarkMode(isDark => !isDark);
  };

  useEffect(() => {
    setIsDarkMode(colorMode === 'dark');
  }, [colorMode]);

  return (
    <Grid gap={4} autoFlow="column" alignItems="center">
      <SunIcon />
      <Switch size="lg" onChange={toggle} isChecked={isDarkMode} />
      <MoonIcon />
    </Grid>
  );
};

export default ColorModeSwitcher;
