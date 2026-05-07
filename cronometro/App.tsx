import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Cronometro from './src/components/Cronometro';
import { styles } from './src/styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Cronometro />
    </SafeAreaView>
  );
}