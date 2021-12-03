import { Badge, Box, BoxProps, Flex, Heading } from '@chakra-ui/layout';
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Icon } from '@chakra-ui/icon';
import { useColorModeValue, Text } from '@chakra-ui/react';
import { FaEthereum, FaFireAlt } from 'react-icons/fa';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { useDisclosure, useToast } from '@chakra-ui/react';

export type Props = {
  name: string;
  image: string;
  price: number;
  popular: boolean;
};

const child = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

const MotionBox = motion<BoxProps>(Box);

const Card: FC<Props> = ({ name, image, price, popular }) => {
  const { t } = useTranslation('index');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast({
    status: 'error',
    title: t('not_available'),
    position: 'bottom',
    isClosable: true,
  });

  return (
    <MotionBox
      p={5}
      rounded="md"
      boxShadow="base"
      borderWidth={1}
      borderColor={useColorModeValue('gray.100', 'gray.600')}
      _hover={{ boxShadow: 'outline', cursor: 'pointer' }}
      whileHover={{ scale: 1.02 }}
      variants={child}
      onClick={onOpen}
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Flex alignItems="center" mt={5}>
              <Heading as="h2" size="lg" fontWeight={700}>
                {name}
              </Heading>
              <Icon as={BsPatchCheckFill} color="blue.500" ml={2} />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Image src={image} width={400} height={400} rounded="md" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" justifySelf="stretch" flex={1} onClick={() => toast()}>
              {t('buy')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default Card;
