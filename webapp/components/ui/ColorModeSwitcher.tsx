import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import useSound from "use-sound";

const soundId = {
  dark: "on",
  light: "off",
};

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const [play] = useSound("/assets/audio/switch.mp3", {
    volume: 0.1,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const toggle = () => {
    toggleColorMode();
    play({ id: soundId[colorMode] });
  };

  return (
    <IconButton aria-label="Changer le thème" icon={icon} onClick={toggle} />
  );
};

export default ColorModeSwitcher;
