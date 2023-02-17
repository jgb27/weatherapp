// import frameworks
import { useState, useEffect } from 'react'
import {
  Box,
  Center,
  VStack,
  Text,
  Select,
  Heading,
  HStack,
  Link
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
import { getCity, getCountry } from '@/controllers/getCity';
import InfoCity from '@/components/infoCity';

export default function Home() {

  // states
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [countryName, setCountryName] = useState('')
  const [currency, setCurrency] = useState('')
  const [lang, setLang] = useState('en')
  const [population, setPopulation] = useState(0)
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [wind, setWind] = useState(0)
  const [pressure, setPressure] = useState(0)


  // effects: run before render 
  useEffect(() => {
    getCurrentWeather(lang).then((res) => {
      SetAll(res)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // dynamic import for three.js
  const LazyObjLoader = dynamic(() => import('../components/three-obj.js'), {
    ssr: false,
    loading: () => <ObjLoader />
  })

  const switchLang = (lang) => {
    getWeather(location, lang).then((res) => {
      SetAll(res)
    })
  }

  // handlers for search
  const Handler = (e) => {
    if (e.key === 'Enter') {
      getWeather(e.target.value, lang).then((res) => {
        SetAll(res)
      })
    }
  }

  const SetAll = (res) => {
    setLocation(res.location)
    setWeather(res.weather)
    setTemp(res.temp)
    setHumidity(res.humidity)
    setDescription(res.description)
    setWind(res.wind)
    setPressure(res.pressure)
    setCountry(res.country)
    setLang(res.lang)

    getCountry(res.country)
      .then((res) => {
        setCountryName(res.name)
        setCurrency(res.currency)
      }).catch((err) => {
        console.log(err)
        setCountryName("Not Found")
        setCurrency({ code: "Not Found", name: "Not Found" })
      })

    getCity(res.location)
      .then((res) => {
        setPopulation(res.population)
      }).catch((err) => {
        setPopulation(0)
      })
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
      <Center
        w='100%'
        h='100vh'
        bgGradient={getBackground(weather)}
      >
        <VStack w="100vw" spacing={3} bgGradient={getBackground(weather)}>
          <Select
            w='150px'
            bgGradient={getBackground(weather)}
            border="1px solid white"
            defaultValue={lang}
            onChange={(e) => switchLang(e.target.value)}
          >
            <option value="pt_br">Português-BR</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
          </Select>
          <Center>
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
                    lang={lang}
                  />
                </VStack>
              </VStack >
              <InfoCity
                location={location}
                lang={lang}
                countryName={countryName}
                country={country}
                currency={currency}
                population={population}
                bgGradient={getBackgroundBox(weather)}
              />
            </VStack>
          </Center >
          <Footer />
        </VStack>
      </Center>
    </Layout >
  )
}
