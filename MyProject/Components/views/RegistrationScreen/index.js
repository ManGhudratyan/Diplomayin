import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

function RegistrationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    if (name.trim() === "" || surname.trim() === "" || email.trim() === "" || password.trim() === "") {
      Alert.alert("Warning!", "Please fill in all fields.");
    } else {
      navigation.navigate("TabNavigation");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>NEW ACCOUNT</Text>
      <View style={styles.inputField}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>SURNAME</Text>
        <TextInput
          placeholder="Enter your surname"
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 100,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 15,
    letterSpacing: 2,
  },
  inputField: {
    padding: 20,
  },
  label: {
    letterSpacing: 2,
    marginTop: 20,
  },
  image: {
    flex: 1
  },
  button: {
    borderRadius: 10,
    marginTop: 26,
    backgroundColor: 'black',
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default RegistrationScreen;
