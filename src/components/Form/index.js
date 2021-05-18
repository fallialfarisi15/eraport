import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const form = () => {
    return (
      <View style={styles.bodyContent}>
        <View style={styles.inputView}>
              <TextInput style={styles.TextInput}
              placeholder="Nilai Pengetahuan"
              placeholderTextColor="#003f5c"
        />
           </View>
        <View style={styles.inputView}>
              <TextInput style={styles.TextInput}
              placeholder="Nilai Keterampilan"
              placeholderTextColor="#003f5c"
        />
           </View>
      </View>
    )
}

export default form

const styles = StyleSheet.create({
    inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    width: "100%",
    height: 40,
    marginBottom: 5,
  },
  bodyContent:{
    paddingTop:10,
    flexDirection:'row',
    flexWrap: 'wrap',
  },
})
