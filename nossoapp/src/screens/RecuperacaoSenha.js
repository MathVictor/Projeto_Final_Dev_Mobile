import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native';
import { useState } from 'react';
export default function RecuperacaoSenha(){
    const [email,setEmail] = useState('');
    const [inputError, setInputError] = useState('');
    const regexEmail = /^[A-Za-z0-9.+_-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;
    const formsVerificationCadastro = () => {
    if(regexEmail.test(email) == true){
        let regEmail = email;
        setInputError(' ');
    }
        else{            
            if (regexEmail.test(email) == false) {
                setInputError('E-mail parece ser inválido');
            }
        }
    }
    return(
        <View style={styles.View}>
            <View style={styles.FormsView}>
                <Text style={styles.TextInputTitle}>E-mail</Text>
                <TextInput style={styles.TextInputStyle} placeholder="jurandir.pereira@hotmail.com" value={email} onChangeText={setEmail}></TextInput>
                <Text style={styles.ErrorText}>{inputError}</Text>
            </View>
            <View>
                <Pressable style={styles.ButtonCadastrar} onPress={formsVerificationCadastro} >
                    <Text style={styles.ButtonCadastrarText}>CADASTRAR</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#372775',
        paddingRight: '20%',
        paddingLeft: '20%',
        justifyContent: 'center'
    },
    TextInputTitle: {
        color: 'white',
        fontFamily: 'AveriaLibre_400Regular'
    },
    TextInputStyle: {
        backgroundColor: '#ffffff',
        padding: 2,
        paddingLeft: '4%',
        fontFamily: 'AveriaLibre_400Regular'
    },
    FormsView:{
        marginBottom: '8%'
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
    },
    ErrorText: {
        color: '#FD7979',
        fontFamily: 'AveriaLibre_400Regular',
        marginTop: '1%'
    },
})