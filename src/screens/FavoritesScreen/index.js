import React from 'react';
import styles from '../style.js'
import { View, Text, ScrollView } from 'react-native';
import Card from '../../components/Card/index.js';

function FavoritesScreen () {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Favorites</Text>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} howsHorizontalScrollIndicator={false}>
          { 
            Array(6).fill(null).map((i)=>(
              <Card key={i} imageSource={i} title={i} />
            ))
          }
        </ScrollView>
       </View>
  )
}

export default FavoritesScreen;