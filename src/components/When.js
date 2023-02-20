import React, {useState, useRef }from 'react';
import { Box, Button, Divider, Flex, Input, Select, Text } from '@chakra-ui/react';
import {BsCalendarCheck} from "react-icons/bs";
const When = () => {
    const [dateFilter, setDateFilter] = useState("");
    const dateLabel = useRef();
    return (
    <Box pos="relative">
    
    <Text><BsCalendarCheck />When</Text>
    <Input
        size="m"
        type="date"
        w="200px"
        cursor="pointer" 
        border="none"
        right="20px"
        onChange={(e) => {
            setDateFilter(e.target.value);
        }}
        onFocus={() => {
            dateLabel.current.style.display = "none";
        }}
    />
    <Text ref={dateLabel} id="date-label" pos="absolute" bottom="5px" left="0px" bg="white" pointerEvents="none" zIndex={3} py={"2px"}>
        Select Move-in Date
    </Text>
    </Box>
    )
}


export default When;