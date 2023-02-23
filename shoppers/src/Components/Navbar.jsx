import React from "react";
import REACTLOGO from "../Image/Shoppers-LOGO.png"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Img,
    Center
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import { Link as RouterLink } from "react-router-dom";

  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'90px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
        //   border={2}
          borderStyle={'solid'}
          borderColor={"black"}
          align={'center'}>
          
          <Flex flex={{ base: 1 }}  h={"65px"} alignItems={"center"} ml={{lg:5}} justify={{ base: 'center', md: 'start' }}>
          <RouterLink to="/" >
            <img style={{margin:"0px 20px 0px 0px"}}  width="150px" src={REACTLOGO} alt="logo" />
          </RouterLink>
            
           <Input width="80%" bg={"whitesmoke"} height="50px" placeholder="SEARCH" style={{border:"1px solid black",borderRadius:"0px"}} />
  
            
          </Flex>
  
          <Stack
            // flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={{sm:2,lg:6}}
            ml={3}
            mr={{lg:10}}
            >
          

            <RouterLink >
                DARK MODE
            </RouterLink>
            <RouterLink  >
                ORDER STATUS
            </RouterLink>
            <RouterLink to="/login" >
                LOGIN
            </RouterLink>
            <RouterLink to="/cart" >
                CART
            </RouterLink>
            
          </Stack>
        </Flex>

        <Flex
          minH={'45px'}
          py={2}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={"black"}
          align={'start'}
          justifyContent={"space-evenly"}
          width="92%"
          m={"auto"}
          >
            
            <RouterLink  >
                NEW+NOW
            </RouterLink>
            <RouterLink to="/shirt"  >
                SHIRTS
            </RouterLink>
            <RouterLink to="/tshirt"  >
                T-SHIRTS
            </RouterLink>
            <RouterLink to="/pant"  >
                PANTS
            </RouterLink>
            <RouterLink   >
                SHOES
            </RouterLink>
            <RouterLink   >
                SUITING
            </RouterLink>
            <RouterLink   >
                ACTIVEWEAR
            </RouterLink>
            <RouterLink   >
                SALE
            </RouterLink>
              
            
            
        </Flex>

      </Box>
    );
  }
  
  // const DesktopNav = () => {
  //   const linkColor = useColorModeValue('gray.600', 'gray.200');
  //   const linkHoverColor = useColorModeValue('gray.800', 'white');
  //   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
  //   return (
  //     <Stack direction={'row'} spacing={4}>
        
  //         <Box>
  //           <Popover trigger={'hover'} placement={'bottom-start'}>
  //             <PopoverTrigger>
  //               <Link
  //                 p={2}
                  
  //                 fontSize={'sm'}
  //                 fontWeight={500}
  //                 color={linkColor}
  //                 _hover={{
  //                   textDecoration: 'none',
  //                   color: linkHoverColor,
  //                 }}>
                 
  //               </Link>
  //             </PopoverTrigger>
  
              
  //           </Popover>
  //         </Box>
       
  //     </Stack>
  //   );
  // };
  
  