import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import Button from 'lib/components/Button.js';

const width = Dimensions.get('window').width

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login to golden slumbr</Text>
        <TextInput style={styles.input} placeholder={'username'}/>
        <TextInput style={styles.input} placeholder={'password'}/>
        <Button
          text="Next"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    );
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

  },
  input: {
    height: 40,
    width: width / 2,
    paddingLeft: 10,
    margin: 15,
    borderColor: '#AEBAC6',
    borderWidth: 2,
    borderRadius: 4,
  },
  next: {
    fontSize: 30,
    borderWidth: 2,
  }
})