import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../ContextApi/ThemeContext";


const Payment = () => {
  const [state,setState]=useState([])
  const navigate=useNavigate()
  const toast = useToast();
  const {theme}=useContext(ThemeContext)
  let total = 0;

  const getData = () => {
    return axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart`)
  }

  const fetched = () => {
    getData()
      .then((res) =>{ 
        setState(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(()=>{
    fetched()
  },[])


  const handleClick = () => {
    toast({
      title: "Payment successfull, Order is placed",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    navigate("/");
  };
 
  state.map((el) => {
    total += el.price;
  });
  total+=40;
  
  return (
    <Box minH={"90vh"}  bg={theme?"black":"white"}>
      <Box  bg={theme?"black":"white"} >
        <Text color={theme?"white":"black"} >Pay Using Card</Text>
        {/* <Divider mt={4} /> */}

        <Flex width="60%" mt="20px" p={2} justifyContent="space-between">
          <Text color={theme?"white":"black"}>Card Number</Text>
          <Input color={theme?"white":"black"} width="50%" type="number" placeholder="Card Number" />
        </Flex>

        <Flex width="60%" p={2} justifyContent="space-between">
          <Text color={theme?"black":"black"}>Expiry Date</Text>
          <Box width="50%" display="flex" gap={2}>
            <Input color={theme?"white":"black"} width="25%" type="number" placeholder="MM" />
            <Text fontSize="2xl" color={theme?"white":"black"}>/</Text>
            <Input color={theme?"white":"black"}  width="20%" type="number" placeholder="YY" />

            <Text mt={1} color={theme?"white":"black"}>
              CVV
            </Text>
            <Input color={theme?"white":"black"} width="25%" type="number" placeholder="CVV" />
          </Box>
        </Flex>

        <Button
          color="white"
          backgroundColor="#E40046"
          mt={8}
          w="auto"
          onClick={handleClick}
        >
          PAY RS. {total}
        </Button>
        <Text color={theme?"white":"black"} mt={5}>
          7 Days Easy Returns
        </Text>
        <Text color={theme?"white":"black"}>
          Trustpay: 100% Payment Protection. Return or Replacement is applicable
          for 7 days after delivery{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Payment;
