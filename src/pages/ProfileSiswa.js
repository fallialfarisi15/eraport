import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Profile=() => {
  return (
    <View style={styles.view1}>
      <View style={styles.headerContent}>
          <Text style={styles.text}>Rekap Nilai Siswa</Text>
           <Image style={styles.avatar}
                  source={{uri: 'https://th.bing.com/th/id/Ra23ed6a35c5e4f187f6f21ed14786e60?rik=%2byTNy9s2HzgwkQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jyQltpEa6NQ%2fVGGWHkmF74I%2fAAAAAAAAXWQ%2ffioJmhJo2Vo%2fs1600%2fSudirman-Said.png&ehk=6h31HxzGRBnMtSJyF0Kt9ghiKwpTGoRb496O3rr77mU%3d&risl=&pid=ImgRaw'}}/>
      </View>
          <Text style={styles.bio}>Nama</Text>
            <Text style={styles.bio2}>Juni Rianto</Text>
            <Text style={styles.bio}>No. NIS</Text>
            <Text style={styles.bio2}>1181726390</Text>
            <Text style={styles.bio}>Kelas</Text>
            <Text style={styles.bio2}>7-B</Text>
            <Text style={styles.bio}>Tempat, Tanggal Lahir</Text> 
            <Text style={styles.bio2}>Jakarta, 12 Mei 2006</Text>
            <Text style={styles.bio}>Alamat</Text>
            <Text style={styles.bio2}>Jl. Bekasi Selatan 3 Rt 04/08 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent:{
    padding:25,
    alignItems: 'center',
    backgroundColor:'white'
  },
  avatar: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
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
  bio2:{
    fontSize:15,
    color:"grey",
    fontWeight:'600',
    marginLeft: 50
  },
});

export default Profile;
