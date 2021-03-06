import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import { getMovieImage } from "../helpers";

export default class Filmes extends Component {

    constructor(props){
        super(props);
        this.state = {
            films:[],
        }
    }
    componentDidMount() {
        this.fetchFilm();
    }

    buttonP = () => {
         this.props.navigation.navigate('Personagens');
    }
    phantom = (item) => {
        const urlID = item.url.match(/\d+/g)[0]
        this.props.navigation.navigate('FilmeCartaz', {
            id_film: urlID,
        });
    }

     fetchFilm() {
        return axios.get(`https://swapi.co/api/films/`)
            .then(({data}) => {
                this.setState({films: data.results})
            })
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
                        Filmes
                    </Text>
                 </View>
                 <View style={{flex: 1}}>

                 <FlatList 
                    data={this.state.films}
                    ref='flatlist'
                    numColumns={2}
                    keyExtractor={item => item.id}
                    
                    renderItem={({item}) =>
                    <View style={{flex: 1, alignItems: 'center'}}>

                    <TouchableOpacity onPress={() => this.phantom(item)}>

                    <View style={{alignItems: 'center',marginTop: 20}}>
                    <Image style={{width: 150, height: 220}} source = {getMovieImage(item.title)}/>
                    <View style={{width:180}}>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: '#FFFFFF',width: 150, height: 50, borderBottomLeftRadius: 5, borderBottomRightRadius:5}}>
                    <Text style={styles.texto}>{item.title}</Text>
                    </View>
                    
                    </View>
                    </TouchableOpacity>
                    </View>
                    }/>
                 </View>
                <View style={{paddingVertical: 10}}></View>
                <View style={styles.borderT}/>
                <View style={styles.button}>
                <TouchableOpacity onPress={this.buttonP}>
                <View style={styles.buttonP}>
                    <Icon name = "ios-person" color = "#808080" size={20}/>
                    <Text style={styles.textButtonP}>
                        Personagens
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.buttonF}>
                <View style={styles.buttonF}>
                    <Icon name = "ios-videocam" color = "#FFFF00" size={20}/>
                    <Text style={styles.textButtonM}>
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
        
        
    },

    border: {
        marginTop: 20,
        borderBottomWidth: 0.3,
        borderBottomColor: '#FFFF00'
    },

    status:{
        fontFamily: 'Exo-ExtraBold',
        color: '#FFFF00',
        fontSize: 18,
        fontWeight: 'bold'
    },

    titulo: {
        marginTop: 20,
        left: 20,
    },
    
    textTitulo:{
        color: '#FFFFFF',
        fontSize: 28,
        fontFamily: 'Exo-ExtraBold',
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
        backgroundColor: '#000000'
    },

    buttonF: {
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },

    textButtonM: {
        color: "#FFFF00",
        fontSize: 12,
        fontFamily: 'Exo-ExtraBold',
    },
    textButtonP: {
        color: "#808080",
        fontSize: 12,
        fontFamily: 'Exo-ExtraBold',
    },

    texto:{
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Exo-ExtraBold',
    },

    borderT: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFF00'
    },

    button: {
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
