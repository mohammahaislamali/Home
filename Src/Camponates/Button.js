import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const Button = ({title = 'click me!', onPress, style,backgroundColor}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.touch, style,backgroundColor={backgroundColor}]}>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'blue',
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent:'center'
  },
  txt: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: 7,
  },

});
