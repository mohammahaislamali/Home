import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Colors from '../Camponates/Colors'
import Input from '../Camponates/Input'
import { ImagePath } from '../Camponates/Index'
import CheckBox from '@react-native-community/checkbox';
import Model from '../Camponates/Model'

const SingUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(true)
  const [active, setActive] = useState('login');
  
  return (
    <View style={{flex:1}}> 
    <ScrollView>
    <View style={styles.mainbox}>
    <View>  
    <TouchableOpacity
            onPress={() => setActive('login')}
            style={[
              styles.btn,
              {backgroundColor: active === 'login' ? Colors.primary2 :  Colors.gray},
            ]}>
    <Text style={styles.txt}>Login</Text>
    </TouchableOpacity>
    </View> 
    <View>
    <TouchableOpacity
            onPress={() => setActive('singup')}
            style={[
              styles.btnone,
              {backgroundColor: active === 'singup' ? Colors.primary2 :  Colors.gray},
            ]}>
    <Text style={styles.txt}>SingUp</Text>
    </TouchableOpacity>
    </View> 
    </View>
    <View>
     <View>
     <Input isIcon={true} inputIcon={ImagePath.user} placeholder='Full Name'  style={styles.input}/>
    </View>   
    <View>
     <Input isIcon={true} inputIcon={ImagePath.phone} placeholder='Mobile number' style={styles.input}/>
    </View>
    <View>
     <Input isIcon={true} inputIcon={ImagePath.email} placeholder='Email address (optional)' style={styles.input}/>
    </View>
    <View>
     <Input isIcon={true} inputIcon={ImagePath.user} placeholder='Referal code (optional)' style={styles.input}/>
    </View>
   <View style={styles.chebox}>   
  <CheckBox
    tintColors={{ true: '#3CC3FD', false: '#3CC3FD' }}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text>By Clicking Sign Up, you agree to our <Text style={{color:Colors.primary2}}>Terms of use</Text> and <Text style={{color:Colors.primary2}}>privacy policy</Text></Text> 
    </View>
    </View>
   
    <View style={styles.boxone}>  
      <View style={styles.boxtwo}>
        <Image style={styles.imgicone} source={ImagePath.chat}/>
        <Text style={styles.texttt}>Chat Support</Text>
      </View>
      <View>
      <Model onPress={()=>navigation.navigate('Location')}/>
    </View>
     </View>
     </ScrollView>
    </View>
  )
}

export default SingUp

const styles = StyleSheet.create({
    btn:{
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
  txt:{
   color:'white',
   fontSize:20
  },
  input:{
    borderColor:Colors.gray,
    width:'90%',alignSelf:'center'
  },
chebox:{
  flexDirection:'row',
  alignItems:'center',
  width:'85%',
  alignSelf:'center'
},
boxone:{
alignSelf:'center',
width:'100%',
marginVertical:10, 
},
boxtwo:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginVertical:20
},
imgicone:{
  width:25,
  height:25,
  tintColor:Colors.gray,
},
texttt:{
  color:Colors.primary2,
  fontSize:15,
  marginHorizontal:3
}

})