import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native';
import {useState} from 'react';

export default function CriarConta(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [inputError, setInputError] = useState('');
    const regexEmail = /^[A-Za-z0-9.+_-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;

    const formsVerificationCadastro = () => {
        if(regexEmail.test(email) == true && password != ''){
            let regEmail = email;
            let regPassword = password;
            setInputError(' ');
        }
            else{            
                if (regexEmail.test(email) == false && password == '') {
                    setInputError('E-mail e senha inválidos');
                } else if (password == '') {
                    setInputError('Senha é campo obrigatório');
                } else if (confirmPassword == ''){
                    setInputError('Confirmar a Senha é campo obrigatório');
                } else if (password != confirmPassword && confirmPassword != '' && password != ''){
                    setInputError('As senhas não são iguais');
                } else if (regexEmail.test(email) == false) {
                    setInputError('E-mail inválido');
                }
            }
    }

    return(
        <View style={styles.View}>
            <View style={styles.TextInputView}>
                <View>
                    <Text style={styles.TextInputTitle}>E-mail</Text>
                    <TextInput style={styles.TextInputStyle} placeholder="jurandir.pereira@hotmail.com" value={email} onChangeText={setEmail}></TextInput>
                </View>
                <View style={styles.FormStyle}>
                    <Text style={styles.TextInputTitle}>Senha</Text>
                    <TextInput style={styles.TextInputStyle} placeholder="*********" value={password} onChangeText={setPassword}></TextInput>
                </View>
                <View style={styles.FormStyle}>
                    <Text style={styles.TextInputTitle}>Repetir Senha</Text>
                    <TextInput style={styles.TextInputStyle} placeholder="*********" value={confirmPassword} onChangeText={setConfirmPassword}></TextInput>
                    <Text style={styles.ErrorText}>{inputError}</Text>
                </View>
                <View>
                <Pressable style={styles.ButtonCadastrar} onPress={formsVerificationCadastro} >
                    <Text style={styles.ButtonCadastrarText}>CADASTRAR</Text>
                </Pressable>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#372775',
        paddingRight: '20%',
        paddingLeft: '20%'
    },
    FormStyle: {
        marginTop: '2%'
    },
    TextInputView: {
        marginTop: '5%'
    },
    TextInputStyle: {
        backgroundColor: '#ffffff',
        padding: 2,
        paddingLeft: '4%',
        fontFamily: 'AveriaLibre_400Regular',
    },
    TextInputTitle: {
        color: 'white'
    },
    ErrorText: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre_400Regular'
    },
    ButtonCadastrar: {
        alignItems: "center",
        backgroundColor: "#49B976",
        marginTop: '4%',
        paddingTop: '1.5%',
        paddingBottom: '1.5%'
    },
    ButtonCadastrarText: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'AveriaLibre_400Regular',
        color: '#FFFFFF'
    }
});