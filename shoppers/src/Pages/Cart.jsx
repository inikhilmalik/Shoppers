import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Grid, GridItem, Box, Flex, Text, Input, Select, Button, Spinner } from '@chakra-ui/react'
import CartCard from "../Components/CartCard";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../ContextApi/AuthContext";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../ContextApi/ThemeContext";


const getData = () => {
  return axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart`)
}

function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const {isAuth}=useContext(AuthContext);
  const {theme}=useContext(ThemeContext)

  let Total = 0;

  const fetched = () => {
    setLoading(true);
    getData()
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetched();
  }, [])

  const handleRemove = (id) => {
    axios.delete(`https://long-blue-goshawk-suit.cyclic.app/cart/${id}`)
      .then(() => fetched())
      .catch(() => fetched())
  }

  useEffect(() => {
    if (searchQuery) {
      // setLoading(true)
      let params = searchQuery ? { q: searchQuery } : {}
      axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart?_sort=price&_order=${order}`, {
        params
      })
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
    }
    else if (order) {
      setLoading(true)
      axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart?_sort=price&_order=${order}`)
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }
  }, [order, searchQuery])

  
  data.map((it) => {
    Total += it.price;
  })


  if(loading)
  {
    return <Spinner mt={40} />
  }
  if(error)
  {
    return <h1>Something Went Wrong</h1>
  }

  const handleCheckout=()=>{
    alert("Order Placed");
  }

  if(!isAuth)
  {
    return <Navigate to="/login" />
  }
  
  console.log(data)
  return (
    <Box bg={theme?"black":"white"} color={theme?"white":"black"} minH="100vh" >
      <Box m="auto" width={"92%"} pt={2}  >
      <Flex justifyContent={"space-between"} width={"99%"} direction={{base:"column-reverse",sm:"column-reverse",md:"column-reverse",lg:"row",'2xl':"row"}}  >
        <Box >
          <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',"2xl":'repeat(3, 1fr)'}}   >
            {
              data.map((item) => (
                <GridItem key={item.id} >
                  <CartCard  handleRemove={handleRemove} id={item.id} image={item.image} title={item.title} price={item.price} />
                </GridItem>
              ))
            }

          </Grid>
        </Box>
        <Box   border={theme?"1px solid white":"1px solid black"} height={"100%"} width={{base:"98%",sm:"98%", md:"98%",lg:"20%"}} mt={3} p="5px 15px" >
          <Box >
            <Text borderBottom={theme?"1px solid white":"1px solid black"}  fontSize={25} fontWeight="700" >ORDER SUMMARY</Text>
          </Box>
          <Flex justifyContent={"space-between"} mt={4} >
            <Text fontSize={20} fontWeight="400" >SUBTOTAL </Text>
            <Text fontSize={20} fontWeight="400" >Rs. {Total} </Text>
          </Flex>
          <Flex justifyContent={"space-between"}  >
            <Text fontSize={20} fontWeight="400" >DELIVERY </Text>
            <Text fontSize={20} fontWeight="400" >Rs. 40 </Text>
          </Flex>
          <Flex borderTop={theme?"1px solid white":"1px solid black"}  borderBottom={theme?"1px solid white":"1px solid black"}  justifyContent={"space-between"} mt={8} >
            <Text fontSize={20} fontWeight="400" >TOTAL </Text>
            <Text fontSize={20} fontWeight="400" >Rs. {Total?Total+40:0} </Text>
          </Flex>
          <Button onClick={handleCheckout} border={"1px solid black"} borderRadius="0px" mt={2} width="100%" background={theme?"red.200":"black"} color={theme?"black":"white"} >CHECKOUT</Button>
        </Box>
      </Flex>

    </Box >
    </Box>
  );
}

export default Cart;