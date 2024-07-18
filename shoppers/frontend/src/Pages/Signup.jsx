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
import { useState, useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../ContextApi/AuthContext';
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from "../ContextApi/ThemeContext";
import { BASE_URL } from '../utlis';


export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { Login, isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext)
  const toast = useToast();
  const navigate=useNavigate()


  const handleSubmit = () => {

    if (name && email && password) {
      toast({
        title: "User registered successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/login")
      //   axios.post(`${BASE_URL}/signup`,{
      //   name,
      //   email,
      //   password
      // })
      // .then((res)=>{
      //   if(res.data.message==="User already registered")
      //   {
      //     toast({
      //       title: res.data.message,
      //       status: "info",
      //       duration: 2000,
      //       isClosable: true,
      //     });
      //   }
      //   else{
      //     toast({
      //       title: res.data.message,
      //       status: "success",
      //       duration: 2000,
      //       isClosable: true,
      //     });
      //   }

      //   setName("")
      //   setEmail("")
      //   setPassword("")
      // })
      // .catch((err)=>console.log(err.response.data.message))
    }
    else {
      toast({
        title: "Please fill all details",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  }


  return (
    <Stack minH={'100vh'} bg={theme ? "rgb(39,45,56)" : "white"} color={theme ? "white" : "black"} >
      <Flex p={8} flex={1} mt="50px" justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign up to your account</Heading>
          <FormControl id="name">
            <FormLabel>Full name</FormLabel>
            <Input placeholder="First and last name" onChange={(e) => setName(e.target.value)} value={name} type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Email address" onChange={(e) => setEmail(e.target.value)} name="email" value={email} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              {/* <Checkbox>Remember me</Checkbox> */}
              <Box>
                Already have an account?
                <RouterLink to={"/login"} color={'blue'}><Button variant={"link"} color={"blue"} ml="5px"> sign in</Button></RouterLink>
              </Box>
            </Stack>
            <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}