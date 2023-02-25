import { Box, Flex, Text } from "@chakra-ui/react"
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../ContextApi/ThemeContext";


function Homepage() {
    const {theme}=useContext(ThemeContext)
    console.log(theme)
    return (
        <Box bg={theme?"black":"white"} border={theme?"1px solid black":"1px solid white"}>
            <Box width={"92%"} m={"auto"}  >
            <Box
                backgroundColor= {theme?"grey":"rgb(230,229,232)"} 
                m={"auto"}
                mt={"20px"}
                color="rgb(166,22,43)"
                fontSize={40}
                fontWeight={500}
                pb={2}
            >
                SALE <span style={{ fontSize: "20px", textAlign: "center", fontWeight: "400" }}>
                    UPTO
                </span> 40% OFF CLEARANCE | <span style={{ fontSize: "20px", textAlign: "center", fontWeight: "400", textDecoration: "underline" }}>
                    Shop Now</span>
            </Box>

            <Box  mt={"1.5%"}  >
                <img src="https://images.dxl.com/is/image/CasualMale/230215_DXL_HP_FEB_4605_D3_Non_Vday?$sclp$" alt="pic" />
            </Box>
            <Box display={"flex"} textAlign={"start"} >
                <Box p={"0px 10px"}  >
                    <img src="https://images.dxl.com/is/image/CasualMale/pG4935?$slist$" alt="pic" />
                    <p>Synrgy Performance Mélange Flat-Front Suit Pants</p>
                    <Text fontWeight={"700"}>INR 2,861.00</Text>
                </Box  >
                <Box  p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/pG3356?$slist$" alt="pic" />
                    <p>Harbor Bay Moisture-Wicking Pocket T-Shirt</p>
                    <Text fontWeight={"700"}>INR 2,680.00</Text>
                </Box>
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/p92989?$slist$" alt="pic" />
                    <p>Harbor Bay Moisture-Wicking Jersey T-Shirt</p>
                    <Text fontWeight={"700"}>INR 2,680.00</Text>
                </Box>
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/pG4934?$slist$" alt="pic" />
                    <p>Synrgy Jacket-Relaxer Performance Mélange Suit Jacket</p>
                    <Text fontWeight={"700"}>INR 7,686.00</Text>
                </Box>
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/pG5081?$slist$" alt="pic" />
                    <p>Synrgy Performance Mélange Suit Vest</p>
                    <Text fontWeight={"700"}>INR 7,861.00</Text>
                </Box>
            </Box>
            <Box   >
                <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_D7?$sclp$" alt="pic" />
            </Box>
            <Box display={"flex"} justifyContent={"space-evenly"} textAlign={"center"} >
                <Box p={"0px 10px"}  >
                    <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_C1?$car203$" alt="pic" />
                    <p>Casual Shirts</p>
                </Box  >
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_C2?$car203$" alt="pic" />
                    <p>T-Shirts</p>
                </Box>
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_C3?$car203$" alt="pic" />
                    <p>Jeans</p>
                </Box>
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_C4?$car203$" alt="pic" />
                    <p>Polos & Rugbys</p>
                </Box>
                <Box p={"0px 10px"} >
                    <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_C5?$car203$" alt="pic" />
                    <p>Casual Shirts</p>
                </Box>
            </Box>
            <Box   >
                <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_D4?$sclp$" alt="pic" />
            </Box>
            <Box   >
                <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_D6b_Rewards?$sclp$" alt="pic" />
            </Box>
            <Box   >
                <img src="https://images.dxl.com/is/image/CasualMale/230201_DXL_HP_FEB_4605_D8_NEW?$sclp$" alt="pic" />
            </Box>
            <Flex  >
                <Box m={2} >
                    <img src="https://images.dxl.com/is/image/CasualMale/220801_DXL_AUG_HP_4233_BrandCarouselb_1B?$sclp$" alt="pic" />

                </Box>
                <Box m={2} >
                    <img src="https://images.dxl.com/is/image/CasualMale/220801_DXL_AUG_HP_4233_BrandCarouselb_2?$sclp$" alt="pic" />

                </Box>
                <Box m={2} >
                    <img src="https://images.dxl.com/is/image/CasualMale/220801_DXL_AUG_HP_4233_BrandCarouselb_3?$sclp$" alt="pic" />

                </Box>
                <Box m={2} >
                    <img src="https://images.dxl.com/is/image/CasualMale/220801_DXL_AUG_HP_4233_BrandCarouselb_4?$sclp$" alt="pic" />

                </Box>
                <Box m={2} >
                    <img src="https://images.dxl.com/is/image/CasualMale/220801_DXL_AUG_HP_4233_BrandCarouselb_5?$sclp$" alt="pic" />

                </Box>
            </Flex>
            <Footer />
        </Box>
        </Box>
    );
}

export default Homepage;