import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from "react-native";
import Button from 'lib/components/Button.js';

const width = Dimensions.get('window').width

export default class Sleep extends Component {
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.header}>
          Use our predictive AI to determine the best times to use golden 
          slumbr to improve your sleep
        </Text>
        <Text style={styles.header}>Do you want to wake up:</Text>
        <Button
          text='Earlier than I do now'
        />
        <Button
          style={styles.button}
          text='Later than I do now'
          margin={30}
        />           
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    margin: 30,
  },
  button: {
    fontSize: 30,
    margin: 50,
  }
})