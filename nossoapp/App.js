import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// Screens
import Home from './src/screens/Home';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import Relatorio from './src/screens/Relatorio';
import CriarConta from './src/screens/CriarConta';

// Fonts
import{useFonts} from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'AveriaLibre-Regular': require('./assets/fonts/AveriaLibre-Regular.ttf'),
    'AveriaLibre-Bold': require('./assets/fonts/AveriaLibre-Bold.ttf'),
    'AveriaLibre-BoldItalic': require('./assets/fonts/AveriaLibre-BoldItalic.ttf'),
    'AveriaLibre-Italic': require('./assets/fonts/AveriaLibre-Italic.ttf'),
    'AveriaLibre-Light': require('./assets/fonts/AveriaLibre-Light.ttf'),
    'AveriaLibre-LightItalic': require('./assets/fonts/AveriaLibre-LightItalic.ttf'),
  });
  return (
   /*<View style={styles.container}>
      <Text>Teste do Teste</Text>
      <StatusBar style="auto" />
    </View>*/
    <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, 
              headerTitleStyle: {color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular', width: 'auto'}, 
              headerStyle: {backgroundColor: '#2B1D62', height: 65}}} initialRouteName="Nova Conta">
                <Stack.Screen name="Home" component={Home} options={{headerShown: true}}/>
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao}/>
                <Stack.Screen name="Relatorio" component={Relatorio} options={{headerShown: true}}/>
                <Stack.Screen name="Nova Conta" component={CriarConta} options={{headerShown: true}}/>
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