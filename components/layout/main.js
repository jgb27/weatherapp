import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react/dist";

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Container maxW="100vw">
        {children}
      </Container>
    </Box>
  );
};

export default Main;