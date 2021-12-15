/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import 'react-native-gesture-handler';
 import { ActivityIndicator, StyleSheet, View } from 'react-native';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
import AppView from './routes';
import { persistor, store } from './redux/store';
 
 // import {
 //   RecoilRoot
 // } from 'recoil';
 
 
 const App = () => {
     return (
         <Provider store={store}>
             <PersistGate loading={
                 <View style={styles.container}>
                     <ActivityIndicator />
                 </View>
             } persistor={persistor}>
                 <AppView />
             </PersistGate>
         </Provider>
     );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
   },
 });
 
 
 export default App;
 