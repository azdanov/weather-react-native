import { fetchWeather } from '..'

test('should fetch weather', async () => {
  const { location, weather, temperature } = await fetchWeather('Helsinki')

  expect(location).toBeString()
  expect(weather).toBeString()
  expect(temperature).toBeNumber()
})
