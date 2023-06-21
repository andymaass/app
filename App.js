import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, SafeAreaView, View, Alert, Image} from 'react-native';

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

const Login = () => {
 
  return(
        <Text>login</Text>
  );
};

const Loggedin = () => {
 
  return(
        <Text>loggedin</Text>
  );
};

const Register = () => {
 
  return(
        <Text>login</Text>
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
