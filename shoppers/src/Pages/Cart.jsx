

import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, Box, Flex, Input, Select, Button, Spinner } from '@chakra-ui/react'
import CartCard from "../Components/CartCard";

const getData = (order,sort) => {
  return axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart`)
}

function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetched = () => {
    setLoading(true);
    getData()
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(()=>setLoading(false))
  }

  useEffect(() => {
    fetched();
  }, [])

  const handleRemove=(id)=>{
    axios.delete(`https://long-blue-goshawk-suit.cyclic.app/cart/${id}`)
    fetched()
  }

  useEffect(() => {
    if(searchQuery)
    {
      // setLoading(true)
      let params=searchQuery?{q:searchQuery}:{}
      axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart?_sort=price&_order=${order}`,{
        params
      })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
    }
    else if(order)
    {
      setLoading(true)
      axios.get(`https://long-blue-goshawk-suit.cyclic.app/cart?_sort=price&_order=${order}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(()=>setLoading(false))
    }
  }, [order,searchQuery])

  const handleSort=(e)=>{
    setOrder(e.target.value);
  }
  let p=0;
  data.map((it)=>{
      p+=it.price;
  })

  if(loading)
  {
    return <Spinner mt={40} />
  }
  if(error)
  {
    return <h1>Something Went Wrong</h1>
  }
  console.log(data)
  console.log(p)
  return (
    <Box m="auto" width={"92%"} mt={2} >
      <Box m="auto" width={"98%"} >
        <Flex justifyContent={"space-between"}>

          <Box >
            <Button  bg={"white"} borderRadius="0px" >PRE</Button>
            <Button m={1} borderRadius="50%" >1</Button>
            <Button  bg={"white"} borderRadius="0px" >NEXT</Button>
          </Box>

          <Box >
            <Flex >
              <Input placeholder="SEARCH BRANDS"
               border={"1px solid black"}
               borderRadius="0px" 
               onChange={(e)=>setSearchQuery(e.target.value)}
                />

              <Select onChange={handleSort} ml={"10px"} width={"280px"} placeholder="SORT" border={"1px solid black"} borderRadius="0px" >
                <option value="asc">PRICE (LOW-HIGH)</option>
                <option value="desc">PRICE (HIGH-LOW)</option>
              </Select>

            </Flex>
          </Box>
          
        </Flex>
      </Box >

      <Box >
        <Grid templateColumns='repeat(4, 1fr)'   >
          {
            data.map((item) => (
              <GridItem  >
                <CartCard key={item.id} handleRemove={(id)=>handleRemove(id)} id={item.id} image={item.image} title={item.title} price={item.price} />
              </GridItem>
            ))
          }

        </Grid>
      </Box>

    </Box >
  );
}

export default Cart;