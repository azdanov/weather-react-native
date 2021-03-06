# Weather - React Native &middot; [![Build Status](https://travis-ci.com/azdanov/weather-react-native.svg?branch=master)](https://travis-ci.com/azdanov/weather-react-native) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/azdanov/weather-react-native/blob/master/LICENSE)

> Trying out React Native

Simple weather app based on [MetaWeather API](https://www.metaweather.com).

<img width="350" alt="screenshot 2019-02-22 at 14 48 44" src="https://user-images.githubusercontent.com/6123841/53243611-2b97f100-36b1-11e9-92fa-0aad125ae203.png">


## Installing / Getting started

Clone the repo, and start as usual for Expo project.

```shell
# Install dependencies
yarn

# Start Expo
yarn start
```

## Developing

### Built With

- Expo
- React native
- Jest

### Prerequisites

Make sure that you have Expo properly installed with Android and/or iOS emulators.

### Building

Expo will build the `.apk` and `.ipa` files. For iOS a paid developers account is necessary.

```shell
# Build with Expo for Android
yarn build:android

# Build with Expo for iOS
yarn build:ios
```

## Tests

Jest is used as the projects test suite.

```shell
# Run tests
yarn test
```

## Style guide

Prettier is used to style the project. Default settings can be viewed in `package.json`.

## Licensing

[MIT](./LICENSE)
