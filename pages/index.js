// import frameworks
import { useState, useEffect } from 'react'
import {
  Box,
  Center,
  VStack,
} from "@chakra-ui/react";
import dynamic from 'next/dynamic'

// components
import Layout from "@/components/layout/article";
import ObjLoader from '../components/obj-loader'
import Search from '@/components/search';
import Info from '@/components/info';
import Footer from '@/components/Footer';

// controllers
import getWeather from '@/controllers/getWeather';
import { getBackground, getBackgroundBox } from '@/controllers/getBackground';


export default function Home() {

  // states
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)

  // effects: run before render 
  useEffect(() => {
    getWeather('Vitória, BR')
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
        <VStack>
          <VStack
            w={["300px", "400px", "500px"]}
            h={["400px", "500px"]}
            bgGradient={getBackgroundBox(weather)}
            borderRadius="xl"
            boxShadow="md"
            p="5"
          >
            <Center> <Search onPress={Handler} /> </Center>
            <VStack w='100%' h='70%' justifyContent='center' alignItems='center'>
              {getGLB()}
              <Info temp={temp} humidity={humidity} location={location}/>
            </VStack>
          </VStack >
          <Footer />
        </VStack>
      </Center >
    </Layout >
  )
}
