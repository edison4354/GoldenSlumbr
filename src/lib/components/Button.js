import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const width = Dimensions.get('window').width;

const Button = ({text, margin}) => {
  const styles = StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: 'transparent',
      paddingVertical: 8,
      width: width / 2,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#C7C3FB',
      margin: margin,
    },
    btnTextStyle: {
      color: '#6558F6',
      fontSize: 16,
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
