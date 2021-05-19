import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://www.pngarts.com/files/2/Left-Arrow-PNG-Pic.png'}}/>
                <Text style={styles.text}>Data Siswa</Text>
            </View>
          </View> 
      
          <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>  
           <View style={styles.profilborder}>
           <Text style={styles.bio}>
          Anya Geraldine</Text>
          <Text style={styles.bio2}>118140047</Text>
            <Image style={styles.profil}
                  source={{uri: 'https://media.bolatimes.com/thumbs/2021/05/13/81906-anya-geraldine/730x480-img-81906-anya-geraldine.jpg'}}
                  />
        
</View>
<View style={styles.profilborder}>
<Text style={styles.bio}>
          Reemar Martin</Text>
          <Text style={styles.bio2}>118140147</Text>
           <Image style={styles.profil}
                  source={{uri: 'https://akcdn.detik.net.id/community/media/visual/2020/05/15/a693e170-5d39-4ff4-b62f-80dc12399c91.jpeg?q=90&w=480'}}
                  />
          
        
</View>
<View style={styles.profilborder}>
<Text style={styles.bio}>
          Chika Tiktok</Text>
          <Text style={styles.bio2}>118140125</Text>
           <Image style={styles.profil}
                  source={{uri: 'https://1.bp.blogspot.com/-sW5d4-5y1bg/X9YCUN2m_EI/AAAAAAAAFyw/GR_ffUA7JTkTKGH1-BXjpLhoXLAWBVwTACLcBGAsYHQ/s667/Chandrika%2B1.png'}}
                  />
                  </View>
<View style={styles.profilborder}> 
<Text style={styles.bio}>
          Jefri Nichol</Text>
          <Text style={styles.bio2}>118140127</Text>
           <Image style={styles.profil}
                  source={{uri: 'https://www.wowkeren.com/images/photo/jefri_nichol.jpg'}}
                  />
         </View>
<View style={styles.profilborder}> 
<Text style={styles.bio}>
          Ari Ilham </Text>
          <Text style={styles.bio2}>118140017</Text>
           <Image style={styles.profil}
                  source={{uri: 'https://cdn0-production-images-kly.akamaized.net/XLQoHXH8Zk_MpwFEOQn_yhJT1xA=/1231x710/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2886173/original/032331600_1566210789-foto2.jpg'}}
                  />
         </View>
          </ScrollView>
          </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#73B3FF",
  },
  headerContent:{
    alignItems: 'center',
  },
   container:{
    flex:1,
    backgroundColor:"white",
  },
  profilborder:{
    flex:1,
    backgroundColor:"#D2D2D2",
    borderColor:"grey",
    borderBottomWidth:1,
   
  },
  avatar: {
    width: 25,
    height: 18,
    borderColor: "white",
    marginBottom:10,
    right: 148,
    top: 20 
  },
    profil: {
    width: 70,
    height: 70,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: "white",
    marginTop:-50,
    marginBottom:10,
    marginLeft:20 
          },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:15,
    marginTop:-5,
  },
  bio:{
    fontSize:15,
    color:"black",
    fontWeight:'600',
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 120,
       },
  bio2:{
    fontSize:15,
    color:"grey",
    fontWeight:'600',
    marginLeft: 120,
    
  },
});