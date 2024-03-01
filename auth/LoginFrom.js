// import React, { useState } from 'react'; // Commented out for React Native
import React, { useState } from 'react'; // Imported from 'react-native' in React Native
import { View, Text, TextInput, Button } from 'react-native'; // Imported necessary components from 'react-native'
import { StyleSheet } from 'react-native'; // Imported StyleSheet from 'react-native'
import { useNavigation } from '@react-navigation/native';
import user from "../user"


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, like sending data to the server
    console.log({ email, password });
    navigation.navigate('HomeScreen');
  };

  const handleNavigation = () => {
    navigation.navigate('signUp');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />

    <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            required
          />

        <Button  title="Login" onPress={handleLogin} />
        <Text>
        Don't  have an account? <Text  onPress={handleNavigation} style={{ fontWeight: 'bold' }}>create an account</Text> 
      </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    Width: 430, // Numbers should not have 'px' suffix
    width: '100%',
    height:'100%',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#fff', // Use 'backgroundColor' instead of 'background'
    padding: 34,
    borderRadius: 6,
    shadowColor: '#000', // Use 'shadowColor' for box shadow
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Android shadow
  },
  heading: {
    fontSize: 24, // Adjusted font size
    fontWeight: '600', // 'fontWeight' should be a string
    color: '#333',
    marginBottom: 20, // Adjusted margin for better spacing
  },
  form: {
    display: 'grid',
    gap: 10,
    padding: 10,
  },
  label: {
    fontSize: 18, // Adjusted font size
    padding: 5, // Adjusted padding
    marginBottom: 5, // Adjusted margin for better spacing
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
 
});


export default LoginScreen;
