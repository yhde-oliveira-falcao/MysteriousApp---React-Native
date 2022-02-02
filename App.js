//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback, //Only supported on Android (not very usefull)
  Platform,
  Dimensions,
  ViewComponent,

  Image 
} from 'react-native';
import { Button, Alert, StatusBar} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


export default function App() {
  return (
    <WelcomeScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
     //alignItems: 'center',
     //justifyContent: 'center',
  },
});
