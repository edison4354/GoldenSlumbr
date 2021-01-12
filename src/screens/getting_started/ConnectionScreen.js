import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Button from 'lib/components/Button.js';
import { useNavigation } from '@react-navigation/native';

export default function FitbitConnect() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Now, let's connect your fitbit data to get your sleep information
      </Text>
      <Button
        text='Connect my fitbit account'
        screenName='FitbitIntegration'
      />
    </View>
  )
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