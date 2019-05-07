import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

export default class Filmes extends Component {

    constructor(){
        super();
        this.state = {
            films:[]
        }
    }

    back = () => {
        this.props.navigation.navigate("Filmes");
    }

    componentDidMount(){
        this.film();
    }
    film() {
        return axios.get(`https://swapi.co/api/films/4/`)
            .then(({data}) => {
                const { episode_id, director, producer, release_date, opening_crawl } = data;

                const film = {
                    id: String(episode_id),
                    director,
                    producer, 
                    release_date,
                    opening_crawl
                }

                console.log(data)

                this.setState(prevState => ({
                    films: [...prevState.films, film ]
                }))

                return film
            })
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
                <View>
                {/* <View style={{marginTop: 20, left: 20, marginTop: 30}}>
                        <Image style={{width: 150, height: 220}}source={require('../images/starwars1.jpg')}/>
                    </View> */}
                    
                    {/* <View style={styles.page}> */}
                    <FlatList 
                    data={this.state.films}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{flex: 1}}>
                    <View style={{marginTop: 30, left: 20}}>
                    <Image style={{width: 150, height: 220}}source={require('../images/starwars1.jpg')}/>
                    </View>
                    <View style={{paddingVertical: -100, left: 200, marginTop: -220, width: 180, height: 280}}>
                    <Text style={styles.titulo}>Director</Text>
                    <Text style={styles.texto}>{item.director}</Text> 
                    <View style={{marginTop:20}}>
                    <Text style={styles.titulo}>Producer</Text>
                    <Text style={styles.texto}>{item.producer}</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                    <Text style={styles.titulo}>Release Date</Text>
                    <Text style={styles.texto}>{item.release_date}</Text>
                    </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.texto}>{item.opening_crawl}</Text>
                    </View>
                    </View>
                    }/>
                    </View>
                    </View>
            // </View>
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
