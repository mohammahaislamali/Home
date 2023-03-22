import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { ImagePath } from '../Camponates/Index'
import {useTranslation} from 'react-i18next';
import '../Langvaege/Index'
const Wellcome = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [ChooseYourLanguage,setLanguage] =useState('hi');  
  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
      navigation.navigate('Swiperrr')
  };

 const Flage =[
    {
      image:ImagePath.amrikaflage,
      name:'ENGLISH',
      type:'en'
    },
    {
      image:ImagePath.indainflage,
      name:'HINDI',
      type:'hi'
    } 
 ]
  return (
    <View>
      <View>
      <Text style={styles.text}>{t("ChooseYourLanguage")}</Text>
      </View>
      <View> 
       <FlatList
       horizontal
       data={Flage}
       renderItem={({item})=>{
       return(
      <View style={{flex:1}}> 
      <TouchableOpacity style={styles.boxone} onPress={()=>changeLanguage(item.type)}>
       <Image style={{height:100,width:100,}} source={item?.image}/>
       <Text>{item?.name}</Text>
      </TouchableOpacity>
      </View>
       ) 
       }}
       />
      </View>
    </View>
  )
}

export default Wellcome

const styles = StyleSheet.create({
text:{
  textAlign:'center',
  fontSize:20,fontWeight:'900'
},
boxone:{
  alignItems:'center',
  marginVertical:30,
  margin:40
}

})