import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../style.js'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteItem,removeFavoriteItem } from '../../actions/actions.js';

function DetailsScreen({route}) {
  const item = route.params.item;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLiked = useSelector((state)=> state.favorites.list.findIndex((i)=> i.id === item.id) >= 0)
  return (
    <View style={styles.container}>
      <View style={styles.buttonsBar}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={()=> {
              navigation.goBack(null)
            }
          }
        >
          <Text style={styles.textBackButton}>⏎</Text>
        </TouchableOpacity>
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
      <Text style={styles.header}>{item.title}</Text>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Image style={styles.image} source={{uri: `${item.url}` }} />
      </ScrollView>
    </View>
  )
}

export default DetailsScreen