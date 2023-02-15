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

import dynamic from 'next/dynamic'
import ObjLoader from '../components/obj-loader'

export default function Home() {

  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)

  // stating before the page loads
  useEffect(() => {
    getWeather('London')
  }, [])

  const LazyObjLoader = dynamic(() => import('../components/three-obj.js'), {
    ssr: false,
    loading: () => <ObjLoader />
  })

  const getWeather = async (location) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
    const data = await res.json()
    if (data.cod === 200) {
      const { temp, humidity } = data.main
      setWeather(data.weather[0].main.toLowerCase())
      setTemp(temp)
      setHumidity(humidity)
      setLocation(data.name)
    } else {
      setHumidity(0)
      setTemp(0)
      setLocation('404')
      setWeather('404')
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

  const getBackgroundBox = () => {
    switch (weather) {
      case 'clear':
        return 'linear(to-r, blue.200, blue.300)'
      case 'clouds':
        return 'linear(to-r, gray.400, gray.500)'
      case 'rain':
        return 'linear(to-r, blue.200, blue.300)'
      case 'snow':
        return 'linear(to-r, blue.100, blue.200)'
      case 'mist':
        return 'linear(to-r, gray.400, gray.500)'
      case '404':
        return 'linear(to-r, red.100, red.200)'
      default:
        return 'linear(to-r, yellow.200, yellow.300)'
    }
  }

  return (
    <Layout>
      <Center
        h="100vh"
        bgGradient={getBackground()}
      >
        <VStack
          w={["300px", "400px", "500px"]}
          h={["400px", "500px"]}
          bgGradient={getBackgroundBox()}
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
                bgColor='white'
                borderColor='gray.400'
                borderRadius='xl'
                borderWidth='2px'
                _focus={{ outline: 'none' }}
                _hover={{ borderColor: 'purple.500' }}
                _placeholder={{ color: 'gray.400' }}
                boxShadow='lg'
                onKeyPress={(e) => { if (e.key === 'Enter') getWeather(e.target.value) }}
              />
            </InputGroup >
          </Center >
          <VStack
            w='100%'
            h='70%'
            justifyContent='center'
            alignItems='center'
          >
            {
              weather ? (
                <LazyObjLoader weather={weather ? weather : "clear"} />
              ) : (
                <Box fontSize='xl' fontWeight='bold' color='white'>
                  Location not found
                </Box>
              )
            }
            <VStack
              spacing='-10px'
              alignItems='center'
              justify={weather === '404' ? 'center' : 'flex-start'}
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
          </VStack>
        </VStack >
      </Center >
    </Layout >
  )
}
