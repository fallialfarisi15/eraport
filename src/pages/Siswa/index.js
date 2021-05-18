import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Siswa = () => {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>
                  Daftar Siswa
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
             
              <TouchableOpacity style={styles.menuBox}>
              </TouchableOpacity>

            </View>
        </View>
      </View>
    );
  }

  export default Siswa;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#51A1FF",
  },
  headerContent:{
    padding:25,
    alignItems: 'center',
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:110,
    height:110,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
    marginLeft:50,
    marginRight:40
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:13,
    color: "#696969",
  }
});
