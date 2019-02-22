import { getImage } from '..'

test('should get images', () => {
  expect(getImage('Heavy Cloud')).toBe(1)
  expect(getImage('Heavy Rain')).toBe(1)
  expect(getImage('Light Cloud')).toBe(1)
  expect(getImage('Light Rain')).toBe(1)
  expect(getImage('Clear')).toBe(1)
  expect(getImage('Hail')).toBe(1)
  expect(getImage('Showers')).toBe(1)
  expect(getImage('Sleet')).toBe(1)
  expect(getImage('Snow')).toBe(1)
  expect(getImage('Thunder')).toBe(1)
})
