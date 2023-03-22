import { StyleSheet, Text, TextInput, View,Image } from 'react-native';
import React from 'react';
import Colors from './Colors';
const Input = ({ isIcon,inputIcon,  placeholder = 'enter the name', onchange, value, error, style, ref, placeholderTextColor,keyboardType }) => {
  return (
    <>
      <View style={[styles.container,style]}>
        {isIcon && (
          <Image source={inputIcon}
          resizeMode='contain'
          style={{height:25,width:25,marginRight:10}}
           />
        )}
        <TextInput
          value={value} ref={ref}
          style={[styles.input]}
          placeholder={placeholder}
          onChangeText={onchange}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
      <Text color='red'>{error}</Text>
      </>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
  flex:1
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    marginVertical: 2,
    height:55,
    paddingHorizontal:10,
    width:'90%',
    alignSelf:'center'
  }
});
