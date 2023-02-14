import { useState, useEffect } from 'react'
import Layout from "@/components/layout/article";


import { SearchIcon, } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  Image,
  Center,
  VStack,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";

export default function Home() {

  const [location, setLocation] = useState('Vitória, BR')
  const [weather, setWeather] = useState('')
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)

  const getWeather = async (location) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
    const data = await res.json()
    if (data.cod === 200) {
      setWeather(data.weather[0].main.toLowerCase())
    } else {
      setHumidity(0)
      setTemp(0)
      setLocation('404')
      setWeather('404')
    }
  }

  const getTempAndHumidity = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
    const data = await res.json()
    if (data.cod === 200) {
      const { temp, humidity } = data.main
      setTemp(temp)
      setHumidity(humidity)
    } else {
      setWeather('404')
    
    }
  }

  const handler = (e) => {
    if (e.key === 'Enter') {
      setLocation(e.target.value)
      getWeather(e.target.value)
      getTempAndHumidity()
    }
  }


  const getBackground = () => {
    switch (weather) {
      case 'clear':
        return 'linear(to-r, yellow.200, yellow.300)'
      case 'clouds':
        return 'linear(to-r, gray.200, gray.300)'
      case 'rain':
        return 'linear(to-r, blue.200, blue.300)'
      case 'snow':
        return 'linear(to-r, blue.200, blue.300)'
      case 'mist':
        return 'linear(to-r, gray.200, gray.300)'
      case '404':
        return 'linear(to-r, red.200, red.300)'
      default:
        return 'linear(to-r, yellow.200, yellow.300)'
    }
  }

  useEffect(() => {
    getWeather("Vitória, BR")
    getTempAndHumidity()
  }, [])

  return (
    <Layout>
      <Center
        h="100vh"
        bgGradient={getBackground()}
      >
        <VStack
          w="25vw"
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
                onKeyDown={handler}
              />
            </InputGroup >
          </Center >
          <VStack
            w='100%'
            h='100%'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Image
              key={weather}
              src={`/images/${weather}.png`}
              alt={weather}
              w='12vw'
            />
            <HStack>
              <Box
                fontSize='5xl'
                fontWeight='bold'
                color='gray.600'
              >
                {temp}
              </Box>
              <Box
                fontSize='xl'
                fontWeight='bold'
                color='gray.600'
              >
                °C
              </Box>
            </HStack>
            <Box
              fontSize='xl'
              fontWeight='bold'
              color='gray.600'
            >
              {location}
            </Box>
          </VStack>
        </VStack >
      </Center >
    </Layout >
  )
}
