import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {Background, Logo} from '../../assets';

const Splash = ({navigation}) => {
 useEffect(() => {
    setTimeout(() => {
      navigation.replace('Masuk');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={Background} style={styles.background}>
        <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 270,
    height: 105,
  },
});