import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/screens/Welcome/WelcomeScreen';
import { Login } from './src/screens/Login/LoginScreen';
import { SelectProfile } from './src/screens/SelectProfile/SelectProfileScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      <Login />
      {/* <SelectProfile /> */}

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
