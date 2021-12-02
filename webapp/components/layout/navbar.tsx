import { Grid, Heading } from '@chakra-ui/layout';
import Image from 'next/image';
import ColorModeSwitcher from '../ui/ColorModeSwitcher';
import { Flex } from '@chakra-ui/layout';

const NavBar = () => {
  return (
    <Flex justifyContent="space-between" alignContent="center" p={6} boxShadow="base">
      <Grid className="left" alignItems="center" autoFlow="column" gap={5}>
        <Image src="/assets/logo.svg" width={50} height={50} />
        <Heading>NFT Boats</Heading>
      </Grid>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default NavBar;
