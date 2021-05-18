import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import Form from '../../components/Form';
const Raport = () => {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>
                  Input Nilai
                </Text>
            </View>
          </View>

          
          <ScrollView>
          <View style={styles.bodyContent}>
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
    flexDirection:'column',
    justifyContent:'center',
  },
  header:{
    backgroundColor: "#51A1FF",
  },
  headerContent:{
    padding:15,
    alignItems: 'center',
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
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:13,
    color: "#696969",
  },
  text: {
    fontSize:17,
    
  },
    inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    width: "100%",
    height: 40,
    marginBottom: 30,
  },
  mapel:{
    alignItems:'center',
    
  }

})
