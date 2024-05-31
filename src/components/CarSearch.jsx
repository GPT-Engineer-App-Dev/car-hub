import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, HStack } from '@chakra-ui/react';

const CarSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [carType, setCarType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    onSearch({ location, date, carType, priceRange });
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <VStack spacing={4}>
        <FormControl id="location">
          <FormLabel>Location</FormLabel>
          <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl id="carType">
          <FormLabel>Car Type</FormLabel>
          <Select placeholder="Select car type" value={carType} onChange={(e) => setCarType(e.target.value)}>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
          </Select>
        </FormControl>
        <FormControl id="priceRange">
          <FormLabel>Price Range</FormLabel>
          <Select placeholder="Select price range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-150">$101 - $150</option>
            <option value="151-200">$151 - $200</option>
            <option value="200+">$200+</option>
          </Select>
        </FormControl>
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={handleSearch}>Search</Button>
          <Button variant="outline" onClick={() => { setLocation(''); setDate(''); setCarType(''); setPriceRange(''); }}>Clear</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CarSearch;