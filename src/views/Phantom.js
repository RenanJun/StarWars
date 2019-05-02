import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";

export default class Filmes extends Component {
    back = () => {
        this.props.navigation.navigate("Filmes");
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.barra}>
                <Text style={styles.status}>
                    The Phantom Menace
                </Text>
                </View>
                <View style = {styles.border}/>
                <View style ={{left: 20, marginTop: -50}}>
                <TouchableOpacity onPress={this.back}>
                <Icon name = "ios-arrow-round-back" color="#FFFFFF" size={35}/>
                </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.page}>
                    <Text style={styles.titulo}>
                        Director
                    </Text>
                    <Text style={styles.texto}>
                        George Lucas
                    </Text>
                    </View>
                    <View style={styles.page}>
                    <Text style={styles.titulo}>
                        Producer
                    </Text>
                    <Text style={styles.texto}>
                        Rick McCallum
                    </Text>
                    </View>
                    <View style={styles.page}>
                    <Text style={styles.titulo}>
                        Release Date
                    </Text>
                    <Text style = {styles.texto}>
                        19-05-1999
                    </Text>
                    </View>
                </ScrollView>
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

    status:{
        color: '#FFFF00',
        fontSize: 18,
        fontWeight: 'bold'
    },

    titulo: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    
    page: {
        marginTop: 30,
        left: 200
    },

    texto: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    }

})