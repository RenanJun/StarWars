import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default class Filmes extends Component {
    constructor(){
        super();
        this.state = {
            peoples: [],
            listImg: ['luke.jpeg', 'starwars.png', 'starwars1.jpg', 'luke.jpeg'],
        }
    }
    buttonF = () => {
        this.props.navigation.navigate("Filmes");
    }

    componentDidMount() {
        this.personagem();
    }

    person = () => {
        this.props.navigation.navigate("Ator");
    }
    
    // personagem(){
    //     const listIdPeople = [11, 5, 4, 13];
    //     listIdPeople.forEach(async idPeople => {
    //         await axios.get(`https://swapi.co/api/people/${idPeople}`)
    //         .then(({data}) => {
    //             const {id, name} = data;
    //             console.log(data);
    //             this.setState(prevState => ({people: [...prevState.people, {id: String(id), name}]}))
            
    //         });
    // })
    // }
    fetchFilm(id) {
        return axios.get(`https://swapi.co/api/people/${id}`)
            .then(({data}) => {
                const { episode_id, name } = data;

                const people = {
                    id: String(episode_id),
                    name
                }

                console.log(data)

                this.setState(prevState => ({
                    peoples: [...prevState.peoples, people ]
                }))

                return people
            })
    }
    
    async personagem() {

    const listIdPeoples = [1, 5, 4, 13];
    let i = -1
    const peoplesLength = listIdPeoples.length

    while (i++ < peoplesLength) {
        await this.fetchFilm(listIdPeoples[i])
        console.log('passou', i, listIdPeoples[i])
    }
    }
    verifica() {
        for (let i = 0; i < 4; i++) {
            if(this.setState.listImg[i] == this.setState.listIdPeoples[i]){
                return this.setState.listImg[i];
            }
            
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
                        Personagens
                    </Text>
                    
                     </View>
                     <View style={{flex: 1, alignItems: 'center'}}>
                     <FlatList 
                    data={this.state.peoples}
                    ref='flatlist'
                    numColumns={2}
                    keyExtractor={item => item.id}
                 
                    renderItem={({item}) =>
                    <TouchableOpacity onPress={this.person}>
                        <View style={{alignItems: 'center', marginTop: 40}}>
                        <Image style={{width: 150, height: 150,  borderRadius: 70}} source = {require('../images/luke.jpeg')}/>
                        <View style={{width:180}}>
                        </View>
                        <View style={{width: 150, height: 20, borderBottomLeftRadius: 5, borderBottomRightRadius:5}}>
                        <View style={{left: 20}}>
                        <Text style={{color: "#FFFFFF", fontSize: 14, fontWeight: 'bold'}}>{item.name}</Text>
                        </View>
                        </View>
                        </View>
                        </TouchableOpacity>
                   

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
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
