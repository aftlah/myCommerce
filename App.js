import { StyleSheet, Text, View } from 'react-native';
import Main from './src/navigation/index';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}



