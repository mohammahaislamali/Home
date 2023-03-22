import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

const Home = ({navigation}) => {
  const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 15,
    };
    
mailRes = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


  return (
    <>
   
   <Formik
      initialValues={{ 
        name: '',
        lastname:'',
        email: '', 
        password: '',
        confirmPassword:'',
        number:'',
      }}
      
      onSubmit={() =>navigation.navigate('Wellcome')}
      validationSchema={yup.object().shape({
        name: yup
          .string()
          .required('Please, provide your name!'),
        lastname:yup  
        .string()
        .required('please,provide your lastname!'),
        email:yup
          .string()
          .email()
          // .matches(mailRes,'check your mail')
          .required(),
        password: yup
          .string()
          .min(8,'min 8 character')
          .max(10, 'Password should not excced 10 chars.')
          .required(),
          number: yup
          .string()
          .min(10,'min 10 character')
          .max(10, 'number should not excced 10 chars.')
          .required(),
          confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match')
          .required('Confirm password is required'),
      })
    }
     >
        {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
        <View style={styles.formContainer}>
          <TextInput
            value={values.name}
            style={[inputStyle,{borderColor : touched.name && errors.name  ? "red" : "gray"}]}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder="Name"
          />
          {touched.name && errors.name &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
          } 
               <TextInput
            value={values.lastname}
            style={[inputStyle,{borderColor: touched.lastname && errors.lastname ? "red" : "gray"}]}
            onChangeText={handleChange('lastname')}
            placeholder="lastname"
            onBlur={() => setFieldTouched('lastname')}
            />
          {touched.password && errors.password &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.lastname}</Text>
          }           
          <TextInput
            value={values.email}
            style={[inputStyle,{borderColor:touched.email && errors.email ? "red" : 'gray'}]}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="E-mail"
          />
          {touched.email && errors.email &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
          }
          <TextInput
            value={values.password}
            style={[inputStyle,{borderColor: touched.password && errors.password ? "red" : "gray"}]}
            onChangeText={handleChange('password')}
            placeholder="Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          {touched.password && errors.password &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
          }
            <TextInput
            value={values.number}
            style={[inputStyle,{borderColor: touched.number && errors.number ? "red" : "gray"}]}
            onChangeText={handleChange('number')}
            placeholder="Mobile Number"
            onBlur={() => setFieldTouched('number')}
            secureTextEntry={false}
            keyboardType='number-pad'
          />
          {touched.number && errors.number &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.number}</Text>
          }
           <TextInput
            value={values.confirmPassword}
            style={[inputStyle,{borderColor: touched.confirmPassword && errors.confirmPassword ? "red" : "gray"}]}
            onChangeText={handleChange('confirmPassword')}
            placeholder="confirmPassword"
            onBlur={() => setFieldTouched('confirmPassword')}
            secureTextEntry={false}
            keyboardType='number-pad'
          />
          {touched.confirmPassword && errors.confirmPassword &&
            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.confirmPassword}</Text>
          }
           
          <Button
            color="#3740FE"
            title='Submit'
            onPress={handleSubmit}

          />
        </View>
      )}
    </Formik>
   
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  formContainer: {
      padding: 50 ,
      marginTop:20
    },
});
console.disableYellowBox = true;