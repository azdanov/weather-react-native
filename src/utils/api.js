/* eslint-disable camelcase */
import Frisbee from 'frisbee'

const api = new Frisbee({
  baseURI: 'https://www.metaweather.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const fetchWeather = async city => {
  let res = await api.get(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
  )

  if (res.err) throw res.err

  const { woeid } = res.body[0]

  res = await api.get(`https://www.metaweather.com/api/location/${woeid}/`)

  if (res.err) throw res.err

  const { title, consolidated_weather } = res.body
  const { weather_state_name, the_temp } = consolidated_weather[0]

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  }
}

export default api
