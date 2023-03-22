import { Image, StyleSheet, Text, View, } from 'react-native'
import React,{useState} from 'react'
import { ImagePath } from '../Camponates/Index'
import Colors from '../Camponates/Colors'
import CheckBox from '@react-native-community/checkbox';
import Button from '../Camponates/Button';
import { ScrollView } from 'react-native-gesture-handler';
const Lock = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.mainbox}>
      <ScrollView>
      <View style={styles.boxone}>
      <Image source={ImagePath.userlock} style={styles.img}/>
      </View>
      <View style={styles.boxtwo}>
      <Text style={styles.txt}>Allow access to your contacts !</Text>
      <Text style={styles.txtaaa}>Please sync your contacts to get better product recommendations to sell & Earn</Text>
      </View>
      <View style={styles.boxfour}>
      <View style={styles.boxthree}>
      <View  style={styles.check}  >
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
       </View>
       <View>
        <Text>Do not ask again</Text>
      </View> 
      </View>
      <View>
        <Button title='Continue' backgroundColor={Colors.primary2} style={styles.btn}/>
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default Lock

const styles = StyleSheet.create({
  boxone:{
    alignItems:'center',
    height:150,
    justifyContent:"flex-end",
  },
  img:{
    height:110,
    width:100,
    resizeMode:'cover'
  },
  mainbox:{
    flex:1,backgroundColor:'white'
  },
  boxtwo:{
    alignItems:'center',marginVertical:10
  },
  txt:{
    fontSize:20,color:Colors.black
  },
  txtaaa:{
    textAlign:'center'
  },
  boxthree:{
    flexDirection:'row',
    alignItems:'center',

  },
  btn:{
    borderWidth:0,width:'95%'
  },
  check:{
    marginHorizontal:15
  },
  boxfour:{
    height:400,
    justifyContent:'flex-end'
  }

})