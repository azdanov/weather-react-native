import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native'

import { fetchWeather, getImage } from './src/utils'
import Search from './src/components/Search'

export default class App extends React.Component {
  state = {
    error: false,
    loading: false,
    location: '',
    temperature: 0,
    weather: '',
  }

  componentDidMount() {
    this.handleUpdateLocation('Helsinki')
  }

  handleUpdateLocation = async city => {
    if (!city) return

    this.setState({ loading: true }, async () => {
      try {
        const { location, temperature, weather } = await fetchWeather(city)

        this.setState({
          error: false,
          loading: false,
          location,
          temperature,
          weather,
        })
      } catch (error) {
        this.setState({
          error: true,
          loading: false,
        })
      }
    })
  }

  render() {
    const { error, loading, location, temperature, weather } = this.state

    return (
      <KeyboardAvoidingView style={styles.containerMain} behavior="padding">
        <ImageBackground
          imageStyle={styles.image}
          source={getImage(weather)}
          style={styles.containerImage}
        >
          <View style={styles.containerDetails}>
            <ActivityIndicator animating={loading} color="white" size="large" />

            {!loading && (
              <View>
                {error ? (
                  <Text style={[styles.textBase, styles.textSmall]}>
                    Could not load weather, please try a different city.
                  </Text>
                ) : (
                  <View>
                    <Text style={[styles.textBase, styles.textLarge]}>{location}</Text>
                    <Text style={[styles.textBase, styles.textSmall]}>{weather}</Text>
                    <Text style={[styles.textBase, styles.textLarge]}>
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}

                <Search
                  placeholder="Enter a city"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containerDetails: {
    backgroundColor: 'hsla(0, 0%, 0%, 0.2)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  containerImage: { flex: 1 },
  containerMain: { backgroundColor: '#334E68', flex: 1 },
  image: { flex: 1, height: null, resizeMode: 'cover', width: null },
  textBase: {
    color: '#F0F4F8',
    textAlign: 'center',
    ...Platform.select({
      android: { fontFamily: 'Roboto' },
      ios: { fontFamily: 'AvenirNext-Regular' },
    }),
  },
  textLarge: { fontSize: 48 },
  textSmall: { fontSize: 18 },
})
