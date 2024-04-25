import{View, StyleSheet, Text, Image, Dimensions} from 'react-native';

export default function Coleta(){
    return(
        <View style={styles.View}>
            <View style={styles.MainRateView}>
                <Text style={styles.QuestionText}>O que você achou do Carnaval 2024</Text>
                <View style={styles.RateView}>
                    <View style={styles.RateIconView}>
                         <Image style={styles.RateIcon} source={require('../../assets/icons/sad.png')}/>
                         <Text style={styles.RateText}>Péssimo</Text>
                    </View>
                    <View style={styles.RateIconView}>
                        <Image style={styles.RateIcon} source={require('../../assets/icons/dissatisfied.png')}/>
                        <Text style={styles.RateText}>Ruim</Text>
                    </View>
                    <View style={styles.RateIconView}>
                        <Image style={styles.RateIcon} source={require('../../assets/icons/neutral.png')}/>
                        <Text style={styles.RateText}>Neutro</Text>
                    </View>
                    <View style={styles.RateIconView}>
                        <Image style={styles.RateIcon} source={require('../../assets/icons/satisfied.png')}/>
                        <Text style={styles.RateText}>Bom</Text>
                    </View>
                    <View style={styles.RateIconView}>
                        <Image style={styles.RateIcon} source={require('../../assets/icons/very_satisfied.png')}/>
                        <Text style={styles.RateText}>Excelente</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    View:{
        flex: 1,
        backgroundColor: '#372775',
        justifyContent: 'center'
    },
    QuestionText: {
        color: '#ffffff',
        fontFamily: 'AveriaLibre_400Regular',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: '10%'
    },
    RateIcon: {
        height: Dimensions.get('screen').height * 0.25,
        width: Dimensions.get('screen').height * 0.25
    },
    RateView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: '8%'
    },
    RateIconView:{
        marginRight: '8%',
        alignItems: 'center'
    },
    MainRateView: {
        alignItems: 'center'
    },
    RateText: {
        color: '#ffffff',
        fontFamily: 'AveriaLibre_400Regular',
        fontSize: 20,
        marginTop: '5%'
    }
});