import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from "react-native";
import Button from 'lib/components/Button.js';

const width = Dimensions.get('window').width

export default function Sleep() {
  return ( 
    <View style={styles.container}>
      <Text style={styles.header}>
        Use our predictive AI to determine the best times to use golden 
        slumbr to improve your sleep
      </Text>
      <Text style={styles.header}>Do you want to wake up:</Text>
      <Button
        text='Earlier than I do now'
        marginH={45}
        marginV={0}
        screenName='FitbitConnect'
      />
      <Button
        text='Later than I do now'
        marginH={45}
        marginV={25}
        screenName='FitbitConnect'
      />           
    </View>
  )
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
    marginHorizontal: 45,
    marginVertical: 30,
    textAlign: 'left'
  },
})