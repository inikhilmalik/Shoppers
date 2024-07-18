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
import {Link as RouterLink} from "react-router-dom"
import { ThemeContext } from "../ContextApi/ThemeContext";
import { useContext } from 'react';
import { BASE_URL } from '../utlis';

function Card({ title, image, price, id }) {
  const {theme}=useContext(ThemeContext)

  const data = {
    isNew: true,
    imageURL: image,
    name: title,
    price: price,
    rating: 4.2,
  };

  const handleCart = (id, title, image,price) => {
    axios.post(`${BASE_URL}/cart`, { title, image,price })
  }

  return (
    <Flex p={3} alignItems="center" justifyContent="center"  >
      <Box
        bg={theme?"black":"white"}
        color={theme?"white":"black"}
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
        <RouterLink to={`/shirt/${id}`} >
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          />
          </RouterLink>

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
            <Box fontSize="2xl" color={theme?"white":"black"}>
              <Box as="span" color={theme?'white':"gray.500"} fontSize="lg">
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