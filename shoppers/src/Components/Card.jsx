import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import axios from "axios"
import { useState } from 'react';

function Card({ title, image, price, id }) {

  const data = {
    isNew: true,
    imageURL: image,
    name: title,
    price: price,
    rating: 4.2,
  };

  const handleCart = (id, title, image,price) => {
    axios.post(`https://long-blue-goshawk-suit.cyclic.app/cart`, { title, image,price })
  }

  return (
    <Flex p={3} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        width="320px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline" textAlign={"start"}>
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>

          </Flex>

          <Flex justifyContent="space-between"  >
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                Rs.
              </Box>
              {data.price}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'0.9em'}>
              <chakra.a display={'flex'}>
                <Icon onClick={() => handleCart(id, title, image,price)} as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

        </Box>
      </Box>
    </Flex>
  );
}

export default Card;