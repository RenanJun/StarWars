import React, {Component} from "react";
import{View, Text, StatusBar, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";

export default class Home extends Component {
    irFilmes = () => {
        this.props.navigation.navigate("Filmes");
    }
    render(){
        return(
            <View style={styles.container}>
            <Image style={{width: 310, height: 191, left: 29, marginTop: 39}} source={require('../images/starwars.png')}/>
            <TouchableOpacity onPress={this.irFilmes}>
            <View style={[styles.loading]}>
            <ActivityIndicator size="large" color="#FFFF00" />
            <Text style={styles.texto}>
                Loading...
            </Text>
          </View>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000'
    },

    loading: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        color: '#FFFFFF',
        fontSize: 12,
    }
})