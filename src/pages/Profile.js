import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://th.bing.com/th/id/Ra23ed6a35c5e4f187f6f21ed14786e60?rik=%2byTNy9s2HzgwkQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jyQltpEa6NQ%2fVGGWHkmF74I%2fAAAAAAAAXWQ%2ffioJmhJo2Vo%2fs1600%2fSudirman-Said.png&ehk=6h31HxzGRBnMtSJyF0Kt9ghiKwpTGoRb496O3rr77mU%3d&risl=&pid=ImgRaw'}}/>

                <Text style={styles.name1}>
                  Sudirman Said
                </Text>
                <Text style={styles.name2}>
                  Wali Kelas IPA-3
                </Text>
            </View>
          </View>
          <Text style={styles.bio}>NIP</Text>
          <Text style={styles.bio2}>298374656979</Text>
          <Text style={styles.bio}>Tahun Ajaran</Text>
          <Text style={styles.bio2}>2021-2022</Text>
          <Text style={styles.bio}>Email</Text>
          <Text style={styles.bio2}>sudirmansaid17@gmail.com</Text>
          <Text style={styles.bio}>Mengampuh Mata Pelajaran</Text>
          <Text style={styles.bio2}>Bahasa Indonesia</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#003f5c",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name1:{
    fontSize:18,
    color:"#FFFFFF",
    fontWeight:'600',
  },
   name2:{
    fontSize:15,
    color:"#FFFFFF",
    fontWeight:'600',
    marginTop: 5,
  },
  bio:{
    fontSize:15,
    color:"black",
    fontWeight:'600',
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 80
  },
  bio2:{
    fontSize:15,
    color:"grey",
    fontWeight:'600',
    marginLeft: 80
  },
});
