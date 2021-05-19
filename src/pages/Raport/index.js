import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native'
import {Form, Biodata} from '../../components'
import {Back} from '../../assets'

const Raport = ({navigation}) => {
   const onPressBack = () => {
      navigation.navigate('Home')
  }

    return (
      <View style={styles.container}>
          <View style={styles.header}>
        
          <TouchableOpacity style={styles.back}onPress={onPressBack}>
          <Image style={styles.avatar1} source={Back}/>
          </TouchableOpacity>
           
            <View style={styles.headerContent}>
                <Text style={styles.name}>
                  Input Nilai
                </Text>
            </View>
          </View>

          
          <ScrollView>
          <View style={styles.bodyContent}>
          <Biodata/>
            <View style={styles.mapel}>
              <Text style={styles.text}>Pendidikan agama</Text>
              <Form />
              <Text style={styles.text}>PPKN</Text>
              <Form/>
              <Text style={styles.text}>Bahasa Indonesia</Text>
              <Form/>
              <Text style={styles.text}>Matematika</Text>
              <Form/>
              <Text style={styles.text}>IPA</Text>
              <Form/>
              <Text style={styles.text}>IPS</Text>
              <Form/>
              <Text style={styles.text}>Bahasa Inggris</Text>
              <Form/>
              <Text style={styles.text}>Penjaskes</Text>
              <Form/>
              
            </View>
          </View>
            </ScrollView>
          
        </View>
    );
  }

  export default Raport;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#DCE1E8',
  },
  header:{
    backgroundColor: "#51A1FF",
  },
  headerContent:{
    padding:15,
    alignItems: 'center',
    marginTop:-50,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },

  bodyContent:{
    paddingTop:10,
    flexDirection:'row',
    flexWrap: 'wrap',
  },

  info:{
    fontSize:13,
    color: "#696969",
  },
  text: {
    fontSize:17,
    
  },

  mapel:{
    marginTop:20,
    alignItems:'center',
  },
   avatar1: {
    width:44,
    height:30,
  },
  back:{
   backgroundColor: "#51A1FF",
    width:50,
    borderRadius: 15,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: .5,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:3,
    marginStart:3,
    marginTop:15,
  }

})
