// description: fetches weather data from openweathermap api

const getWeather = async (location, setTemp, setHumidity, setLocation, setWeather) => {
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

export default getWeather