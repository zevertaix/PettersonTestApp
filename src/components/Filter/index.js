import React, { useState } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderKey } from '../../actions/actions';

function Filter () {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const orderKey = useSelector((store) => store.photos.order) 

  const toggleSort = (key) => {
    if(orderKey !== key){
      dispatch(setOrderKey(key))
    }else {
      dispatch(setOrderKey("default"))
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Feather name="filter" size={35} color="#ffffff9e" />
          <View style={{
            position: "absolute",
            top: "70%",
            left: "90%"
          }}>
            {
               orderKey === "asc" 
               ? <FontAwesome name="sort-alpha-asc" size={15} color="#FFCE55" />
               : orderKey === "desc" 
                  ? <FontAwesome name="sort-alpha-desc" size={15} color="#FFCE55" /> 
                  : null
            }
            
            
          </View>
        </TouchableOpacity>
      </View>
      {
        show ?
        <View style={styles.list}>
          <TouchableOpacity style={styles.listButton} onPress={()=> toggleSort("asc")}>
            <View style={{flexDirection: "row"}}>
              <FontAwesome name="sort-alpha-asc" size={20} color="#ffffffb3" />
              <Text style={styles.listLabel}>Sorting by name (A-Z)</Text>
            </View>
            <View>
              {
                orderKey === "asc" 
                ? <MaterialCommunityIcons name="check-bold" size={20} color="#5FCF80" />
                : null
              }
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton} onPress={()=> toggleSort("desc")}>
            <View style={{flexDirection: "row"}}>
              <FontAwesome name="sort-alpha-desc" size={20} color="#ffffffb3" />
              <Text style={styles.listLabel}>Sorting by name (Z-A)</Text>
            </View>
            <View>
              {
                orderKey === "desc" 
                ? <MaterialCommunityIcons name="check-bold" size={20} color="#5FCF80" />
                : null
              }
            </View>
          </TouchableOpacity>
        </View>
        : null
      }
    </View>
  )
}

export default Filter;