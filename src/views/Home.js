import React, {Component} from "react";
import{View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import axios from "axios";
import {AsyncStorage} from 'react-native';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            films:[]
        }
    }

    irFilmes = () => {

        this.props.navigation.navigate("Filmes");

    }
    componentDidMount(id) {

        return fetch('https://swapi.co/api/films/${id}')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.films,
            })
        })

    }

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {

        }
      };

      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('TASKS');
          if (value !== null) {
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };
    
    async fetchFilm(id) {
         for(let i = 0; i <= 365; i++){

            await setTimeout(() => {
                axios.get(`https://swapi.co/api/films/${id}`)
                .then(({data}) => {
                    const { episode_id, title } = data;
    
                    const film = {
                        id: String(episode_id),
                        title
                    }
    
                    console.log(data)
    
                    this.setState(prevState => ({
                        films: [...prevState.films, film ]
                    }))
    
                    this.props.navigation.navigate("Filmes");
                    return film;
                    
                })

            }, 86400000)
        }
    }
    render(){
    
        if(this.state.isLoading) {
            return(
                <View style={styles.container}>
            <Image style={{width: 310, height: 191, marginTop: 39}} source={require('../images/starwars.png')}/>
            <View style={[styles.loading]}>
            <ActivityIndicator size="large" color="#FFFF00" />
            <Text style={styles.texto}>
                Loading...
            </Text>
          </View>
            </View>
            )
        }else{
            return(
                this.props.navigation.navigate("Filmes")
            );
        }
        
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    loading: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        fontFamily: 'Exo-ExtraBold',
        color: '#FFFFFF',
        fontSize: 12,
    }
})
