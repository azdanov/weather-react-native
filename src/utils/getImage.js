/* eslint-disable global-require */

const images = {
  'Heavy Cloud': require('../../assets/heavy-cloud.jpg'),
  'Heavy Rain': require('../../assets/heavy-rain.jpg'),
  'Light Cloud': require('../../assets/light-cloud.jpg'),
  'Light Rain': require('../../assets/light-rain.jpg'),
  Clear: require('../../assets/clear.jpg'),
  Hail: require('../../assets/hail.jpg'),
  Showers: require('../../assets/showers.jpg'),
  Sleet: require('../../assets/sleet.jpg'),
  Snow: require('../../assets/snow.jpg'),
  Thunder: require('../../assets/thunder.jpg'),
}

export const getImage = weather => images[weather]

export default getImage
