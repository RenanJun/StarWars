import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';

export default class Filmes extends Component {

    constructor(){
        super();
        this.state = {
            films:[]
        }
    }
    componentDidMount() {
        this.cartaz();
    }

    buttonP = () => {
         this.props.navigation.navigate('Personagens');
    }
    phantom = () =>{
        this.props.navigation.navigate('Phantom');
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

    const listIdFilms = [4, 5, 1, 2];
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
                    // ItemSeparatorComponent={()=>
                    //     <View style={{left: 20}}>

                    //         <Image></Image>
                    //     </View>
                        
                    //     }
                    renderItem={({item}) =>
                    <View style={{flex: 1, alignItems: 'center'}}>

                    <TouchableOpacity onPress={this.phantom}>

                    <View style={{alignItems: 'center',marginTop: 20}}>
                    <Image style={{width: 150, height: 220}} source = {require('../images/starwars1.jpg')}/>
                    <View style={{width:180}}>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: '#FFFFFF',width: 150, height: 50, borderBottomLeftRadius: 5, borderBottomRightRadius:5}}>
                    <Text style={{color: "#000000", fontSize: 14, fontWeight: 'bold'}}>{item.title}</Text>
                    </View>
                    
                    </View>
                    </TouchableOpacity>
                    </View>
                    }/>
                 </View>
                <View style={{paddingVertical: 10}}></View>
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
        
        
    },

    border: {
        marginTop: 20,
        borderBottomWidth: 0.3,
        borderBottomColor: '#FFFF00'
    },

    status:{
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
        backgroundColor: '#FFFFFF'
    },

    buttonF: {
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF00'
    },

    textButton: {
        fontSize: 12,
    },

    button: {
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
