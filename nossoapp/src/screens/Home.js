import {View, StyleSheet, Text} from 'react-native';
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
        imagem: ""
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
        imagem: ""
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
        imagem: ""
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
        imagem: ""
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
        imagem: ""
    },
    
]

export default function Home(){

    return(
    <View style={styles.View}>
        <Text>Teste Teste Teste</Text>
        <Text>Tamo na merda</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flex: 1,
    },
});