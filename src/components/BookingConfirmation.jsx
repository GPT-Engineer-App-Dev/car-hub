import React from 'react';
import { Box, Text, VStack, Heading, Button } from '@chakra-ui/react';

const BookingConfirmation = ({ details }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" mt={6}>
      <VStack spacing={4}>
        <Heading as="h2" size="lg">Booking Confirmation</Heading>
        <Text>Location: {details.location}</Text>
        <Text>Date: {details.date}</Text>
        <Text>Car Type: {details.carType}</Text>
        <Text>Price Range: {details.priceRange}</Text>
        <Button colorScheme="teal" size="md">Confirm</Button>
      </VStack>
    </Box>
  );
};

export default BookingConfirmation;