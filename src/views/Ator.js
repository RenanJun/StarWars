import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";

export default class Filmes extends Component {
    constructor(){
        super();
        this.state = {
            peoples:[],
            homes:[],
            films:[],
        }
    }
    back = () => {
        this.props.navigation.navigate("Personagens");
    }
    phantom = () => {
        this.props.navigation.navigate("Phantom");
    }
    componentDidMount(){
        this.ator();
        this.homeworld();
        this.cartaz();
        
    }

    homeworld(){
        return axios.get(`https://swapi.co/api/planets/1/`)
        .then(({data}) => {
            const { episode_id, name} = data;

            const home = {
                id: String(episode_id),
                name
            }

            console.log(data)

            this.setState(prevState => ({
                homes: [...prevState.homes, home ]
            }))

            return home
        })
    }

    ator() {
        return axios.get(`https://swapi.co/api/people/1/`)
            .then(({data}) => {
                const { episode_id, birth_year, gender, specy, films} = data;

                const people = {
                    id: String(episode_id),
                    birth_year,
                    gender,
                    specy, 
                    films
                }

                console.log(data)

                this.setState(prevState => ({
                    peoples: [...prevState.peoples, people ]
                }))

                return people 
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

                return film
            })
    }
    async cartaz() {

        const listIdFilms = [2, 6, 4];
        let i = -1
        const filmsLength = listIdFilms.length
    
        while (i++ < filmsLength) {
            await this.fetchFilm(listIdFilms[i])
            console.log('passou', i, listIdFilms[i])
        }
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
                <Image style={{width: 375, height: 190}} source={require('../images/luke.jpeg')}/>
                <View style={styles.borda}/>
                <View style={styles.borda}/>
                </View>
                <View style={{}}>
                <FlatList 
                    data={this.state.peoples}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{}}>
                    <View style={{marginTop: 30, left: 20}}>
                        <Text style={styles.titulo}>Birth Year</Text>
                        <Text style={styles.texto}>{item.birth_year}</Text>
                        <View style={{left: 150, marginTop: -30}}>
                        <Text style={styles.titulo}>Gender</Text>
                        <Text style={styles.texto}>{item.gender}</Text>
                        </View>
                        <View>
                        <View style={{marginTop: 30}}>
                        <Text style={styles.titulo}>Specy</Text>
                        <Text style={styles.texto}></Text>
                        </View>
                        <View style={{left: 150, marginTop:-30}}>
                        <Text style={styles.titulo}>Homeworld</Text>
                        </View>
                        </View>
                        
                    </View>
                    </View>
                    }/>
                    <FlatList 
                    data={this.state.homes}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{}}>
                    <View style={{marginTop: 15, left: 20}}>
                        <View style={{left: 150, marginTop: -30}}>
                        <Text></Text>
                        <Text style={styles.texto}>{item.name}</Text>
                        </View>
                        <View style={{marginTop: -28}}>
                        <Text></Text>
                        <Text style={styles.texto}>Human</Text>
                        </View>
                    </View>
                    </View>
                  
                    }/>
                    <View style={{right: 10}}>
                    <View style={styles.pageD}>
                    <Icon name = "ios-videocam" size={25} color = '#FFFF00'/>
                    </View>
                </View>
                    <View style={{left:50, marginTop: -26}}>
                    <Text style={{color: '#FFFF00', fontWeight: 'bold', fontSize: 18}}>
                        Films
                    </Text>
                    </View>
                    <FlatList 
                    data={this.state.films}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{}}>
                    <TouchableOpacity onPress={this.phantom}>
                    <View style={{left: 20, marginTop: 20}}>
                    <Text style={styles.texto}>{item.title}</Text>
                    </View>
                    <View style={styles.borderT}>
                    </View>
                    </TouchableOpacity>
                    </View>
                    }/>
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
        left: 20,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },
})
