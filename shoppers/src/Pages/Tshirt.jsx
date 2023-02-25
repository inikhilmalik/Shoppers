import { useState, useEffect,useContext } from "react";
import axios from "axios";
import Card from "../Components/Card";
import { Grid, GridItem, Box, Flex, Input, Select, Button, Spinner } from '@chakra-ui/react'
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import { ThemeContext } from "../ContextApi/ThemeContext";


const getData = (page) => {
  return axios.get(`https://long-blue-goshawk-suit.cyclic.app/tshirt?_page=${page}&_limit=20`)
}

function Tshirt() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page,setPage]=useState(1);
  const {theme}=useContext(ThemeContext)


  const fetched = () => {
    setLoading(true);
    getData(page)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(()=>setLoading(false))
  }

  useEffect(() => {
    fetched();
  }, [page])

  useEffect(() => {
    if(searchQuery)
    {
      // setLoading(true)
      let params=searchQuery?{q:searchQuery}:{}
      axios.get(`https://long-blue-goshawk-suit.cyclic.app/tshirt?_page=${page}&_limit=20&_sort=price&_order=${order}`,{
        params
      })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
    }
    else if(order)
    {
      setLoading(true)
      axios.get(`https://long-blue-goshawk-suit.cyclic.app/tshirt?_page=${page}&_limit=20&_sort=price&_order=${order}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(()=>setLoading(false))
    }
  }, [order,searchQuery])

  const handleSort=(e)=>{
    setOrder(e.target.value);
  }

  if(loading)
  {
    return <Spinner mt={40} />
  }
  if(error)
  {
    return <h1>Something Went Wrong</h1>
  }
  console.log(data)
  // console.log(order)
  return (
    <Box bg={theme?"black":"white"}>
      <Box m="auto" width={"92%"} p={2} >
      <Box m="auto" width={"98%"} >
        <Flex justifyContent={"space-between"}>

          <Box >
            <Button isDisabled={page===1} onClick={()=>setPage(page-1)} color={theme?"white":"black"} bg={theme?"black":"white"} borderRadius="0px" >PRE</Button>
            <Button m={1} borderRadius="50%" >{page}</Button>
            <Button isDisabled={page===Math.ceil(40/20)} onClick={()=>setPage(page+1)} color={theme?"white":"black"} bg={theme?"black":"white"} borderRadius="0px" >NEXT</Button>
          </Box>

          <Box >
            <Flex >
              <Input placeholder="SEARCH BRANDS"
               border={theme?"1px solid white":"1px solid black"}
               borderRadius="0px" 
               onChange={(e)=>setSearchQuery(e.target.value)}
               color={theme?"white":"black"}
                />

              <Select onChange={handleSort} ml={"10px"} width={"280px"} color={theme?"white":"black"} placeholder="SORT"  border={theme?"1px solid white":"1px solid black"} borderRadius="0px" >
                <option value="asc">PRICE (LOW-HIGH)</option>
                <option value="desc">PRICE (HIGH-LOW)</option>
              </Select>

            </Flex>
          </Box>
          
        </Flex>
      </Box >

      <Box >
        <Grid templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)',"2xl":'repeat(4, 1fr)'}}   >
          {
            data.map((item) => (
              <GridItem key={item.id} >
                <Card  id={item.id} image={item.url} title={item.title} price={item.price} />
              </GridItem>
            ))
          }

        </Grid>
      </Box>
      <Footer />
    </Box >
    </Box>
  );
}

export default Tshirt;


  // https://long-blue-goshawk-suit.cyclic.app