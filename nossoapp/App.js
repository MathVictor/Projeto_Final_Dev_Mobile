import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

// Screens
import Home from './src/screens/Home';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import Relatorio from './src/screens/Relatorio';
import CriarConta from './src/screens/CriarConta';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Login from './src/screens/Login';
import Coleta from './src/screens/Coleta';
import RecuperacaoSenha from './src/screens/RecuperacaoSenha';

// Fonts
import {useFonts, AveriaLibre_300Light, AveriaLibre_300Light_Italic, AveriaLibre_400Regular, 
  AveriaLibre_700Bold, AveriaLibre_700Bold_Italic } from '@expo-google-fonts/averia-libre';

export default function App() {
  const [fontsLoaded] = useFonts({
    AveriaLibre_300Light,
    AveriaLibre_300Light_Italic,
    AveriaLibre_400Regular,
    AveriaLibre_700Bold,
    AveriaLibre_700Bold_Italic
  });
  return (
   /*<View style={styles.container}>
      <Text>Teste do Teste</Text>
      <StatusBar style="auto" />
    </View>*/
    <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, 
              headerTitleStyle: {color: 'white', fontSize: 25, fontFamily: 'AveriaLibre_400Regular', width: 'auto'}, 
              headerStyle: {backgroundColor: '#2B1D62', height: 65}}} initialRouteName="Recuperação de senha">
                <Stack.Screen name="Home" component={Home} options={{headerShown: true}}/>
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao}/>
                <Stack.Screen name="Relatorio" component={Relatorio} options={{headerShown: true}}/>
                <Stack.Screen name="Nova Conta" component={CriarConta} options={{headerShown: true}}/>
                <Stack.Screen name="Ações de Pesquisa" component={AcoesPesquisa} options={{headerShown: true}}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Coleta" component={Coleta}/>
                <Stack.Screen name="Recuperação de senha" component={RecuperacaoSenha} options={{headerShown: true}}/>
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