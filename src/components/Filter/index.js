import React, { useState } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

function Filter () {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Feather name="filter" size={35} color="#ffffff9e" />
        </TouchableOpacity>
      </View>
      {
        show ?
        <View style={styles.list}>
          <TouchableOpacity style={styles.listButton} onPress={()=> null}>
            <FontAwesome name="sort-alpha-asc" size={20} color="#ffffffb3" />
            <Text style={styles.listLabel}>Sorting by name (A-Z)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton}>
            <FontAwesome name="sort-alpha-desc" size={20} color="#ffffffb3" />
            <Text style={styles.listLabel}>Sorting by name (Z-A)</Text>
          </TouchableOpacity>
        </View>
        : null
      }
    </View>
  )
}

export default Filter;