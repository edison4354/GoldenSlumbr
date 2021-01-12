import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Pressable } from 'react-native';
import Button from 'lib/components/Button.js';

const width = Dimensions.get('window').width

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up for golden slumbr</Text>
      <TextInput style={styles.input} placeholder={'Email'}/>
      <TextInput style={styles.input} placeholder={'Username'}/>
      <TextInput style={styles.input} placeholder={'Password'}/>
      <Button
        text='Next'
        screenName='Sleep'
        marginV={30}
      />
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Log in</Text>
      </Pressable>
    </View>
  );
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
    margin: 13,
    borderColor: '#AEBAC6',
    borderWidth: 2,
    borderRadius: 4,
  },
  next: {
    fontSize: 30,
    borderWidth: 2,
  }
})