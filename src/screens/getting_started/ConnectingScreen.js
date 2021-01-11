import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class Connecting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Connect to Fitbit Screens
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8DD7CF'
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    margin: 30,
  },
})