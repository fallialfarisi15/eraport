import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Profile=() => {
  return (
    <View style={styles.view1}>
      <View style={styles.headerContent}>
      <Image style={styles.avatar1}
                  source={{uri: 'https://www.pngarts.com/files/2/Left-Arrow-PNG-Pic.png'}}/>

          <Text style={styles.text}>Profil Siswa</Text>
          </View>
          <View style={styles.profilborder}>
           <Image style={styles.avatar}
                  source={{uri: 'https://wallpapercave.com/wp/wp4707395.jpg'}}/>
                  
      </View>
          <Text style={styles.bio}>Nama :</Text>
            <Text style={styles.bio}>No. NIS :</Text> 
            <Text style={styles.bio}>Jenis Kelamin :</Text>
            <Text style={styles.bio}> Agama :</Text>
            <Text style={styles.bio}>Tempat, Tanggal Lahir :</Text> 
            <Text style={styles.bio}>Alamat :</Text>
            <Text style={styles.bio}>Nama Orangtua </Text>
             <Text style={styles.bio1}>Ayah :</Text>
              <Text style={styles.bio1}>Ibu :</Text>
            <Text style={styles.bio}>Pekerjaan Orangtua </Text>
            <Text style={styles.bio1}>Ayah :</Text>
              <Text style={styles.bio1}>Ibu :</Text>
            
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent:{
    padding:15,
    alignItems: 'center',
    backgroundColor:'#51A1FF'
  },
  profilborder:{
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  avatar1: {
    width: 25,
    height: 18,
    borderColor: "white",
    marginBottom:10,
    right: 148,
    top: 20 
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  view1:{
    flex: 1,
    backgroundColor: '#DCE1E8',
  },
  bio:{
    fontSize:15,
    color:"black",
    fontWeight:'600',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 40
  },
  bio1:{
   fontSize:15,
    color:"grey",
    fontWeight:'600',
    marginLeft: 40
  },
  bio2:{
    fontSize:15,
    color:"grey",
    fontWeight:'600',
    marginLeft: 50
  },
});

export default Profile;