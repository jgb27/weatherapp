import Layout from "@/components/layout/article";

import { SearchIcon, } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  Center,
  VStack,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Center h="100vh" >
        <VStack
          w="55vw"
          h="65vh"
          bgColor="white"
          borderRadius="xl"
          boxShadow="md"
          p="5"
        >
          <Center>
            <InputGroup >
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.400' />
              </InputLeftElement>
              <Input
                type='text'
                placeholder='Enter Your Location'
                w='100%'
                color='black'
                borderColor='gray.400'
                borderRadius='xl'
                borderWidth='2px'
                _focus={{ outline: 'none' }}
                _hover={{ borderColor: 'purple.500' }}
                _placeholder={{ color: 'gray.400' }}
                boxShadow='lg'

              />
            </InputGroup>
          </Center>

        </VStack>
      </Center>
    </Layout>
  )
}
