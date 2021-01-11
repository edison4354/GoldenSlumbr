import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Button from 'lib/components/Button.js'

export default class FitbitConnect extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Now, let's connect your fitbit data to get your sleep information
        </Text>
        <Button
          text='Connect my fitbit account'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    margin: 30,
  }
})