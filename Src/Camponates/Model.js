import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Colors from './Colors';
import React, {useState} from 'react';
import Button from './Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Model = ({navigation,style,onPress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Otp, setOtp] = useState('');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <View style={{alignItems:'center',width:'95%'}}>
           <Text style={styles.txt}>Enter OTP</Text>
           <Text  style={{textAlign:'center'}}>Enter the 4 digit code sent to your mobile number
           you have entered </Text>
           </View>
           
          <OTPInputView
            style={{width: '80%', height: 100}}
            pinCount={4}
             code={Otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
             onCodeChanged = {code => {setOtp(code)}}
             autoFocusOnLoad
             codeInputFieldStyle={styles.one}
             codeInputHighlightStyle={styles.two}
             onCodeFilled={code => {
              setOtp(code)
              // console.log(`Code is ${code}, you are good to go!`);
            }}
          />
              
             <Pressable style={styles.restotp}>
              <Text style={{color:Colors.primary2}}>Resend OTP</Text>
            </Pressable> 
            <Pressable
              style={[styles.button, styles.buttonClose,style]}
              onPress={onPress}>
              <Text style={styles.textStyle}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  
      <View>
    <Button onPress={() => setModalVisible(true)} backgroundColor={Colors.primary2} title='SingUp' style={[styles.btnnn,style]}/>
    </View>
 
    </View>
  );
};
export default Model;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    // margin: 20,
     backgroundColor:Colors.white,
    borderRadius: 20,
    height:400,
    width:'95%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding:15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor:Colors.primary2,
    width:'90%',
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:20
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnnn:{

    borderWidth:0,
     width:300,
   
  },
  txt:{
    fontSize:30,
    color:Colors.black
  },
  one: {
    backgroundColor: Colors.white,
    height: 50,
    width: 50,
    margin: 5,
    fontSize:30,
    borderWidth:2
  },
  restotp:{
    alignSelf:'flex-end',
    marginHorizontal:30,
    marginVertical:10
  }
});

