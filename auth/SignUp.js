import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet } from 'react-native';
import { useNavigation, Picker } from '@react-navigation/native';
 import CompanySelect from './components/companyName'

const SignUp = () => {

  // handels the linkes
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  

  const handleSignUp = () => {
    // Perform sign-up logic here, like sending data to the server
    console.log({ name, email, phoneNumber, companyName, otp });
    navigation.navigate('LoginScreen');
  };



  const handleSendOtp = () => {
    // Send OTP logic, for demonstration, just setting a random number
    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(randomOtp);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Otp verification logic
    console.log('Verifying OTP:', otp);
    // You can add your OTP verification logic here
  };

  return (
    <ScrollView >
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            required
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />

          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            required
          />

          <Text style={styles.label}>Company Name:</Text>
          {/* <TextInput
            style={styles.input}
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            required
          /> */}
         <CompanySelect/>
 
          {!isOtpSent ? (
            <Button title="Generate OTP" onPress={handleSendOtp} />
          ) : (
            <>
              <Text style={styles.label}>Enter OTP:</Text>
              <TextInput
                style={styles.input}
                value={otp}
                onChangeText={(text) => setOtp(text)}
                required
              />
              <Button title="Verify OTP" onPress={handleVerifyOtp} />
            </>
          )}


          <Button title="Sign Up" onPress={handleSignUp} />

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#fff', // 'background' should be 'backgroundColor'
    padding: 34, // Removed 'px' suffix
    borderRadius: 6, // 'borderradius' should be 'borderRadius'
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // 'boxshadow' should be 'elevation'
  },
  heading: {
    position: 'relative', // 'fontweight' should be 'fontWeight'
    fontSize: 36,
    fontWeight: '600', // 'fontweight' should be 'fontWeight'
    color: '#333',
  },
  form: {
    display: 'grid',
    gap: 10,
  },
  label: {
    fontSize: 26,
    padding: 10, // Removed '5' and 'px' suffix
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
});


export default SignUp;
