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
                <Image style={styles.avatar}
                  source={{uri: 'https://th.bing.com/th/id/Ra23ed6a35c5e4f187f6f21ed14786e60?rik=%2byTNy9s2HzgwkQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jyQltpEa6NQ%2fVGGWHkmF74I%2fAAAAAAAAXWQ%2ffioJmhJo2Vo%2fs1600%2fSudirman-Said.png&ehk=6h31HxzGRBnMtSJyF0Kt9ghiKwpTGoRb496O3rr77mU%3d&risl=&pid=ImgRaw'}}/>
