import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { ImagePath } from '../Camponates/Index'
import Colors from '../Camponates/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Swiperrr = ({navigation}) => {
  return (
    <View style={styles.mainbox}>
      <TouchableOpacity style={styles.touch} ><Text  onPress={()=>navigation.navigate('Mobailregister')}>Skip</Text></TouchableOpacity>
      <Swiper autoplay={false} autoplayTimeout={2}>
        <View style={styles.boximg}>
          <Image style={styles.img} source={ImagePath.lakhrupya} />
          <View style={styles.txtbox}>
            <Text style={styles.txtone}>Join Our Growing Community</Text>
            <Text style={styles.txttwo}>Join our community of <Text style={{ color: Colors.primary2 }}>5 lakh + </Text>users earning{'\n'}
              <Text style={{ color: Colors.primary2 }}>10 crore</Text>+ every month</Text>
          </View>
        </View>
        <View style={styles.boximg}>
          <Image style={styles.img} source={ImagePath.doller} />
          <View style={styles.txtbox}>
            <Text style={styles.txtone}>Earn with Zero Investment </Text>
            <Text style={{ textAlign: 'center' }}>Build your business without  any investment and{'\n'}
              earn upto Rs. 5000 while working from home </Text>
          </View>
        </View>
        <View style={styles.boximg}>
          <Image style={styles.img} source={ImagePath.brand} />
          <View style={styles.txtbox}>
            <Text style={styles.txtone}>Network of 30+ promising brands</Text>
            <Text style={{ textAlign: 'center' }}>Sell financial product like loans, insurance,{'\n'}bank account etc, and earm </Text>
          </View>
        </View>
      </Swiper>
      <View style={styles.botambox}>
        <View>
          <TouchableOpacity >
            <Text onPress={()=>navigation.navigate('Wellcome')}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arrowimg}>
          <Image style={{tintColor:Colors.white}} source={ImagePath.arrow} />
        </View>
      </View>

    </View>
  )
}
export default Swiperrr
const styles = StyleSheet.create({
  mainbox: {
    flex: 1, backgroundColor: '#fff'
  },
  touch: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'flex-end',
  },
  boximg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: '80%',
    height: 300,
    resizeMode: 'contain'
  },
  txtbox: {
    alignItems: 'center',
    marginVertical: 100
  },
  txtone: {
    fontWeight: 'bold'
  },
  txttwo: {
    textAlign: 'center'
  },
  arrowimg: {
  backgroundColor:Colors.primary2,
  width:50,height:50,borderRadius:50,
  justifyContent:'center',alignItems:'center'
  },
  botambox: {
  flexDirection:'row',justifyContent:'space-between',
  marginHorizontal:20,marginVertical:20,alignItems:'center'
  }
})