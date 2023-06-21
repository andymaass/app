import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, SafeAreaView, View, Alert, Image} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Startseiten Komponente


const Startseite = () => {
 
  return(
    <View>
    <Text style={styles.title}>Willkommen in der Schullapp</Text>
      <StatusBar style="auto" />
 

  <Separator />

  
  <Image
      style={styles.logo}
  
      source={{
        uri: 'https://blog.dgq.de/wp-content/uploads/2016/04/Kopf_Illustration-1.jpg',
      }}
    />
 

  <Separator />

  
    <Text style={styles.title}>
      Hier kannst du dich anmelden oder registrieren.
    </Text>
      
      <Button
        title="Login"
        onPress={() => Alert.alert('Left button pressed')}
      />
      <Button
        title="Registrieren"
        onPress={() => Alert.alert('Right button pressed')}
      />
  
  </View>
  );
};


//Login Komponente


const Login = () => {
 
  return(
        <Text>login</Text>
  );
};


//Angemldet Komponente

const Loggedin = () => {
 
  return(
        <Text>loggedin</Text>
  );
};


//Registriert Komponente


const Register = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleRegistration = async () => {
    try {
      // JSON-Objekt erstellen
      const data = {
        id: id,
        username: username,
        password: password,
        name: name,
        birthdate: birthdate
      };

      // Daten als JSON in Datei speichern
      await AsyncStorage.setItem('Register.json', JSON.stringify(data));
      alert('Registrierung erfolgreich!');
    } catch (error) {
      alert('Fehler beim Speichern der Daten.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        placeholder="Benutzername"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Passwort"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Geburtsdatum"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <Button title="Registrieren" onPress={handleRegistration} />
    </View>
  );
};
 
  

const Separator = () => <View style={styles.separator} />;






export default function App() {
  return (
  <SafeAreaView style={styles.container}>

  <Register/>
    
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    width: 200,
    height: 86,
    
  },
});
