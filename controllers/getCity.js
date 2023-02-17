const getCity = async (location) => {
  const url = `https://api.api-ninjas.com/v1/city?name=${location}`
  const apiKey = process.env.NEXT_PUBLIC_CITY_API_KEY
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
  })
  const data = await res.json()
  if (data[0]) {
    return {
      population: data[0].population,
    }
  } else {
    return {
      population: 0,
    }
  }
}

const getCountry = async (country) => {
  const url = `https://api.api-ninjas.com/v1/country?name=${country}`
  const apiKey = process.env.NEXT_PUBLIC_CITY_API_KEY
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
  })
  const data = await res.json()
  if (data[0]) {
    return {
      name: data[0].name,
      currency: data[0].currency
    }
  } else {
    return {
      name: 'Not Found',
      currency: data[0].currency
    }
  }
}

export { getCity, getCountry }