import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Logo2, Nilai, Rekap, Siswa} from '../../assets';

const Home = ({navigation}) => {
   const onPressSiswa = () => {
      navigation.navigate('Siswa')
  }
   const onPressIsiraport = () => {
      navigation.navigate('Raport')
  }
  const onPressRekap = () => {
      navigation.navigate('Rekap')
  }
  
  return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Image style={styles.logo} source={Logo2} />
            <View style={styles.headerContent}>
                <Text style={styles.name}>
                  E-Raport
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <TouchableOpacity style={styles.menuBox}onPress={onPressSiswa}>
                <Image style={styles.icon} source={Siswa}/>
                <Text style={styles.info}>Lihat Siswa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox}onPress={onPressIsiraport}>
                <Image style={styles.icon} source={Nilai}/>
                <Text style={styles.info}>Input Nilai</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox}onPress={onPressRekap}>
                <Image style={styles.icon} source={Rekap}/>
                <Text style={styles.info}>Rekap Nilai</Text>
              </TouchableOpacity>

             
            </View>
        </View>
      </View>
    );
  }

  export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffff',
  },
  header:{
    backgroundColor: "#51A1FF",
  },
  headerContent:{
    padding:25,
    alignItems: 'center',
  },
  name:{
    fontSize:25,
    color:"#ffff",
    fontWeight:'600',

  },
  logo:{
    position:'absolute',
    width:84,
    height:83,
    left:328,
  },
  bodyContent:{
    padding:60,
    alignItems:'center',
    color:"#696969",
    
  },
  menuBox:{
    backgroundColor: "#51A1FF",
    width:110,
    borderRadius: 15,
    height:110,
    alignItems: 'center',
    justifyContent: 'center',
    margin:21,
    shadowColor: '#000000',
    shadowOpacity: .5,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:3,
    
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:14,
    color: "#ffffff",
  },
  body: {

    backgroundColor:'#DCE1E8'
  }
});
