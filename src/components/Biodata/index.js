import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const biodata = () => {
    return (
    <View style={styles.bodycontent}>
       <View style={styles.tabel}>
        <View style={[styles.row,{borderRightWidth: 0,width: 70, backgroundColor:'white'}]}>
          <Text style={styles.text}>Nama </Text>
        </View>
        <View style={[styles.row,{borderLeftWidth: 1, width:'80%',backgroundColor:'white'}]}>
         
        </View>
      </View>
      <View style={styles.tabel}>
        <View style={[styles.row,{borderRightWidth: 0,width: 70, backgroundColor:'white'}]}>
          <Text style={styles.text}>NISN </Text>
        </View>
        <View style={[styles.row,{borderLeftWidth: 1, width:'80%',backgroundColor:'white'}]}>
         
        </View>
      </View>
      <View style={styles.tabel}>
        <View style={[styles.row,{borderRightWidth: 0,width: 70, backgroundColor:'white'}]}>
          <Text style={styles.text}>Kelas </Text>
        </View>
        <View style={[styles.row,{borderLeftWidth: 1, width:'80%',backgroundColor:'white'}]}>
          
        </View>
      </View>
       </View>
    )
}

export default biodata

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        marginStart:4,
        marginTop:7,
        marginBottom:7,
    },
    textinput:{
        fontSize:17,
    },
  bodycontent:{
    width:'100%',
  },
  row:{
    borderWidth: 1,
    width:60,
    alignItems:'flex-start',
  },
  tabel:{
    flexDirection: 'row',
    alignSelf: 'center',
  },
})
