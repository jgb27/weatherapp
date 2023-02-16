// import frameworks
import { useState, useEffect } from 'react'
import {
  Box,
  Center,
  VStack,
  Text
} from "@chakra-ui/react";
import dynamic from 'next/dynamic'

// components
import Layout from "@/components/layout/article";
import ObjLoader from '../components/obj-loader'
import Search from '@/components/search';
import Info from '@/components/info';
import Footer from '@/components/Footer';

// controllers
import { getWeather, getCurrentWeather } from '@/controllers/getWeather';
import { getBackground, getBackgroundBox } from '@/controllers/getBackground';


export default function Home() {

  // states
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')
  const [description, setDescription] = useState('')
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [wind, setWind] = useState(0)
  const [pressure, setPressure] = useState(0)
  const [country, setCountry] = useState('')

  // effects: run before render 
  useEffect(() => {
    getCurrentWeather().then((res) => {
      setLocation(res.location)
      setWeather(res.weather)
      setTemp(res.temp)
      setHumidity(res.humidity)
      setDescription(res.description)
      setWind(res.wind)
      setPressure(res.pressure)
      setCountry(res.country)
    })
  }, [])

  // dynamic import for three.js
  const LazyObjLoader = dynamic(() => import('../components/three-obj.js'), {
    ssr: false,
    loading: () => <ObjLoader />
  })

  // handlers for search
  const Handler = (e) => {
    if (e.key === 'Enter') {
      getWeather(e.target.value).then((res) => {
        setLocation(res.location)
        setWeather(res.weather)
        setTemp(res.temp)
        setHumidity(res.humidity)
        setDescription(res.description)
        setWind(res.wind)
        setPressure(res.pressure)
        setCountry(res.country)
      })
    }
  }

  // get glb file and load it
  const getGLB = () => {
    return (
      weather ? (
        <LazyObjLoader weather={weather ? weather : "clear"} />
      ) : (
        <Box fontSize='xl' fontWeight='bold' color='white'> Location not found </Box>
      ))
  }

  // render
  return (
    <Layout title={`Weather EBX - ${location ? location : "Home"}`}>
      <Center h="100vh" bgGradient={getBackground(weather)}>
        <VStack >
          <VStack
            w={["300px", "400px", "500px"]}
            h={["400px", "500px"]}
            bgGradient={getBackgroundBox(weather)}
            borderRadius="xl"
            boxShadow="md"
            p="5"
          >
            <Center> <Search onPress={Handler} /> </Center>
            <VStack w='100%' h={["85%", "90%"]} justifyContent='space-evenly' alignItems='center'>
              <Text fontSize='xl' fontWeight='bold' color='white' >
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </Text>
              {getGLB()}
              <Info
                temp={temp}
                humidity={humidity}
                location={location}
                wind={wind}
                pressure={pressure}
                country={country}
              />
            </VStack>
          </VStack >
          <Footer />
        </VStack>
      </Center >
    </Layout >
  )
}
