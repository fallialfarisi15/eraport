import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 50,
  },
  logo: {
   width: 260,
   height: 96,
   marginVertical: 40, 
  },
  text:{
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
    width: 300,
    
  }
});

const displayAnImage = () =>{
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={{
          uri:
          'https://www.bing.com/images/blob?bcid=S3Brg9A8rbICeQ',
        }}
      />
      <Text style={styles.text}>Aplikasi E-Raport v1.6</Text>
      <Text style={styles.text}>Kurikulum 2013</Text>
    </View>
  );
}

export default displayAnImage;
