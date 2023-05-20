import React from "react";
import REACTLOGO from "../Image/Shoppers-LOGO.png"
import REACTLOGO2 from "../Image/Shoppers-LOGO2.png"
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
    Center,
    Grid
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";
import { ThemeContext } from "../ContextApi/ThemeContext";


  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const {isAuth,Logout,name}=useContext(AuthContext)
    const {theme,toggleTheme}=useContext(ThemeContext)
  
    return (
      <Box bg={theme?"black" :"white"}
          color={theme?"white" :"black"} >
        <Flex
          direction={{base:"column-reverse",sm:"column-reverse",md:"row",lg:"row",'2xl':"row"}}
          bg={theme?"black" :"white"}
          color={theme?"white" :"black"}

          minH={'90px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={'solid'}
          borderColor={"black"}
          align={'center'}>
          
          <Flex flex={{ base: 1 }}  h={"65px"} alignItems={"center"} ml={{lg:5}} justify={{ base: 'center', md: 'start' }}>
          <RouterLink to="/" >
            <img style={{margin:"0px 20px 0px 0px"}}  width="150px" src={theme?REACTLOGO2:REACTLOGO} alt="logo" />
          </RouterLink>
            
           <Input color={theme?"white":"black"} bg={theme?"black":"whitesmoke"} width="80%"  height="50px" placeholder="SEARCH" border={theme?"1px solid white":"1px solid black"} borderRadius="0px" />
  
            
          </Flex>


          <Stack
            // flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={{base:8,sm:8,md:4,lg:6}}
            ml={3}
            mr={{lg:10}}
            >
              {name&&<Text fontWeight={500} color={"rgb(170,34,54)"} >Hii, {name}</Text>}

            <RouterLink onClick={toggleTheme} >
               {theme?"LIGHT MODE":"DARK MODE"}
            </RouterLink>
            {
                isAuth?
                <RouterLink onClick={Logout} to="/">LOGOUT</RouterLink>:
                <RouterLink to="/login" >LOGIN</RouterLink>
            }
            
            <RouterLink to="/cart"  >
                CART
            </RouterLink>
            
          </Stack>
        </Flex>
          
        <Grid
          gridTemplateColumns={{base:"repeat(4,1fr)",sm:"repeat(4,1fr)",md:"repeat(8,1fr)",lg:"repeat(8,1fr)",'2xl':"repeat(8,1fr)"}}
          minH={'45px'}
          py={2}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={theme?"white":"black"}
          justifyContent={"space-evenly"}
          width="92%"
          m={"auto"}
          >
            
            <RouterLink to="/pant" >
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
            <RouterLink to="/shirt"   >
                SHOES
            </RouterLink>
            <RouterLink  to="/tshirt" >
                SUITING
            </RouterLink>
            <RouterLink to="/shirt"   >
                ACTIVEWEAR
            </RouterLink>
            <RouterLink to="/pant"  >
                SALE
            </RouterLink>
              
            
            
        </Grid>

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
  
  