import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Camponates/Colors'
import Input from '../Camponates/Input'
import { ImagePath } from '../Camponates/Index'
import Button from '../Camponates/Button'



const Location = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:Colors.white}}>
     <ScrollView>
    <View  >
    <Text style={styles.txt}>Location</Text>  
    </View> 
    <View>
    <Input isIcon={true} inputIcon={ImagePath.pin} />  
    </View>
    <View style={styles.boxone}>
     <TouchableOpacity onPress={()=>navigation.navigate('Map')}> 
     <Image source={ImagePath.map} />   
    </TouchableOpacity>
     <View>
     <Text style={styles.txtaa}>We need your location to recommend relevant opportunities to you</Text>
     </View>
    </View>
     <View style={styles.boxtwo}>
      <Button title='Submit & Continue' backgroundColor={Colors.primary2} style={styles.btn}  onPress={()=>navigation.navigate('Onecode')}/> 
     </View>
     </ScrollView> 
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
btn:{
     borderWidth:0,
    },
    txt:{
      fontSize:30,
      color:Colors.black,
      alignSelf:'center',
      marginVertical:10
    },
    boxone:{
     justifyContent:'flex-end',
     alignItems:'center',
      width:'100%',
      height:300,
      

    },
    txtaa:{
      textAlign:'center'
    },
    boxtwo:{
      width:'100%',
      height:150,
      justifyContent:'flex-end'
    }
})