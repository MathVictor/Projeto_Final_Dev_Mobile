import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// Screens
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';


export default function App() {
  return (
   /*<View style={styles.container}>
      <Text>Teste do Teste</Text>
      <StatusBar style="auto" />
    </View>*/
    <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, 
              headerTitleStyle: {color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular'}, 
              headerStyle: {backgroundColor: '#2B1D62', height: 65}}} initialRouteName="AgradecimentoParticipacao">
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
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