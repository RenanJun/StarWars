import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { FlatList } from "react-native-gesture-handler";
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
    
    cartaz() {

    //     const url = 'https://swapi.co/api';

    //     // const requestInfo={

    //     //     method: 'GET',
    //     //     body: JSON.stringify({
    //     //         films: this.state.films,
    //     //     }),
    //     //     headers : new Headers({
    //     //         'Content-type' : 'application/json'
    //     //     })
    //     // }

    //     // fetch(url).then((response) => {
    //     //     console.log(response);
    //     // });
    const listIdFilms = [1, 2, 3, 4];
    listIdFilms.forEach(idFilm => {
        axios.get(`https://swapi.co/api/films/${idFilm}`)
        .then(({data}) => {
            const { episode_id, title } = data;
            console.log(data)
            this.setState(prevState => ({films: [...prevState.films, {id: String(episode_id), title}]}))
        })
    });
        
        // fetch('https://swapi.co/api/films/1')
        // .then((resposta) => {
        //     this.setState({films: resposta.json()});
        // });
        // .then(json => this.setState({films: json}))
    }

    // async componentDidMount(){
    //     const timestamp = Number(new Date())
    //     const hash = md5.create()
    //     hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

    //     const response = await fetch('http https://swapi.co/api/films/1/')
    //     const responseJson = await response.json()
    //     this.setState({films: responseJson.films.results})
    // }

    // cartaz(){

    //     const uri =  "https://swapi.co/api/films/1/";

    //     const requestInfo = {

    //         method: 'GET',
    //         body: JSON.stringify({

    //             "reset_form": {

    //                    "films": this.get.films,

    //                }
                   
    //             }),

    //         headers : new Headers({

    //             'Content-type' : 'application/json'

    //         })

    //     }
        
    //     fetch(uri, requestInfo)
    //     .then(response => {response.json()})
    //     .then(json => this.setState({films: json}))

    //     .catch(e => this.setState({films: e.films}))

    // }       
    
    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.onItemPress(item)} style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <Image style={{height: 50, width: 50, borderRadius: 25}} source = {{uri: 'item'}}/>
            <Text style ={{marginLeft: 10}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    onItemPress = (item) => {
        this.props.navigation.navigate('Filmes', {films: item})
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
                {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.films}
                    renderItem={({item}) =>
                    <Post foto={item}/> 
                }
                    />
                    <Image source={{uri: this.props.films}} 
                    style={styles.films}/>
                </View> */}
                <FlatList
                data={this.state.films}
                ref='flatlist'
                // renderItem={this._renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{flex: 1, height:1, backgroundColor: '#f7f7f7'}}/>}
                renderItem={({item}) => <Text style={{color: "#FFF"}}>{item.title}</Text>}
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
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})