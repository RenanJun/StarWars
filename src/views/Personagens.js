import React, {Component} from "react";
import{View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { getActorImage } from '../helpers'

export default class Personagens extends Component {
    constructor(){
        super();
        this.state = {
            peoples:[],
        }
    }
    buttonF = () => {
        this.props.navigation.navigate("Filmes");
    }

  async  componentDidMount() {
      await  this.fetchPeople();
    }

    person = (item) => {
        const urlID = item.url.match(/\d+/g)[0]
        this.props.navigation.navigate("Ator", {
            id_person: urlID
        });
    }

     fetchPeople() {
        
        axios.get('https://swapi.co/api/people/?page=1').then((data) => {
            this.setState({peoples: data.data.results});
            console.log(data.data.results, 'Data aqui 2');
            
            axios.get('https://swapi.co/api/people/?page=2').then((data) => {
            this.setState(prevState => ({
                peoples: [...prevState.peoples, ...data.data.results]}))
            console.log(data.data.results, 'Data aqui 1');
            console.log(this.state.peoples)
        })
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
                        Personagens
                    </Text>
                    
                     </View>
                     <View style={{flex: 1, alignItems: 'center'}}>
                     <FlatList 
                    data={this.state.peoples}
                    extraData={this.state.listImg}
                    ref='flatlist'
                    numColumns={2}
                    keyExtractor={item => item.id}
                 
                    renderItem={({item}) =>
                    <TouchableOpacity onPress={() => this.person(item)}>
                        <View style={{alignItems: 'center', marginTop: 40}}>
                        <Image style={{width: 150, height: 150,  borderRadius: 70}} source = {getActorImage(item.name)}/>
                        <View style={{width:180}}>
                        </View>
                        <View style={{width: 150, height: 20, borderBottomLeftRadius: 5, borderBottomRightRadius:5}}>
                        <View style={{left: 20}}>
                        <Text style={styles.texto}>{item.name}</Text>
                        </View>
                        </View>
                        </View>
                        </TouchableOpacity>
                    }/>
                     
                     </View>
                     <View style={{paddingVertical: 10}}></View>
                     <View style={styles.borderT}/>
                <View style={styles.button}>
                <TouchableOpacity onPress={this.buttonP}>
                <View style={styles.buttonP}>
                    <Icon name = "ios-person" color = "#FFFF00" size={20}/>
                    <Text style={styles.textButtonP}>
                        Personagens
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.buttonF}>
                <View style={styles.buttonF}>
                    <Icon name = "ios-videocam" color = "#808080" size={20}/>
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
        borderBottomWidth: 0.2,
        borderBottomColor: '#FFFF00'
    },

    status:{
        fontFamily: 'Exo-ExtraBold',
        color: '#FFFF00',
        fontSize: 18,
        fontWeight: 'bold',
    },

    titulo: {
        fontFamily: 'Exo-ExtraBold',
        marginTop: 20,
        left: 20,
    },
    
    textTitulo:{
        fontFamily: 'Exo-ExtraBold',
        color: '#FFFFFF',
        fontSize: 28,
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
    texto:{
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Exo-ExtraBold',
    },

    buttonF: {
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    borderT: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFF00'
    },

    textButtonP: {
        color: "#FFFF00",
        fontFamily: 'Exo-ExtraBold',
        fontSize: 12,
    },

    textButtonM: {
        color: "#808080",
        fontFamily: 'Exo-ExtraBold',
        fontSize: 12,
    },
    
    
    button: {
        alignItems:'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
