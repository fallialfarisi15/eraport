import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Text, Title, Caption, Paragraph, Drawer, Avatar, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.infouser}>
                        #<View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://th.bing.com/th/id/Ra23ed6a35c5e4f187f6f21ed14786e60?rik=%2byTNy9s2HzgwkQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jyQltpEa6NQ%2fVGGWHkmF74I%2fAAAAAAAAXWQ%2ffioJmhJo2Vo%2fs1600%2fSudirman-Said.png&ehk=6h31HxzGRBnMtSJyF0Kt9ghiKwpTGoRb496O3rr77mU%3d&risl=&pid=ImgRaw'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.nama}>Sudirman Said</Title>
                                <Caption style={styles.kelas}>Wali Kelas IPA -3</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="md-information-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Tentang Aplikasi"
                            onPress={() => {props.navigation.navigate('Tentangapp')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    infouser: {
      paddingLeft: 20,
    },
    nama: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    kelas: {
      fontSize: 14,
      lineHeight: 14,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
  });
