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
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 //alert("start");
 const getData = async () => {
  try {
    let url = 'http://localhost:8000';
    
    const response = await fetch(url);
    
    const json = await response.json();
    
    setData(json.movies);

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
  <Text>register</Text>
  <Register/>
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
