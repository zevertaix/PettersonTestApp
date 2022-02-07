import React, { useEffect, useMemo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteItem,removeFavoriteItem } from '../../actions/actions.js';

function Card ({item}) {
  const dispatch = useDispatch();
  const isLiked = useSelector((state)=> state.favorites.list.findIndex((i)=> i.id === item.id) >= 0)

  return (
    <View style={styles.body}>
      <Image style={styles.image} source={{uri: `${item.url}` }} />
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity 
          onPress={()=>{
            if(isLiked){
              return dispatch(removeFavoriteItem(item))
            }
            return dispatch(addFavoriteItem(item))
          }}
        >
          <Ionicons name={isLiked ? "heart-sharp" : "heart-outline"} size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;

