import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {useState} from 'react';

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
        git
            <ScrollView horizontal={true}>
                {docColeta.map((item) => ( 
                    <View style={styles.Card}>
                        <Image key={item.id} source={item.imagem} style={styles.ImgCard}/>
                        <Text key={item.id} style={styles.NameCard}>{item.nome}</Text>
                        <Text key={item.id} style={styles.DateCard}>{item.data}</Text>
                        </View>
                    
                ))}
            </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flex: 1,
    },
    Card: {
        backgroundColor: '#ffffff',
        width: 271,
        height: 238,
        marginLeft: 24.5,
        marginRight: 24.5,
        borderRadius: 10,
        paddingTop: 26,
        alignItems: "center"
    },
    NameCard: {
        marginTop: 15,
        marginBottom: 3,
        fontSize: 32,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5'
    },
    DateCard: {
        color: '#8B8B8B',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16
    },
    ImgCard: {
        width: 120,
        height: 120
    }
});