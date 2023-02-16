// Description: This file contains the function that returns the background 
// color of the page based on the weather

const getBackground = (weather) => {
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

const getBackgroundBox = (weather) => {
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

export { getBackground, getBackgroundBox }