import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

export default function Relatorio(){
    return(
        <View style={styles.View}>
            <View style={styles.RelatorioImageView}>
                <Image source={require('../../assets/imgs/relatorio.png')} style={styles.Relatorioimage}/>
            </View>
            <View style={styles.LegendView}>
                <View style={styles.LegendItem}>
                    <Image source={require('../../assets/imgs/yellow.png')} style={styles.LegendImage}/>
                    <Text style={styles.LegendItemText}>
                        Excelente
                    </Text>
                </View>
                <View style={styles.LegendItem}>
                    <Image source={require('../../assets/imgs/blue.png') } style={styles.LegendImage}/>
                    <Text style={styles.LegendItemText}>
                        Bom
                    </Text>
                </View>
                <View style={styles.LegendItem}>
                    <Image source={require('../../assets/imgs/green.png')} style={styles.LegendImage}/>
                    <Text style={styles.LegendItemText}>
                        Neutro
                    </Text>
                </View>
                <View style={styles.LegendItem}>
                    <Image source={require('../../assets/imgs/red.png')} style={styles.LegendImage}/>
                    <Text style={styles.LegendItemText}>
                        Ruim
                    </Text>
                </View>
                <View style={styles.LegendItem}>
                    <Image source={require('../../assets/imgs/cyanblue.png')} style={styles.LegendImage}/>
                    <Text style={styles.LegendItemText}>
                        Péssimo
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#372775',
        flexDirection: 'row',
        alignItems: 'center'
    },
    LegendView: {
        flex: 0.4,
        alignItems: 'flexEnd'
    },
    RelatorioImageView: {
        flex: 0.6,
        alignItems: 'center'
    },
    Relatorioimage: {
        height: Dimensions.get("screen").height * 0.75,
        width: Dimensions.get("screen").height * 0.75
    },
    LegendImage: {
        height: Dimensions.get("screen").height * 0.07,
        width: Dimensions.get("screen").height * 0.07,
        marginBottom: '5%'
    },
    LegendItem: {
        flexDirection: 'row'
    },
    LegendItemText: {
        marginLeft: '3%',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: '#ffffff'
    }
});