import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import {Header} from 'react-native-elements'
import Constants from 'expo-constants';
import * as Speech from 'expo-speech'
// You can import from local files
import AssetExample from './components/AssetExample';
import Hindi from './Database.js'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={preconvertedSpeech:'Your Text',eng:'Your word(in camel case)',stopFlow:false,check:false}



  }
  componentDidMount(){
   Speech.speak("Welcome to Undefined Undefined. Here you can transalate about 30 words on Hindi and convert speech to text like this. If you want to hear the transalatable words, longpress on the button below ")
    
  }
  render(){
  return (
    <View>
   
    <Header
    centerComponent={{text:"UndefinedUndefind",style:{fontSize:20,}}}
    />
     <TouchableOpacity onPress={()=>{
       this.setState({stopFlow:true,check:true})
       if(this.state.stopFlow===true){
         Speech.pause()
       }
       if(this.state.stopFlow===true&&this.state.check===true){
         this.setState({check:false,stopFlow:false})
         Speech.resume();
       }
     }} onLongPress={()=>{
       Speech.speak(" The words are:Help, Jump, Hello, Cheers, Understand, No, I, A lot, Perfect, Forgot, Forget, Dog, Inside, Outside, Welcome, Fun, Answer, Birds,  Fly, ALright, Know as k-n-o-w, Forgive, Laugh, Try, Sing, Fire, Burn, Mathematics, Math, Maths, Love, House, Home, Buy, History. For repetition, longpress on the button again.")

     }}>
    <Text> List out all words</Text>
    <Text style={{marginTop:50}}> Text to Speech converter:</Text>
    </TouchableOpacity>
    <TextInput
    style={{borderColor:"red",borderRadius:100,borderWidth:3,height:40,alignItems:"top"}}
    value={this.state.preconvertedSpeech}
    onChangeText={(speech)=>{
        this.setState({preconvertedSpeech:speech})
    }}
    />
    <TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:25,width:150,marginLeft:75}} onPress={()=>{
      Speech.speak(this.state.preconvertedSpeech)
      
    }}>
    <Text style={{marginLeft:15}}>
    Convert to Speech
    </Text>
   

    </TouchableOpacity>
         <Text style={{marginTop:50}}> Text to Speech converter:</Text>
      <TextInput  
    style={{borderColor:"red",borderRadius:100,borderWidth:3,height:40,alignItems:"top",marginTop:50}}
    value={this.state.eng}
    onChangeText={(hindi)=>{
        this.setState({eng:hindi})
    }}
    />

    <TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:25,width:150,marginLeft:75}} onPress={()=>{
      this.setState({preconvertedSpeech:Hindi[this.state.eng]})
      
    }}>
    <Text style={{marginLeft:20}}>Convert to Hindi</Text>
    </TouchableOpacity>
    </View>
  );
}}


