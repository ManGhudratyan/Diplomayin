import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert(
        "Warning!", "Please fill in all fields.",
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    } else {
      navigation.navigate('TabNavigation');
    }
  };

  const handleRegistration = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {/* <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.noAccountText}>Don't have an account?
        <Text style={styles.registerLink} onPress={handleRegistration}> Register here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'right',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  noAccountText: {
    marginTop: 20,
    color: '#555',
    fontSize: 16
  },
  registerLink: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
});

export default LoginScreen;
