import { StyleSheet, Text, View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Colors from '../Camponates/Colors'
import Countrycode from '../Camponates/Countrycode'
import { ImagePath } from '../Camponates/Index'
import Button from '../Camponates/Button'
const Mobailregister = ({navigation}) => {
const [active, setActive] = useState('login');      
  return (
    <View style={{flex:1,marginHorizontal:20}}>
    <ScrollView>
    <View>
    <View style={styles.mainbox}>
    <View>  
    <TouchableOpacity
           onPress={() => setActive('login')}
            style={[
              styles.btnss,
              {backgroundColor: active === 'login' ? '#3CC3FD' : '#E0E0E0'},
            ]}>
    <Text style={styles.txt}>Login</Text>
    </TouchableOpacity>
    </View> 
    <View>
    <TouchableOpacity
            onPress={() => setActive('singup')}
            style={[
              styles.btnone,
              {backgroundColor: active === 'singup' ? '#3CC3FD' : '#E0E0E0'},
            ]}>
    <Text style={styles.txt}>SingUp</Text>
    </TouchableOpacity>
    </View> 
    </View>
     <View>
      <Text style={styles.txt}>Registered Mobile number</Text>
      <Text>We will send you one time password (OTP)</Text>
     </View>
     <View>
     <Countrycode/>
     </View>
     </View>
     <View style={styles.boxone}>  
      <View style={styles.boxtwo}>
      <Image style={styles.imgchat} source={ImagePath.chat}/>
      <Text style={styles.txtchat}>Chat Support</Text>
      </View>
      <View  >
      <Button onPress={()=>navigation.navigate('SingUp')} backgroundColor={Colors.primary2} title='Continue' style={styles.btn}/>
      </View>
     </View>
    </ScrollView>
    </View>
  )
}

export default Mobailregister

const styles = StyleSheet.create({
 flatbox:{
  margin:15,
  width:150,
},
imgchat:{
  width:25,
  height:25,
  tintColor:Colors.gray,
},
btnss:{
  backgroundColor:Colors.primary2,
  width:150,
  padding:15,
  alignItems:'center',
  borderRadius:10
},
mainbox:{
justifyContent:'space-around',
width:'100%',
flexDirection:'row',
marginVertical:20,
},
btnone:{
backgroundColor:Colors.gray,
width:150,padding:15,
alignItems:'center',
borderRadius:10,
}  ,
textflat:{
  borderWidth:2,
  padding:20,
  borderRadius:20,
  flexDirection:'row',
  textAlign:'center',
  backgroundColor:Colors.gray,
  color:Colors.white
},
txt:{
  fontSize:22,
  color:Colors.black,
},
btn:{

  borderWidth:0,
  width:'95%'
},
boxone:{
width:'100%',height:400,justifyContent:'flex-end'
},
boxtwo:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginVertical:10
},
txtchat:{
  color:Colors.primary2,
  fontSize:15,
  marginHorizontal:3
}
})