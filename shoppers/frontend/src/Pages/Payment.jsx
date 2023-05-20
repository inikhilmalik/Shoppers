import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Payment = () => {
  const [state,setState]=useState([])
  const navigate=useNavigate()
  const toast = useToast();
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
      title: "Payment successfully, Order is placed",
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
    <div>
      <Box backgroundColor="gray.50">
        <Text color="black">Pay Using Card</Text>
        <Divider mt={4} />

        <Flex width="60%" p={2} justifyContent="space-between">
          <Text color="black">Card Number</Text>
          <Input width="50%" type="number" placeholder="Card Number" />
        </Flex>

        <Flex width="60%" p={2} justifyContent="space-between">
          <Text color="black">Expiry Date</Text>
          <Box width="50%" display="flex" gap={2}>
            <Input width="25%" type="number" placeholder="MM" />
            <Text fontSize="2xl">/</Text>
            <Input width="20%" type="number" placeholder="YY" />

            <Text mt={1} color="black">
              CVV
            </Text>
            <Input width="25%" type="number" placeholder="CVV" />
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
        <Text color="black" mt={5}>
          7 Days Easy Returns
        </Text>
        <Text color="black">
          Trustpay: 100% Payment Protection. Return or Replacement is applicable
          for 7 days after delivery{" "}
        </Text>
      </Box>
    </div>
  );
};

export default Payment;
