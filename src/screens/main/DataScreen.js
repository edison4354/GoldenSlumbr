import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export default class Data extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main_header}>
          Based on the data, you should use golden slumbr at around 10 AM
        </Text>
        <Text style={styles.header}>
          Here are the lastest times you've used golden slumbr:
        </Text>
        <Image source={require('res/img/EmptyImage.png')} style={styles.image}></Image>
        <Text style={styles.header}>
          Here are your sleep data over the last few days:
        </Text>
        <Image source={require('res/img/EmptyImage.png')} style={styles.image}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    textAlign: 'left',
    marginHorizontal: 60,
    marginVertical: 15,
  },
  main_header: {
    fontSize: 18,
    textAlign: 'left',
    marginHorizontal: 60,
    marginVertical: 15,
    marginTop: 100,
  },
  image: {
    width: 290,
    height: 250,
    marginVertical: 10,
    marginHorizontal: 60,
  }
})