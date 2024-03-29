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
     <View style={styles.sectionContainer} >
       <View /* style={styles.sectionContainer} */>
         <View style={styles.banner}>
           <StatusBar style="auto"></StatusBar>
           
           <Text style={styles.sectionTitle}> TELOrganizo </Text>
         </View>
         <TareasPersonales />
         {/* <TareasEquipo /> */}
         <Team />
         
         <CrearTarea />
         {/* <Login /> */}{/* descomentar para hacer el inicio de sesion */}
       </View>
     </View>
     
   );
 };
 
 
 const styles = StyleSheet.create({
   sectionContainer: {
     paddingLeft: 1,
     paddingRight: 1,
     paddingEnd: 1,
     backgroundColor: '#F2D7D5',
     marginBottom: 50,
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
 