import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Filmes extends Component {
    back = () => {
        this.props.navigation.navigate("Personagens");
    }
    phantom = () => {
        this.props.navigation.navigate("Phantom");
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.barra}>
                <Text style={styles.status}>
                    Luke Skywalkerv
                </Text>
                </View>
                <View style = {styles.border}/>
                <View style ={{left: 20, marginTop: -50}}>
                <TouchableOpacity onPress={this.back}>
                <Icon name = "ios-arrow-round-back" color="#FFFFFF" size={35}/>
                </TouchableOpacity>
                </View>
                <View style={{marginTop: 30}}>
                <View style={styles.borda}/>
                <View style={styles.borda}/>
                </View>
                <View>
                    <View style={styles.pageD}>
                    <Text style={styles.titulo}>
                        Birth Year
                    </Text>
                    <Text style={styles.texto}>
                        19BBY
                    </Text>
                    </View>
                    <View style={styles.pageD}>
                    <Text style={styles.titulo}>
                        Specy
                    </Text>
                    <Text style={styles.texto}>
                        Human
                    </Text>
                    </View>
                    <View style={styles.pageE}>
                    <Text style={styles.titulo}>
                        Gender
                    </Text>
                    <Text style = {styles.texto}>
                        Male
                    </Text>
                    </View>
                    <View style={{left: 200, marginTop: 30}}>
                    <Text style={styles.titulo}>
                        Homeworld
                    </Text>
                    <Text style={styles.texto}>
                        Tatooine
                    </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.pageD}>
                    <Icon name = "ios-videocam" size={25} color = '#FFFF00'/>
                    </View>
                </View>
                    <View style={{left:60, marginTop: -26}}>
                    <Text style={{color: '#FFFF00', fontWeight: 'bold', fontSize: 18}}>
                        Films
                    </Text>
                    </View>
                    <View style={styles.pageD}>
                        <Text style={styles.topicos}>
                            The Empire Strikes Back
                        </Text>
                        <View style={styles.borderT}/>
                        <View style={{marginTop: 20}}>
                        <Text style={styles.topicos}>
                            Revenge of the Sith
                        </Text>
                        <View style={styles.borderT}/>
                        </View>
                        <TouchableOpacity onPress={this.phantom}>
                        <View style={{marginTop: 20}}>
                        <Text style={styles.topicos}>
                            The Phantom Menace
                        </Text>
                        <View style={styles.borderT}/>
                        </View>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000',
    },

    barra:{
        marginTop: 45,
        alignItems: 'center', 
    },

    border: {
        marginTop: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: '#FFFF00'
    },

    borda:{
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFF00'
    },

    status:{
        color: '#FFFF00',
        fontSize: 18,
        fontWeight: 'bold'
    },

    titulo: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    page:{
        flex: 1,  
    },
    
    pageD: {
        marginTop: 30,
        left: 30
    },
    
    pageE: {
        marginTop: -92,
        left: 200,
    },

    texto: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    topicos: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    borderT: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },
})