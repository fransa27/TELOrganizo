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
import TareasEquipo from './src/components/Team/tareasEquipo';
import TareasPersonales from './src/components/tareasPersonales';
import Team from './src/components/Team/team';
const App= () => {

  return (
    <SafeAreaView >
      <TareasPersonales />
      <TareasEquipo />
      <CrearTarea />
      <Team />
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
});

export default App;
