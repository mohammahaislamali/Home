import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { ImagePath } from '../Camponates/Index';




const Home = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
    
    <TouchableOpacity  onPress={() => {
    var options = {
    description: 'Credits towards consultation',
    image: ImagePath.home,
    currency: 'INR',
    key: 'rzp_test_MftsuEGgFs8umc',
    amount: '5000',
    name: 'Acme Corp',
    order_id: '',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}} style={{backgroundColor:'red',width:100,height:30,alignItems:'center'}}>
     <Text>islam</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  input: {
    borderWidth: 2, width: '95%'

  },
  touch: {
     backgroundColor: 'red', 
     padding: 20, width: "90%",
     alignItems: 'center', marginVertical: 10,
     borderRadius: 20 
       }

})