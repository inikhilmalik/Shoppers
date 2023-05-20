import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const Address = () => {
  const addre = {
    pincode: "",
    name: "",
    address: "",
    locality: "",
    city: "",
    state: "",
    mob: "",
  };

  const [add, setadd] = useState(addre);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate=useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;

    setadd({ ...add, [name]: value });
  };

  const handlesubmit = (e) => {
    const { pincode, name, address, locality, city, state, mob } = add;

    if (
      pincode == "" ||
      name == "" ||
      address == "" ||
      locality == "" ||
      city == "" ||
      state == ""
    ) {
      alert("please enter all details");
    } else if (mob.length !== 10) {
      onOpen();
    } else {
      localStorage.setItem("address", JSON.stringify(add));
      setadd(addre);
      navigate("/payment")
    }
  };
  return (
    <div>
      <Box color="gray" width="70%" p={8}>
        <FormControl>
          <Flex justifyContent="space-between" gap={5}>
            <FormLabel height="40px" width="70%">
              Pincode
            </FormLabel>
            <Input
              placeholder="Pin Code"
              name="pincode"
              value={add.pincode}
              onChange={handlechange}
              type="number"
            />
          </Flex>

          <Flex justifyContent="space-between" gap={5} mt={2}>
            <FormLabel height="40px" width="70%">
              Name
            </FormLabel>
            <Input
              placeholder="Full Name"
              name="name"
              value={add.name}
              onChange={handlechange}
              type="text"
            />
          </Flex>

          <Flex justifyContent="space-between" gap={5} mt={2}>
            <FormLabel height="40px" width="70%">
              Address
            </FormLabel>
            <Textarea
              placeholder="Flat/House No. Colony/Street No."
              name="address"
              value={add.address}
              onChange={handlechange}
              type="text"
            />
          </Flex>

          <Flex justifyContent="space-between" gap={5} mt={2}>
            <FormLabel height="40px" width="70%">
              Locality/Landmark
            </FormLabel>
            <Input
              placeholder="Eg. Near Appolo Hospital"
              name="locality"
              value={add.locality}
              onChange={handlechange}
              type="text"
            />
          </Flex>

          <Flex justifyContent="space-between" gap={5} mt={2}>
            <FormLabel height="40px" width="70%">
              City
            </FormLabel>
            <Input
              placeholder="City"
              name="city"
              value={add.city}
              onChange={handlechange}
              type="text"
            />
          </Flex>

          <Flex justifyContent="space-between" gap={5} mt={2}>
            <FormLabel height="40px" width="70%">
              State
            </FormLabel>
            <Input
              placeholder="State"
              name="state"
              value={add.state}
              onChange={handlechange}
              type="text"
            />
          </Flex>

          <Flex justifyContent="space-between" gap={5} mt={2}>
            <FormLabel height="40px" width="70%">
              Mobile Number
            </FormLabel>
            <Input
              placeholder="Mobile No."
              name="mob"
              value={add.mob}
              onChange={handlechange}
              type="number"
            />
          </Flex>
          
            <Button
              onClick={handlesubmit}
              style={{
                marginTop: "32px",
                backgroundColor: "#E40046",
                color: "white",
                padding: "8px",
                borderRadius: "7px",
              }}
            >
              SAVE
            </Button>
          
          <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Invalid mobile number
                </AlertDialogHeader>

                <AlertDialogBody>
                  Please Enter 10 digit mobile number.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button onClick={onClose}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </FormControl>
      </Box>
    </div>
  );
};

export default Address;
