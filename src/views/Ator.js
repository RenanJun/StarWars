import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";

export default class Filmes extends Component {
    constructor(props){
        super(props);
        const idPerson = this.props.navigation.getParam('id_person');
        console.log('ID >>', idPerson)
        this.state = {
            peoples:[],
            homes:[],
            films:[],
            specys: [],
            id: idPerson,
        }
    }
    back = () => {
        this.props.navigation.goBack(null);
    }
    phantom = (item) => {
        console.log('Item',item)
        const filmID = item.url.match(/\d+/g)[0]
        this.props.navigation.navigate("FilmesAtor", {
            id_page: filmID
        });
    }
    componentDidMount(){
        console.log('AQUI!!!!!!', this.state.id)
        this.ator(this.state.id);
        console.log(this.state.films)
        console.log(this.state.homes)
    }

    ator(id) {
        return axios.get(`https://swapi.co/api/people/${id}`)
            .then(({data}) => {
                const { episode_id, birth_year, gender, species, name, films, homeworld} = data;

                const people = {
                    id: String(episode_id),
                    name,
                    birth_year,
                    gender,
                    species, 
                    films,
                    homeworld
                }

                // console.log(data.homeworld)
                this.fetchActorFilms(films)
                this.fetchActorSpecy(species)
                // this.fetchActorHomeworld(homeworld)
                // console.log('HomeWorld', homeworld)
                // console.log('AAAAAa', specy)
                console.log(id)

                this.setState(prevState => ({
                    peoples: [...prevState.peoples, people ]
                }))

                return people 
            })
    }

    fetchActorFilms(filmsArray) {
        return Array.isArray(filmsArray) &&
            filmsArray.forEach(film => {
                axios.get(film)
                    .then(({ data }) => {
                        this.setState(prevState => ({
                            films: [
                                ...prevState.films,
                                data
                            ]
                        }))
                    })
            })
    }

    fetchActorHomeworld

    // fetchActorHomeworld(homes) {
    //     return homes &&
    //     homes(home => {
    //         axios.get(home)
    //         .then(({data}) => {
    //             this.setState(prevState => ({
    //                 homes: [
    //                     ...prevState.homes,
    //                     data
    //                 ]
    //             }))
    //         })
    //     })
    // }

    fetchActorSpecy(specyArray) {
        return Array.isArray(specyArray) &&
            specyArray.forEach(specy => {
                axios.get(specy)
                    .then(({ data }) => {
                        this.setState(prevState => ({
                            specys: [
                                ...prevState.specys,
                                data
                            ]
                        }))
                    })
            })
    }
    
    
    render(){
        return(
            <View style = {styles.container}>
                <View style={{flex: 1}}>
                <View>
                <FlatList 
                    data={this.state.peoples}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{flex: 1}}>
                    <View style = {styles.container}>
                    <View style = {styles.barra}>
                    <Text style={styles.status}>{item.name}</Text>
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
                    </View>
                    <View style={{marginTop: 30, left: 20}}>
                        <Text style={styles.titulo}>Birth Year</Text>
                        <Text style={styles.texto}>{item.birth_year}</Text>
                        <View style={{left: 150, marginTop: -30}}>
                        <Text style={styles.titulo}>Gender</Text>
                        <Text style={styles.texto}>{item.gender}</Text>
                        </View>
                    </View>
                    </View>
                    }/>

                    <FlatList 
                    data={this.state.specys}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{flex: 1}}>
                    
                    <View style={{left: 20, marginTop: 10}}>
                    <Text style={styles.titulo}>
                        Specy
                    </Text>
                    <Text style={styles.texto}>{item.name}</Text>
                    </View>
                    
                    </View>
                    }/>
                </View>

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
                    <View>

                    </View>
                    <FlatList 
                    data={this.state.films}
                    ref='flatlist'
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                    <View style={{flex: 1}}>
                    <TouchableOpacity onPress={()=>this.phantom(item)}>
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
