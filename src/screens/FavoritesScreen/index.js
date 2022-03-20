import React from 'react';
import styles from '../style.js'
import { View, Text, ScrollView } from 'react-native';
import Card from '../../components/Card/index.js';
import { useSelector } from 'react-redux';

function FavoritesScreen ({navigation}) {
  const favoritesList = useSelector((store)=> store.favorites.list);

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Favorites</Text>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          {
            favoritesList.map((item, index)=>(
              <Card key={item.url} item={item} navigation={navigation}/>
            ))
          }
        </ScrollView>
       </View>
  )
}

export default FavoritesScreen;