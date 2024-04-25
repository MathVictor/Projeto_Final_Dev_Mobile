import {Dimensions, View, Pressable, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { TextInput } from 'react-native-gesture-handler';

let docColeta = [
    {
        nome: "SECOMP 2023",
        id: "secomp2023",
        dados: {
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0
        },
        data: "10/10/2023",
        imagem: require('../../assets/imgs/secomp.png')
    },
    {
        nome: "UBUNTU 2022",
        id: "ubuntu2022",
        dados: {
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0
        },
        data: "05/06/2022",
        imagem: require('../../assets/imgs/ubuntu.png')
    },
    {
        nome: "MENINAS CPU",
        id: "meninascpu",
        dados: {
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0
        },
        data: "01/04/2022",
        imagem: require('../../assets/imgs/meninas_cpu.png')
    },
    {
        nome: "COTB",
        id: "cotb",
        dados: {
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0
        },
        data: "01/04/2022",
        imagem: require('../../assets/imgs/cotb.png')
    },
    {
        nome: "Carnaval",
        id: "carnaval",
        dados: {
            pessimo: 0,
            ruim: 0,
            neutro: 0,
            bom: 0,
            excelente: 0
        },
        data: "15/02/2020",
        imagem: require('../../assets/imgs/carnaval.png')
    },
    
]

export default function Home(){

    return(
    <View style={styles.View}>
        <View style={styles.ViewInputPesquisa}>
            <Icon style={{marginLeft: 10, marginTop: 2}} name='search' color='#999999' size={18}/>
            <TextInput style={styles.InputPesquisa} placeholder="Insira o termo de busca..." placeholderTextColor='#8b8b8b'/>
        </View>
        <View style={styles.ViewScrollView}>
            <ScrollView horizontal={true}>
                {docColeta.map((item) => ( 
                    <View key={item.id} style={styles.Card}>
                        <Image source={item.imagem} style={styles.ImgCard}/>
                        <Text style={styles.NameCard}>{item.nome}</Text>
                        <Text style={styles.DateCard}>{item.data}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
        <View style={styles.ViewButtonPesquisa}>
            <Pressable style={styles.ButtonPesquisa}>
                <Text style={styles.ButtonPesquisaText}>NOVA PESQUISA</Text>
            </Pressable>
        </View>


    </View>
    );
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flex: 1,
    },
    ViewInputPesquisa: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',

        marginTop: 18,
        marginRight: '3%',
        marginLeft: '3%',
        marginBottom: '2.8%',

        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 3,
        paddingBottom: 3
    },
    InputPesquisa: {
        color: '#8b8b8b',
        fontFamily: 'AveriaLibre_400Regular',
        justifyContent: "center",
        marginLeft: 10,
        marginTop: 3
    },
    ViewScrollView: {
        flex: 0.7,
    },
    Card: {
        backgroundColor: '#ffffff',
        width: Dimensions.get("screen").width * 0.22,
        height: '100%',
        marginLeft: 18.5,
        marginRight: 18.5,
        borderRadius: 10,
        paddingTop: 18,
        alignItems: "center"
    },
    NameCard: {
        marginTop: 15,
        marginBottom: 3,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'AveriaLibre_400Regular',
        color: '#3F92C5'
    },
    DateCard: {
        color: '#8B8B8B',
        fontFamily: 'AveriaLibre_400Regular',
        fontSize: 10
    },
    ImgCard: {
        width: 70,
        height: 70
    },
    ViewButtonPesquisa: {
        flex: 0.3
    },
    ButtonPesquisa: {
        alignItems: "center",
        backgroundColor: "#49B976",
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        paddingTop: '0.5%',
        paddingBottom: '0.5%'
    },
    ButtonPesquisaText: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'AveriaLibre_400Regular',
        color: '#FFFFFF'
    }
});