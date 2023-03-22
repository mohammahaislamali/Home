import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView
  } from 'react-native';
  import React, {useState} from 'react';
  import {useTranslation} from 'react-i18next';
  const HomeLogin = ({navigation}) => {
    const [active, setActive] = useState('login');
  
    return (
      <SafeAreaView style={styles.MainContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.View}>
          <TouchableOpacity
            onPress={() => setActive('login')}
            style={[
              styles.topButton,
              {backgroundColor: active === 'login' ? '#3CC3FD' : '#E0E0E0'},
            ]}>
            <Text style={styles.loginStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive('singup')}
            style={[
              styles.topButton,
              {backgroundColor: active === 'singup' ? '#3CC3FD' : '#E0E0E0'},
            ]}>
            <Text style={styles.loginStyle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
  
        {active == 'login' && (
          <>
            <View style={styles.mainLogin}>
                <Text style={styles.RegisterStyle}>Registered Mobile number</Text>
              <Text style={styles.willsendStyle}>
                We will send you one time password (OTP)
              </Text>
              <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter mobile number"
              />
              </View>
              <TouchableOpacity style={styles.flexDirection}>
              <Image style={styles.imageStyle}
               source={require('../Assets/image/msg.png')}/>
                <Text style={styles.ChaSupport}>Chat Support</Text>
                </TouchableOpacity>
              <View>
             
              </View>
            </View>
          </>
        )}
        {active == 'singup' && <View>{}</View>}
        </ScrollView>
        <TouchableOpacity
                  style={styles.TouchableStyle}
                  onPress={() => navigation.navigate('Otp')}>
                  <Text style={styles. continueStyle}>Continue</Text>
                </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default HomeLogin;
  
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topButton: {
      width: '35%',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 10,
      marginTop:20
    },
    scrollViewContainer:{
      flexGrow:1
    },
    View: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    loginStyle: {
      color: '#fff',
    },
    RegisterStyle: {
      color: '#303030',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
    mainLogin: {
      flex: 1,
      marginHorizontal: 20,
    },
    willsendStyle:{
      color:"#303030",
      fontSize:12,
      fontWeight:"600",
      marginTop:10
    },
    inputContainer:{
      borderWidth:0.9,
      marginTop:40,
      borderColor:"#B8B8B8",
      borderRadius:10
    },
    inputStyle:{
      marginHorizontal:20
    },
    imageStyle:{
      resizeMode:"contain",
      height:25,
      width:25,
    
    },
    ChaSupport:{
      color:"#3CC3FD",
      fontWeight:"500",
      fontSize:14,
      marginLeft:10
    },
    flexDirection:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginTop:60
    },
    TouchableStyle:{
      backgroundColor:"#3CC3FD",
      height:40,
      width:"85%",
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      borderRadius:10,
      bottom:20
    },
    continueStyle:{
      color:"#fff",
      fontSize:15,
    }
  
  
  });