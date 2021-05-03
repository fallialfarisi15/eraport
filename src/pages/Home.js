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
                <Text style={styles.name}>
                  E-Raport
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://pintek.id/images/v2/icon-community-reg-03.png'}}/>
                <Text style={styles.info}>Siswa</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://cdn4.iconfinder.com/data/icons/knowledge-9/64/brain-head-science-idea-thinking-512.png'}}/>
                <Text style={styles.info}>Nilai Pengetahuan</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://3.bp.blogspot.com/-z4P4a7TQrEg/WrKE7K9g4WI/AAAAAAAAGKo/j-DX2t1WCigsiZoTkHEHnrcUZhRvRAJNwCLcBGAs/s1600/Triathlon.png'}}/>
                <Text style={styles.info}>Nilai Keterampilan</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://pintek.id/images/v2/icon-community-reg-01.png'}}/>
                <Text style={styles.info}>Rekap Nilai</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: 'https://dooxkge7f84co.cloudfront.net/wp-content/uploads/2020/10/16100847/survey-icon-002.png'}}/>
                <Text style={styles.info}>Absen</Text>
              </View>
            </View>
        </View>
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
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
    marginLeft:40,
    marginRight:10
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
