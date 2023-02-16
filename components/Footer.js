// Description: Footer component

// import frameworks
import { Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Text color="#6e6e6e">
      &copy; {new Date().getFullYear()} João Gustavo Soares Bispo.
      <a href='https://github.com/jgbispo/weatherapp' target="_blank" rel="noreferrer"> GitHub</a>
    </Text>
  )
}

export default Footer