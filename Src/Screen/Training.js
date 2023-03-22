import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';

const Training = () => {
 const openGallery=()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
}
const cameraOpen=()=>{
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
}
  return (
    <View style={{flex:1}}>
    <View >       
   <TouchableOpacity style={{width:50,height:50,backgroundColor:'red',borderRadius:50,alignItems:'center',justifyContent:'center'}} onPress={openGallery}>
    <Text>Gallery</Text> 
   </TouchableOpacity>

   <TouchableOpacity style={{width:50,height:50,backgroundColor:'red',borderRadius:50,justifyContent:'center',alignItems:'center',marginHorizontal:50}} onPress={cameraOpen}>
    <Text>Camera</Text>
   </TouchableOpacity>
   </View> 
    </View>
  )
}

export default Training

const styles = StyleSheet.create({})