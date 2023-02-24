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
} from '@chakra-ui/react';
import { useState,useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../ContextApi/AuthContext';
import { Navigate } from 'react-router-dom';


export default function SplitScreen() {
  const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("cityslicka")
  const {Login,isAuth}=useContext(AuthContext);
 

  const handleSubmit=()=>{
      axios.post("https://reqres.in/api/login",{
        email,
        password
      })
      .then((res)=>{
        // console.log(res.data.token)
        Login(res.data.token)
      })
      .catch((err)=>console.log(err))
  }

  if(isAuth)
  {
    return <Navigate to="/cart" />
  }

  return (
    <Stack minH={'100vh'} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
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
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    
    </Stack>
  );
}