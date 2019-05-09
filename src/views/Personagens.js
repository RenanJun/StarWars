import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default class Personagens extends Component {
    constructor(){
        super();
        this.state = {
            peloples:[],
            listImg: ['luke.jpeg', 'starwars.png', 'starwars1.jpg', 'luke.jpeg'],
        }
    }
    buttonF = () => {
        this.props.navigation.navigate("Filmes");
    }

    componentDidMount() {
        this.fetchPeople();
    }

    person = (item) => {
        const urlID = item.url.match(/\d+/g)[0]
        this.props.navigation.navigate("Ator", {
            id_person: urlID
        });
    }

     fetchPeople() {
        return axios.get(`https://swapi.co/api/people/?page=1`)
            .then(({data}) => {
               this.setState({peoples: data.results})
            })
    }

    // fetchPerson2() {
    //     return axios.get(`https://swapi.co/api/people/?page=2`)
    //         .then(({data}) => {
    //             const { episode_id, name } = data;

    //             const people = {
    //                 id_person2: String(episode_id),
    //                 name
    //             }

    //             console.log(data)

    //             this.setState({people2: data.results})

    //             return people
    //         })
    // }
    
    
    // async personagem() {

    // const listIdPeoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    // 15, 16, 17, 18, 19, 20, 21];
    // let i = -1
    // const peoplesLength = listIdPeoples.length

    // while (i++ < peoplesLength) {
    //     await this.fetchPerson(listIdPeoples[i])
    //     console.log('passou', i, listIdPeoples[i])
    // }
    // }
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
                    <TouchableOpacity onPress={() => this.person(item)}>
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
