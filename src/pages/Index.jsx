import { useState } from "react";
import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import CarSearch from "../components/CarSearch.jsx";
import BookingConfirmation from "../components/BookingConfirmation.jsx";

const Index = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSearch = (searchCriteria) => {
    console.log("Search criteria:", searchCriteria);
    // Implement search logic here
    setBookingDetails(searchCriteria); // Set booking details for confirmation
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to QuickRide
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your premier online car rental service. Convenient, fast, and reliable.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/car-rental.jpg" alt="Car Rental" objectFit="cover" />
        </Box>
        <CarSearch onSearch={handleSearch} />
        <Button colorScheme="teal" size="lg">
          Book Your Ride
        </Button>
        {bookingDetails && <BookingConfirmation details={bookingDetails} />}
      </VStack>
    </Container>
  );
};

export default Index;