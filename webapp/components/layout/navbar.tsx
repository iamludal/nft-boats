import { Grid, Heading } from '@chakra-ui/layout';
import Image from 'next/image';
import ColorModeSwitcher from '../ui/ColorModeSwitcher';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useColorModeValue } from '@chakra-ui/color-mode';

const NavBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignContent="center"
      p={6}
      boxShadow="base"
      borderBottomColor="gray.600"
      borderBottomStyle="solid"
      borderBottomWidth={useColorModeValue(0, 1)}
    >
      <Grid className="left" alignItems="center" autoFlow="column" gap={5}>
        <Image src="/assets/logo.svg" width={50} height={50} />
        <Heading>NFT Boats</Heading>
      </Grid>
      <Grid autoFlow="column" alignItems="center" gap={5}>
        <ColorModeSwitcher />
        <LanguageSwitcher />
      </Grid>
    </Flex>
  );
};

export default NavBar;
