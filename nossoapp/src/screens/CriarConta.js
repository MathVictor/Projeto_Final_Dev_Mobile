import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native';

export default function CriarConta(){
    return(
        <View style={styles.View}>
            <View style={styles.TextInputView}>
                <View>
                    <Text style={styles.TextInputTitle}>E-mail</Text>
                    <TextInput style={styles.TextInputStyle} placeholder="jurandir.pereira@hotmail.com"></TextInput>
                </View>
                <View>
                    <Text style={styles.TextInputTitle}>Senha</Text>
                    <TextInput style={styles.TextInputStyle} placeholder="*********"></TextInput>
                </View>
                <View>
                    <Text style={styles.TextInputTitle}>Repetir Senha</Text>
                    <TextInput style={styles.TextInputStyle} placeholder="jurandir.pereira@hotmail.com"></TextInput>
                </View>
                <View>
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
    TextInputView: {
        marginTop: '5%'
    },
    TextInputStyle: {
        backgroundColor: '#ffffff',
        padding: 4,
        paddingLeft: '4%',
        fontFamily: 'AveriaLibre-Regular',
    },
    TextInputTitle: {
        color: 'white'
    }
});