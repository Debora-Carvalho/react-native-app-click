import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/screens/Welcome/WelcomeScreen';
import { Login } from './src/screens/Login/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      {/* <Login /> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
