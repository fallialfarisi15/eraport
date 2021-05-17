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

                <Text style={styles.name1}>
                  Data Siswa
                </Text>
      
            </View>
          </View> 
      
          <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>  
           <View style={styles.profilborder}>
            <Image style={styles.profil}
                  source={{uri: 'https://media.bolatimes.com/thumbs/2021/05/13/81906-anya-geraldine/730x480-img-81906-anya-geraldine.jpg'}}
                  />
        <Text style={styles.bio}>
          Anya Geraldine</Text>
          <Text style={styles.bio2}>118140047</Text>
</View>
<View style={styles.profilborder}>
           <Image style={styles.profil}
                  source={{uri: 'https://akcdn.detik.net.id/community/media/visual/2020/05/15/a693e170-5d39-4ff4-b62f-80dc12399c91.jpeg?q=90&w=480'}}
                  />
          <Text style={styles.bio}>
          Reemar Martin</Text>
          <Text style={styles.bio2}>118140147</Text>
        
</View>
<View style={styles.profilborder}>
           <Image style={styles.profil}
                  source={{uri: 'https://1.bp.blogspot.com/-sW5d4-5y1bg/X9YCUN2m_EI/AAAAAAAAFyw/GR_ffUA7JTkTKGH1-BXjpLhoXLAWBVwTACLcBGAsYHQ/s667/Chandrika%2B1.png'}}
                  />
          <Text style={styles.bio}>
          Chika Tiktok</Text>
          <Text style={styles.bio2}>118140125</Text>
        
</View>
<View style={styles.profilborder}>
           <Image style={styles.profil}
                  source={{uri: 'https://cdn1-production-images-kly.akamaized.net/odWgHbFb2oS_jfzy3Zb9nHl3W90=/469x625/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3375222/original/009542000_1613104721-img-20210211-132018-bd1279767f480ba15dd9c6e3b39d9784.jpg'}}
                  />
          <Text style={styles.bio}>
          Anya Geraldine</Text>
          <Text style={styles.bio2}>118140047</Text>
        
</View>
          </ScrollView>
          </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "gray",
  },
  headerContent:{
    padding:0,
    alignItems: 'center',
  },
   container:{
    flex:1,
    backgroundColor:"white",
  
  },
  profilborder:{
    flex:1,
    backgroundColor:"pink",
    borderColor:"grey",
    borderBottomWidth:1,
    alignItems:'left'
    
  
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
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 3,
    borderColor: "white",
    marginTop:10,
    
  },
  name1:{
    fontSize:18,
    color:"#FFFFFF",
    fontWeight:'60',
  

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
    marginBottom: 5,
    marginLeft: 100,

  },
  bio2:{
    fontSize:15,
    color:"grey",
    fontWeight:'600',
    marginLeft: 100,

  },
});