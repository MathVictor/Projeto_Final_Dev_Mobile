import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import {useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const regexEmail = /^[A-Za-z0-9.+_-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/

  const formsVerification = () => {
    if (regexEmail.test(email) == true && password != '') {

      let regEmail = email;
      let regPassword = password;
      setInputError(' ');

    } else {

      if (regexEmail.test(email) == false && password == '') {
        setInputError('E-mail e senha inválidos');
      } else if (password == '') {
        setInputError('Senha é campo obrigatório');
      } else if (regexEmail.test(email) == false) {
        setInputError('E-mail inválido');
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.ViewTitle}>
        <Text style={styles.TitleText}>Satisfying.you</Text>
        <Image source={require("../../assets/icons/smile.png")} style={styles.TitleImage} />
      </View>
      
      <View style={styles.ViewFormEmail}>
        <Text style={styles.FormEmailText}>Email</Text>
        <TextInput style={styles.FormEmail } placeholder="jurandir.pereira@hotmail.com" placeholderTextColor='#8b8b8b'value={email} onChangeText={setEmail}/>
      </View>

      <View style={styles.ViewFormPassword}>
        <Text style={styles.FormPasswordText}>Senha</Text>
        <TextInput style={styles.FormPassword} placeholder="*********" placeholderTextColor='#8b8b8b' value={password} onChangeText={setPassword} secureTextEntry={true}/>
        <Text style={styles.InvalidText}>{inputError}</Text>
      </View>

      <View style={styles.ViewButtonLogin}>
        <Pressable style={styles.ButtonLogin} onPress={formsVerification}>
          <Text style={styles.ButtonLoginText}>Entrar</Text>
        </Pressable>
      </View>

      <View style={styles.ViewButtonOthers}>
        <Pressable style={styles.ButtonCreateAccount}>
          <Text style={styles.ButtonCreateAccountText}>Criar minha conta</Text>
        </Pressable>
        <Pressable style={styles.ButtonForgotPassword}>
          <Text style={styles.ButtonForgotPasswordText}>Esqueci minha senha</Text>
        </Pressable>
      </View>
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

  ViewTitle: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },

  TitleText: {
    marginRight: '2%',

    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  },

  TitleImage: {
    width: 50,
    height: 50
  },

  ViewFormEmail: {
    flex: 0.2,
    justifyContent: 'center'
  },

  FormEmail: {
    backgroundColor: '#FFFFFF',
    color: '#8b8b8b',
    fontFamily: 'AveriaLibre_400Regular',
    justifyContent: "center",
    marginTop: 3,
    padding: 2,
    paddingLeft: '4%'
  },

  FormEmailText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  },

  ViewFormPassword: {
    flex: 0.2,
    justifyContent: 'center',
  },
  FormPassword: {
    backgroundColor: '#FFFFFF',
    color: '#8b8b8b',
    fontFamily: 'AveriaLibre_400Regular',
    justifyContent: "center",
    marginTop: 3,
    padding: 2,
    paddingLeft: '4%'
  },
  FormPasswordText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  },
  InvalidText: {
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FD7979'
  },

  ViewButtonLogin: {
    flex: 0.2
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
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  },
  ViewButtonOthers: {
    flex: 0.3,
    justifyContent: 'flex-end',
    paddingBottom: '5%'
  },
  ButtonCreateAccount: {
    alignItems: "center",
    backgroundColor: "#419ED7",
    marginTop: '3%',
    paddingTop: '0.5%',
    paddingBottom: '0.5%'
  },
  ButtonCreateAccountText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  },
  ButtonForgotPassword: {
    alignItems: "center",
    backgroundColor: "#B0CCDE",
    marginTop: '3%',
    paddingTop: '0.5%',
    paddingBottom: '0.5%'
  },
  ButtonForgotPasswordText: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'AveriaLibre_400Regular',
    color: '#FFFFFF'
  }
});
