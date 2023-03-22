import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import {ImagePath} from '../Camponates/Index' 
import Colors from '../Camponates/Colors';
const Splase = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
       navigation.replace('Wellcome')
      }, 2000);
    });

  return (
    
     <View style={styles.mainbox}>
     <Image style={styles.ImageStyle} source={ImagePath.splasescrren}/>
    </View>
  )
}

export default Splase

const styles = StyleSheet.create({
mainbox:{
  flex:1,justifyContent:"center",
  alignItems:"center",
  backgroundColor:Colors.primary2
} ,
ImageStyle:{
    resizeMode:"contain",
    height:"25%",
    width:"60%",
    }
})
