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
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Team from './src/components/Team/team';
import Login from './src/components/Login/login';
//const Stack = createStackNavigator()

const App= () => {

  return (
    <SafeAreaView >
      <View style={styles.sectionContainer}>
        <View style={styles.banner}>
          <StatusBar style="auto"></StatusBar>
          
          <Text style={styles.titulo}> TELOrganizo </Text>
        </View>
        <TareasPersonales />
        <TareasEquipo />
        <CrearTarea />
        {/* <Login /> */}{/* descomentar para hacer el inicio de sesion */}
      </View>
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
