import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from "react-native-gesture-handler";

export default class Filmes extends Component {
    constructor(){
        super();
        this.state = {
            person: []
        }
    }
    buttonF = () => {
        this.props.navigation.navigate("Filmes");
    }

    componentDidMount() {
        this.cartaz();
    }
    
    cartaz(){

        fetch('https://swapi.co/api/films/1')
        .then(resposta => resposta.json())
        .then(json => this.setState({person: json}))
    }
    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.onItemPress(item)} style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <Image style={{height: 50, width: 50, borderRadius: 25}} source = {{uri: 'item'}}/>
            <Text style ={{marginLeft: 10}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.barra}>
                <Text style={styles.status}>
                    STAR WARS
                </Text>
                </View>
                <View style = {styles.border}/>
                <View style ={styles.titulo}>
                    <Text style = {styles.textTitulo}>
                        Personagens
                    </Text>
                </View>
                <FlatList
                keyExtractor={item => item.id}
                data={this.state.person}
                ItemSeparatorComponent={()=>
                    <View style={{flex: 1, height:1, backgroundColor: '#f7f7f7'}}/>}
                />
                <View style={styles.button}>
                <TouchableOpacity onPress={this.buttonP}>
                <View style={styles.buttonP}>
                    <Icon name = "ios-person" size={20}/>
                    <Text style={styles.textButton}>
                        Personagens
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.buttonF}>
                <View style={styles.buttonF}>
                    <Icon name = "ios-videocam" size={20}/>
                    <Text style={styles.textButton}>
                        Filmes
                    </Text>
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
        // borderBottomEndRadius: 0,
        
    },

    border: {
        marginTop: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: '#FFFF00'
    },

    status:{
        color: '#FFFF00',
        fontSize: 18,
        fontWeight: 'bold',
    },

    titulo: {
        marginTop: 20,
        left: 20,
    },
    
    textTitulo:{
        color: '#FFFFFF',
        fontSize: 28,
        //fontFamily: '',
    },

    films: {
        width: 100,
        height: 100
    },

    buttonP: {
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF00'
    },

    buttonF: {
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },

    textButton: {
        fontSize: 12,
    },
    
    button: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})