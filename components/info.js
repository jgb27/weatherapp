// Description: This component is used to display the temperature and location 
// of the city.

// import frameworks
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

const Info = ({ temp, humidity, location, country, wind, pressure }) => {
  const font = ["16px", "18px", "20px"]

  const InfoTemp = () => {
    return (
      <HStack>
        <Box fontSize='5xl' fontWeight='bold' color='white'>
          {temp}
        </Box>
        <Box fontSize='xl' fontWeight='bold' color='white'>
          °C
        </Box>
      </HStack>
    )
  }

  const InfoData = () => {
    const spacing = ["-5px", "-3px", "-2px"];
    return (
      <HStack spacing={["5px", "10px", "20px"]}>
        <VStack spacing={spacing}>
          <Text fontSize={font} fontWeight='bold' color='white'>
            Humidity
          </Text>
          <Text fontSize={font} fontWeight='bold' color='white'>
            {humidity} %
          </Text>
        </VStack>

        <VStack spacing={spacing}>
          <Text fontSize={font} fontWeight='bold' color='white'>
            Wind
          </Text>
          <Text fontSize={font} fontWeight='bold' color='white'>
            {wind} km/h
          </Text>
        </VStack>

        <VStack spacing={spacing}>
          <Text fontSize={font} fontWeight='bold' color='white'>
            Pressure
          </Text>
          <Text fontSize={font} fontWeight='bold' color='white'>
            {pressure} hPa
          </Text>
        </VStack>
      </HStack>
    )
  }

  return (
    <VStack spacing='10px' alignItems='center' justify='center'>
      <InfoTemp />
      <InfoData />
      <Box fontSize={font} fontWeight='bold' color='white'>
        {location}, {country}
      </Box>
    </VStack>
  );
};

export default Info;