import { Badge, Box, Flex, Heading } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Icon } from '@chakra-ui/icon';
import { useColorModeValue, Text } from '@chakra-ui/react';
import { FaEthereum, FaFireAlt } from 'react-icons/fa';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export type Props = {
  name: string;
  image: string;
  price: number;
  popular: boolean;
};

const MotionBox = motion(Box);

const Card: FC<Props> = ({ name, image, price, popular }) => {
  const { t } = useTranslation('index');

  return (
    <MotionBox
      p={5}
      rounded="md"
      boxShadow="base"
      borderWidth={1}
      borderColor={useColorModeValue('gray.100', 'gray.600')}
      _hover={{ boxShadow: 'outline' }}
      whileHover={{ y: -5 }}
    >
      <Badge
        mb={4}
        colorScheme="red"
        rounded="full"
        px={2}
        py={1}
        alignItems="center"
        opacity={popular ? 1 : 0}
      >
        <Icon as={FaFireAlt} mr={1} /> {t('popular')}
      </Badge>
      <Image src={image} width={200} height={200} rounded="md" />
      <Flex alignItems="center" mt={5}>
        <Heading as="h2" size="md" fontWeight={400}>
          {name}
        </Heading>
        <Icon as={BsPatchCheckFill} color="blue.500" ml={2} />
      </Flex>
      <Flex justifySelf="end" justifyContent="end" alignItems="center">
        <Icon as={FaEthereum} mr={1} />
        <Text>{price}</Text>
      </Flex>
    </MotionBox>
  );
};

export default Card;
