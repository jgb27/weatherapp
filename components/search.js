// Description: Search component for the home page

// import frameworks
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = ({ onPress }) => {
  return (
    <InputGroup >
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.400' />
      </InputLeftElement>
      <Input
        type='text'
        placeholder='Enter Your Location'
        w='100%'
        color='black'
        bgColor='white'
        borderColor='gray.400'
        borderRadius='xl'
        borderWidth='2px'
        _focus={{ outline: 'none' }}
        _hover={{ borderColor: 'purple.500' }}
        _placeholder={{ color: 'gray.400' }}
        boxShadow='lg'
        onKeyPress={onPress}
      />
    </InputGroup >
  )
}

export default Search;