import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = ({route}) => {
  const abc = route?.params?.data;
  console.warn('==>abc',abc)
  return (
    <View>
      <Text>name{abc?.name}</Text>
      <Text>lastname{abc?.lastname}</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})