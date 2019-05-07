import React, {Component} from "react";
import{View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import axios from "axios";

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
    

    fetchFilm(id) {
        return axios.get(`https://swapi.co/api/films/${id}`)
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
    }
    render(){
        if(this.state.isLoading) {
            return(
                <View style={styles.container}>
            <Image style={{width: 310, height: 191, left: 29, marginTop: 39}} source={require('../images/starwars.png')}/>
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
