import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const width = Dimensions.get('window').width;

function Button({ screenName, text, marginH, marginV, }) {
  const styles = StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: 'transparent',
      paddingVertical: 8,
      width: width / 2,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#C7C3FB',
      marginHorizontal: marginH,
      marginVertical: marginV,
    },
    btnTextStyle: {
      color: '#6558F6',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
