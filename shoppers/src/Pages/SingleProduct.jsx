
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import { Grid, GridItem, Box, Flex, Input, Select, Button, Spinner } from '@chakra-ui/react'
import Footer from '../Components/Footer';
import {useParams} from "react-router-dom"
import SingleProductCart from "../Components/SingleProduceCart";
import { useContext } from 'react';
import { ThemeContext } from "../ContextApi/ThemeContext";


const getData = (id) => {
  return axios.get(`https://long-blue-goshawk-suit.cyclic.app/shirt/${id}`)
}

function SingleProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {theme}=useContext(ThemeContext)

  let params=useParams()

  const fetched = () => {
    setLoading(true);
    getData(params.id)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(()=>setLoading(false))
  }

  useEffect(() => {
    fetched();
  }, [params.id])

  

  if(loading)
  {
    return <Spinner mt={40} />
  }
  if(error)
  {
    return <h1>Something Went Wrong</h1>
  }

  return (
    <Box m="auto" width={"100%"} p={2} bg={theme?"black":"white"} color={theme?"white":"black"} >
    
    <Box >
        <SingleProductCart id={data.id} title={data.title} image={data.url} price={data.price}  />
    </Box>
      <Footer />
    </Box >
  );
}

export default SingleProduct;


