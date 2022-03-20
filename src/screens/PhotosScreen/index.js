import React, { useState, useEffect,useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../style.js'
import Card from '../../components/Card'
import Search from '../../components/Search/index.js';
import { useDispatch, useSelector } from "react-redux";
import {setPhotosList} from "../../actions/actions";
import Filter from '../../components/Filter/index.js';
import { sortingList } from '../../util/index.js';

function PhotosScreen ({navigation}) {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const photosList = useSelector((store) => store.photos.list)
  const orderKey = useSelector((store) => store.photos.order)
 
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos?albumId=1"
    const response = await fetch(url)
    const json = await response.json()
    dispatch(setPhotosList(json))
  }

  const searchList = useMemo(() => photosList.filter((elem)=>{
    return elem.title.toLowerCase().includes(searchText.toLowerCase())
  } ),[searchText, photosList])

  const displayList = useMemo(()=>{
    return sortingList(orderKey, searchList);
  }, [searchList, orderKey])

  useEffect(() => {
    fetchData()
  },[]) 

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Photos</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Search searchText={searchText} setSearchText={setSearchText}/>
          <Filter />
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} howsHorizontalScrollIndicator={false}>
          { 
            displayList.map((item, index)=>(
              <Card key={item.url} item={item} navigation={navigation} />
            ))
          }
        </ScrollView>
      </View>
  )
}

export default PhotosScreen