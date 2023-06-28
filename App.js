import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, ActivityIndicator, FlatList, SafeAreaView, View, Alert, Image} from 'react-native';
import React, { useState, useEffect } from 'react';


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

  const [Benutzername, setBenutzername] = useState('');
  const [Passwort, setPasswort] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getData = async () => {
    try {
      let url = 'http://localhost/login.php?Bentzername=&Passwort=';
      
      const response = await fetch(url);
      
      const json = await response.json();
      
      alert (json);
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  
  getData();

  console.log('Benutzername:', Benutzername);
  console.log('Passwort:', Passwort);
};

return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Benutzername"
      value={Benutzername}
      onChangeText={text => setBenutzername(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Passwort"
      secureTextEntry
      value={Passwort}
      onChangeText={text => setPasswort(text)}
    />
    <Button title="Anmelden" onPress={getData} />
  </View>
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
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 //alert("start");
 const getData = async () => {
  try {
    let url = 'http://localhost:8000/register.php';
    
    const response = await fetch(url);
    
    const json = await response.json();
    
    alert (json);
    //setData(json.movies);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

getData();

return (
  <View>
    {isLoading ? (
      <ActivityIndicator />
    ) : (
      <View>
           <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        )}
      />
      </View>
      
    )}
  </View>
);
};
  

const Separator = () => <View style={styles.separator} />;






export default function App() {
  return (
  <SafeAreaView style={styles.container}>

  <View>
  <Text>Login</Text>
  <Login/>
  </View>  
    
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
