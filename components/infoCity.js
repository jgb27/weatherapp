import selectLanguage from "@/controllers/lang";
import { VStack, Heading, HStack, Text, Link } from "@chakra-ui/react";

const TextInfoCity = ({ text, subText }) => {
  return (
    <VStack>
      <Text
        fontSize='sm'
        fontWeight='bold'
        color='white'
      >
        {text}
      </Text>
      <Text
        fontSize='sm'
        fontWeight='bold'
        color='white'
      >
        {subText}
      </Text>
    </VStack>
  )
}

const InfoCity = ({location, lang, country, countryName, currency, population, bgGradient }) => {
  let populationStr = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  return (
    <VStack
      w={["300px", "400px", "500px"]}
      h={["150px", "200px", "250px"]}
      bgGradient={bgGradient}
      borderRadius="xl"
      boxShadow="md"
      p={["5px", "20px", "30px"]}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Heading color='white'>{location || "loading"}</Heading>
      <HStack w='100%' justifyContent='space-evenly'>
        <TextInfoCity text={selectLanguage(lang)[3]} subText={`${countryName || "loading"} - ${country || "loading"}`} />
        <TextInfoCity text={selectLanguage(lang)[4]} subText={populationStr || "loading"} />
        <TextInfoCity text={selectLanguage(lang)[5]} subText={`${currency.code || "loading"} - ${currency.name || "loading"}`} />
      </HStack>
      <Text
        fontSize='sm'
        fontWeight='bold'
        color='white'
      >
        More Info
        <Link
          href={`https://www.google.com/search?q=${location}`}
          cursor='pointer'
          color='blue.100'
          isExternal
          ml='1'
        >Google</Link>
      </Text>
    </VStack>
  )
}

export default InfoCity