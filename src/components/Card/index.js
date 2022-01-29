import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js'
import { Ionicons } from '@expo/vector-icons';

function Card (props) {
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={{uri: `${props.imageSource}` }} />
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity>
          <Ionicons  name="heart-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* <Ionicons name="heart-sharp" size={24} color="black" /> */}
    </View>
  );
}

export default Card;

