import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import {back} from '../../assets'
const Rekap = () => {
    return (
      <View style={styles.container}>
          <View style={styles.header}>

            <View style={styles.headerContent}>
                <Text style={styles.name}>
                  Rekap Nilai Siswa
                </Text>
            </View>
          </View>

          
          <View style={styles.bodyContent}>
            <View style={styles.table}>
                <Text>test</Text>
            </View>
          </View>
        </View>
    );
  }

  export default Rekap;

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignContent:'center',
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
  table:{
      borderWidth:1,
      borderColor:'black',
  },
  

})

