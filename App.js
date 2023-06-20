import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, SafeAreaView, View, Alert, Image} from 'react-native';

const startseite = () => {
 
  return(
        <Text>startseite</Text>
  );
};

const login = () => {
 
  return(
        <Text>login</Text>
  );
};

const loggedin = () => {
 
  return(
        <Text>loggedin</Text>
  );
};

const register = () => {
 
  return(
        <Text>login</Text>
  );
};

const DisplayAnImage = () => {
  return (
    <Image
        style={styles.logo}
        source={{
          uri: 'https://blog.dgq.de/wp-content/uploads/2016/04/Kopf_Illustration-1.jpg',
        }}
      />
  );
  };

const Separator = () => <View style={styles.separator} />;


export default function App() {
  return (
  <SafeAreaView style={styles.container}>

    <View>
      <Text style={styles.title}>Willkommen in der Schullapp</Text>
        <StatusBar style="auto" />
    </View>    

    <Separator />

    <View>
    <Image
        style={styles.logo}
        source={{
          uri: 'https://blog.dgq.de/wp-content/uploads/2016/04/Kopf_Illustration-1.jpg',
        }}
      />
    </View>

    <Separator />

    <View>
      <Text style={styles.title}>
        Hier kannst du dich anmelden oder registrieren.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Login"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Registrieren"
          onPress={() => Alert.alert('Right button pressed')}
        />
    </View>
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
