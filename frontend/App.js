/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CrearTarea from './src/components/CrearTareas';
import TareasEquipo from './src/components/tareasEquipo';
import TareasPersonales from './src/components/tareasPersonales';
const App= () => {

  return (
    
    <SafeAreaView >
      <View style={styles.banner}>
        <StatusBar style="auto"></StatusBar>
        
        <Text style={styles.titulo}> TELOrganizo </Text>
      </View>
      <TareasPersonales />
      <TareasEquipo />
      <CrearTarea />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  banner: {
    marginTop: 1,
    padding: 10,
    backgroundColor: '#e8eaf6',
    fontSize: 24,
  },
});

export default App;
