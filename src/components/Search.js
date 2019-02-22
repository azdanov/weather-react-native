import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

export default class Search extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: '',
  }

  state = {
    focused: false,
    text: '',
  }

  handleChangeText = text => {
    this.setState({ text })
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props
    const { text } = this.state

    if (!text) return

    this.setState({ text: '' }, () => onSubmit(text))
  }

  handleFocus = () => {
    this.setState({ focused: true })
  }

  handleBlur = () => {
    this.setState({ focused: false })
  }

  render() {
    const { onSubmit, placeholder } = this.props
    const { focused, text } = this.state

    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: focused
            ? 'hsla(210, 22%, 49%, 0.8)'
            : 'hsla(209, 23%, 60%, 0.7)',
          borderColor: focused
            ? 'hsla(210, 22%, 49%, 0.9)'
            : 'hsla(209, 23%, 60%, 0.8)',
        }}
      >
        <TextInput
          autoCorrect={false}
          onBlur={this.handleBlur}
          onChangeText={this.handleChangeText}
          onFocus={this.handleFocus}
          onSubmit={onSubmit}
          onSubmitEditing={this.handleSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor="white"
          style={styles.textInput}
          testID="search"
          underlineColorAndroid="transparent"
          value={text}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 0.5,
    height: 40,
    marginHorizontal: 40,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    color: '#F0F4F8',
    flex: 1,
  },
})
