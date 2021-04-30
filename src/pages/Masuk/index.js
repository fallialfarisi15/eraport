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

export default function Masuk() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
         <ImageBackground style={styles.background} source={Background}>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          
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
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
       </ImageBackground>
    )
}

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
    width: "80%" ,
    height:"30%" ,
    left: 27 ,
    top: 27 ,
    fontSize: 18,

  },

});
