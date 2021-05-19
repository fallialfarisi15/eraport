import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {Background} from '../../assets';

const Masuk = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  function login() {
    if (username == "" || password == "") {
      alert("masukan username atau password");
    } else {
      fetch("http://localhost/serverpam/login.php", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${username}&password=${password}`,
      })
        .then((response) => response.json())
        .then((json) => {
          setUsername("");
          setPassword("");
          if (json == "login berhasil") {
            navigation.replace("Home", {
              user: username,
            });
          } else {
            alert("username atau password salah");
          }
        });
    }
  }
    return (
         <ImageBackground style={styles.background} source={Background}>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>
       </ImageBackground>
    )
}
export default Masuk;

const styles = StyleSheet.create({
     background: {
    flex: 1,
    alignItems:"center", 
    justifyContent:"center"
  },

  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "80%",
    height: 40,
    marginBottom: 30,
  },
    
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
 
  loginBtn: {
    width: "45%",
    borderRadius: 27,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#FFEC43",
  },

  text: {
    position: "absolute" ,
    fontSize: 15,
    

  },

});
