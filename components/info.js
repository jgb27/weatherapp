// Description: This component is used to display the temperature and location 
// of the city.

// import frameworks
import { Box, HStack, VStack } from '@chakra-ui/react';

const Info = ({ temp, humidity, location }) => {
  return (
    <VStack
      spacing='-10px'
      alignItems='center'
      justify='center'
    >
      <HStack>
        <Box
          fontSize='5xl'
          fontWeight='bold'
          color='white'
        >
          {temp}
        </Box>
        <Box
          fontSize='xl'
          fontWeight='bold'
          color='white'
        >
          °C
        </Box>
      </HStack>
      <Box
        fontSize='xl'
        fontWeight='bold'
        color='white'
      >
        {location}
      </Box>
    </VStack>
  );
};

export default Info;