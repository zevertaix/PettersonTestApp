import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './style.js'
import { Ionicons } from '@expo/vector-icons';

function Search ({searchText, setSearchText}) {
  return (
    <View style={styles.input}>
      <Ionicons name="search" size={24} color="#8a8a9a" />
      <TextInput
        value={searchText}
        style={styles.search}
        onChangeText={(text)=>{
          setSearchText(text);
        }}
        placeholderTextColor={'#8a8a9a7a'}
        placeholder="Search..."
      />
    </View>
  )
}

export default Search;