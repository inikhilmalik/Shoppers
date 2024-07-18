import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  useToast
} from '@chakra-ui/react';
import { useState,useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../ContextApi/AuthContext';
import { Navigate,Link as RouterLink } from 'react-router-dom';
import { ThemeContext } from "../ContextApi/ThemeContext";
import { BASE_URL } from '../utlis';


export default function SplitScreen() {
  const [email,setEmail]=useState("user@gmail.com")
  const [password,setPassword]=useState("user")
  const [state,setState]=useState("")
  const {Login,isAuth}=useContext(AuthContext);
  const {theme}=useContext(ThemeContext)
  const toast = useToast();
 
  
  const handleSubmit=()=>{
      if(email&&password)
      {
        axios.post(`${BASE_URL}/login`,{
        email,
        password
      })
      .then((res)=>{
        // console.log(res.data)
        toast({
          title:"Login Successfull" ,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        Login(res.data.token,res.data.name)
        setEmail("")
        setPassword("")
      })
      .catch((err)=>{
        toast({
          title:err.response.data.message ,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
    })
      }
      else
      {
        toast({
          title:"Please fill all credentials" ,
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
      }
  }

  if(isAuth)
  {
    return <Navigate to="/cart" />
  }

  return (
    <Stack minH={'100vh'} bg={theme?"rgb(39,45,56)":"white"} color={theme?"white":"black"} >
      <Flex  p={8} flex={1} mt="50px" justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input onChange={(e)=>setEmail(e.target.value)} name="email" value={email} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input onChange={(e)=>setPassword(e.target.value)}  name="password" value={password} type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Box>
                Create a new account? 
              <RouterLink to={"/signup"} color={'blue'}><Button variant={"link"} color={"blue"} ml="5px"> sign up</Button></RouterLink>
              </Box>
            </Stack>
            <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      {state&& <Text fontSize={20} fontWeight={500} mt={"20px"} >{state}</Text>}
    </Stack>
  );
}