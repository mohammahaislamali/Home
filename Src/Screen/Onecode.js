import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Camponates/Colors'
import { ImagePath } from '../Camponates/Index'


const Onecode = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <ScrollView>
     <View style={styles.boxone}>  
     <View style={styles.boxtwo}>
     <Image source={ImagePath.girl} style={styles.imgONE}/>
    </View>
    <View style={styles.boxthrre}>
    <Image source={ImagePath.man} style={styles.imgtwo} />   
    </View>  
     </View>
     <View style={styles.boxfour}>
      <Text style={styles.txt}> Your OneCode</Text>  
     </View>
     <View style={styles.boxfive}>
       <Text style={styles.txtaa}>One@Abc00123</Text> 
     </View>
     <View style={styles.boxsix}>
      <TouchableOpacity onPress={()=>navigation.navigate('Lock')}>
      <Text style={styles.txtab}> Choose different code</Text>
      </TouchableOpacity>
      <View>
        <Text>Note : You can’t change your onecode later.</Text>
    </View>
     </View>
   
     </ScrollView>
    </View>
  )
}

export default Onecode

const styles = StyleSheet.create({
    boxone:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:50
    },
boxtwo:{
    width:122,
    height:106,
    backgroundColor:Colors.primary2,
    alignItems:'center',borderRadius:10
},
boxthrre:{
    width:120,
    height:118,
    backgroundColor:Colors.primary2,
    marginVertical:40,
    alignItems:'center',
    borderRadius:10

},
imgONE:{
    bottom:29,
    height:135,
    width:98,
    resizeMode:'cover'
},
imgtwo:{
    bottom:10,
    height:128,
    width:98,
    resizeMode:'cover'
},
boxfour:{
    alignItems:'center'
},
txt:{
fontSize:20 ,
color:Colors.black 
},
boxfive:{
    backgroundColor:Colors.lightgreean,
    width:150,
    alignItems:'center',
    alignSelf:'center',
    height:40,
    justifyContent:'center',
    borderRadius:10
},
txtaa:{
   color: Colors.black
},
txtab:{
    color:Colors.primary2,fontSize:18,alignSelf:'center'
},
boxsix:{
alignItems:'center',height:200,justifyContent:'flex-end'
}
})