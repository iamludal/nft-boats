import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <IconButton
      aria-label="Changer le thème"
      icon={icon}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitcher;
