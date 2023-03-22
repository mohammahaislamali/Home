import React from "react";
import { View, Text ,SafereaView} from "react-native";
import IntlPhoneInput from "react-native-intl-phone-input";
const Countrycode=()=> {
  
  onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
  };
  
  return (
    <View style={{borderWidth:2,marginVertical:20,borderRadius:10,width:'98%'}}>
    <IntlPhoneInput 
     phoneNumber=''
     placeholder='phone number'
     style={{}}
     renderAction={() => <Text></Text>} />
  </View>

  );
}

export default Countrycode