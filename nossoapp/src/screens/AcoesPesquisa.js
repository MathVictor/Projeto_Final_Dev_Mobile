import { Dimensions, View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function App({}) {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const goModificarPesquisa = () => {

  }
  const goColeta = () => {
    navigation.navigate('Coleta');
  }
  const goRelatorio = () => {
    navigation.navigate('Relatorio');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TouchableOption}>
        <Image source={require("../../assets/icons/modificar.png")} style={styles.TitleImage} />
        <Text style={styles.TitleText}>Modificar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOption} onPress={goColeta}>
        <Image source={require("../../assets/icons/coletar.png")} style={styles.TitleImage} />
        <Text style={styles.TitleText}>Coletar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOption} onPress={goRelatorio}>
        <Image source={require("../../assets/icons/relatorio.png")} style={styles.TitleImage} />
        <Text style={styles.TitleText}>Relatório</Text>
      </TouchableOpacity>

    </View>
  );
}

const navigateColeta = () => {
  navigation.navigate('Coleta')
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    flexDirection: 'row'
  },

  TouchableOption: {
    width: Dimensions.get("screen").height * 0.4,
    height: Dimensions.get("screen").height * 0.4,
    backgroundColor: '#312464',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: '2%',
    marginRight: '2%'
  },

  TitleText: {
    marginTop: '5%',

    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  },

  TitleImage: {
    width: 50,
    height: 50
  },
});
