import { Dimensions, View, Text, TouchableOpacity, Pressable, Image, StyleSheet } from 'react-native';
import {useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const defaultImage = require('../../assets/imgs/carnaval.png');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [nameInputError, setNameInputError] = useState('');
  const [dateInputError, setDateInputError] = useState('');
  const [urlFoto, setUrlFoto] = useState(defaultImage);

  const regexDate = /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:0?[1-9]|1[0-2])\4(?:1[6-9]|[2-9]\d)?\d{2}$/;


  const nameVerification = () => {
    //Caso: Nome está vazio
    console.log( {name} )
    if (name == '') {
      setNameInputError('Preencha um nome da pesquisa');

    //Caso: Nome correto
    } else {
      setNameInputError(' ');
    }
  }

  const dateVerification = (value) => {
    //Caso: Data vazia
    console.log( {date} );
    if (date == '') {
      
      setDateInputError('Preencha a data');

    //Caso: Data em formato errado
    } else if (regexDate.test(date) == false && date != '') {
      setDateInputError('O formato da Data está errada! Digite: dd/mm/aaaa');
    } else {
      setDateInputError(' ');
    }
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.ViewFormName}>
        <Text style={styles.FormNameText}>Nome</Text>
        <TextInput style={styles.FormName } value={name} onChangeText={ setName }/>
        <Text style={styles.InvalidText}>{nameInputError}</Text>
      </View>

      <View style={styles.ViewFormDate}>
        <Text style={styles.FormDateText}>Data</Text>
        <View style={styles.FormDateContainer}>
          <TextInput style={styles.FormDate} value={date} onChangeText={ setDate } />
          <Image source={require('../../assets/icons/calendar.png')} style={{width: 20, height: 20}}/>
        </View>
        <Text style={styles.InvalidText}>{dateInputError}</Text>
      </View>

      <View style={styles.ViewFormImage}>
        <Text style={styles.FormImageText}>Imagem</Text>
        <TouchableOpacity style={styles.FormImage}>
          <Image style={styles.FormImagePreview} source = {defaultImage} />
        </TouchableOpacity>
        
        
      </View>

      <View style={styles.ViewButtonLogin}>
        <Pressable style={styles.ButtonLogin} onPress={() => { nameVerification(); dateVerification(); }}>
          <Text style={styles.ButtonLoginText}>Salvar</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.ViewDelete}>
          <Image source={require('../../assets/icons/garbage.png')} style={styles.DeleteIcon} />
          <Text style={styles.DeleteText}>Apagar</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#372775',
    paddingTop: 8,
    paddingLeft: '20%',
    paddingRight: '20%'
  },

  ViewFormName: {
    flex: 0.2,
    justifyContent: 'center'
  },

  FormName: {
    backgroundColor: '#FFFFFF',
    color: '#8b8b8b',
    fontFamily: 'AveriaLibre-Regular',
    justifyContent: "center",
    marginTop: 3,
    padding: 4,
    paddingLeft: '4%'
  },

  FormNameText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  },

  ViewFormDate: {
    flex: 0.2,
    justifyContent: 'center',
  },
  FormDate: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    color: '#8b8b8b',
    fontFamily: 'AveriaLibre-Regular',
    justifyContent: "center",
    marginTop: 3,
    padding: 4,
    paddingLeft: '4%'
  },
  FormDateContainer: {
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center'

  },
  FormDateText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  },
  InvalidText: {
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979'
  },

  ViewFormImage: {
    flex: 0.25,
    justifyContent: 'center',
    paddingTop: '3%'
  },
  FormImage: {
    width: '48%',
    height: Dimensions.get("screen").height * 0.20,

    backgroundColor: '#FFFFFF',
    color: '#8b8b8b',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 3,
    padding: 4,
    paddingLeft: '4%'
  }, 
  
  FormImageText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  },

  FormImagePreview: {
    width: Dimensions.get("screen").height * 0.12,
    height: Dimensions.get("screen").height * 0.12
  },

  ViewButtonLogin: {
    flex: 0.3,
    justifyContent: 'flex-end',
    paddingBottom: '5%'
  },
  ButtonLogin: {
    alignItems: "center",
    backgroundColor: "#49B976",
    marginTop: '3%',
    paddingTop: '1.5%',
    paddingBottom: '1.5%'
  },
  ButtonLoginText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  },

  ViewDelete: {
    position: 'absolute',
    width: Dimensions.get("screen").width,
    left: Dimensions.get("screen").width * 0.43,
    bottom: Dimensions.get("screen").height * 0.04,

    alignItems: 'center',
    justifyContent: 'center'
  },
  DeleteIcon: {
    width: Dimensions.get("screen").height * 0.1,
    height: Dimensions.get("screen").height * 0.1
  },
  DeleteText: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  }
});
