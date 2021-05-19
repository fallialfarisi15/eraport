import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const RekapNilai=() => {
  return (
    <View style={styles.view1}>
      <View style={styles.headerContent}>
      <Image style={styles.avatar1}
                  source={{uri: 'https://www.pngarts.com/files/2/Left-Arrow-PNG-Pic.png'}}/>
          <Text style={styles.text}>Rekap Nilai Siswa</Text>
          </View>
          <Text style={styles.bio}>Nama :</Text>
            <Text style={styles.bio}>No. NIS :</Text> 
            <Text style={styles.bio}>Kelas :</Text>
            <View style={styles.container}>
      <View style={styles.tabel}>
        <View style={[styles.row,{width: 35}]}>
          <Text>No. </Text>
        </View>
        <View style={[styles.row,{borderLeftWidth: 0, width: 100}]}>
          <Text>Mata Pelajaran </Text>
        </View>
        <View style={[styles.row,{borderLeftWidth: 0, width: 87}]}>
          <Text>Pengetahuan</Text>
        </View>
        <View style={[styles.row,{borderLeftWidth: 0, width: 87}]}>
          <Text>Ketrampilan</Text>
        </View>
      </View>

      <View style={styles.tabel}>
        <View style={[styles.row,{borderTopWidth: 0, width: 35}]}>
          <Text>1</Text>
        </View>
        <View style={[styles.row,{borderTopWidth: 0, borderLeftWidth: 0, width: 100}]}>
          <Text> </Text>
        </View>
        <View style={[styles.row,{borderTopWidth: 0, borderLeftWidth: 0, width: 87}]}>
          <View style={styles.viewket}>
          </View>
        
        </View>
        <View style={[styles.row,{borderTopWidth: 0, borderLeftWidth: 0, width: 87}]}>
        </View>
    
      </View>

      <View style={styles.tabel}>
        <View style={[styles.row,{borderTopWidth: 0, width: 35}]}>
          <Text>2</Text>
        </View>
        <View style={[styles.row,{borderTopWidth: 0, borderLeftWidth: 0, width: 100}]}>
          <Text> </Text>
        </View>
        <View style={[styles.row,{borderTopWidth: 0, borderLeftWidth: 0, width: 87}]}>
              <View style={styles.viewket}>
                <Text></Text>
              </View>
        </View>

        <View style={[styles.row,{borderTopWidth: 0, borderLeftWidth: 0, width: 87}]}>
          <View style={styles.viewket}>
              <View style={styles.rowket}>
                <Text></Text>
              </View>
            </View>
        </View>
      </View>
    </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
container:{
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    bottom: 100,
    
  },
  tabel:{
    flexDirection: 'row',
    alignSelf: 'center',
  },
  row:{
    borderWidth: 1,
    width:60,
    alignItems:'center'
  },
  viewket:{
    flexDirection: 'row',
    alignItems:'center'
  },
  rowket:{
    borderLeftWidth: 1,
    flex: 1,  
  },

  headerContent:{
    padding:15,
    alignItems: 'center',
    backgroundColor:'#51A1FF',
    marginTop: -30
  },
  avatar1: {
    width: 25,
    height: 18,
    borderColor: "white",
    right: 148,
    top: 20, 
    marginTop: 10
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
    marginTop: 12,
    marginBottom: 5,
    marginLeft: 12
  }
});

export default RekapNilai;