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
    Button,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import axios from "axios"
  import { useContext } from 'react';
  import { ThemeContext } from "../ContextApi/ThemeContext";

  
  
  function CartCard({title,image,price,id,handleRemove}) {
    const {theme}=useContext(ThemeContext)

    const data = {
        isNew: true,
        imageURL:image,
        name: title,
        price: price,
        rating: 4.2,
      };

      const handleDelete=(id)=>{
        handleRemove(id)
    }

    return (
      <Flex p={3}  alignItems="center" justifyContent="center">
        <Box
          bg={theme?"black":"white"}
          color={theme?"white":"black"}
          width="340px"
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
            width={"50%"}
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            
          />
            
          <Box p="4" borderTop={theme?"1px solid white":"1px solid black"} >
            <Box  d="flex" alignItems="baseline" textAlign={"start"}>
              
            </Box>
            <Flex  mt="1" justifyContent="space-between"  alignContent="center">
              <Box
                fontSize="lg"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>
              
            </Flex>
  
            <Flex justifyContent="space-between" mt="3"  >
              <Box fontSize="2xl" color={theme?"white":"black"}>
                <Box as="span" color={theme?"white":'gray.500'} fontSize="lg">
                  Rs.
                </Box>
                {data.price}
              </Box>
            
              <Tooltip
                label="Remove from cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'0.9em'}>
                <chakra.a  display={'flex'}>
                    <Button onClick={()=>handleDelete(id)} p={3} fontSize={14} color="black" bg="red.200" >REMOVE</Button>
                </chakra.a>
              </Tooltip>
            </Flex>

          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default CartCard;