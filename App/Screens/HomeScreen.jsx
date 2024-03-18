import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerscreen from './Headerscreen'
import Searchbar from './Search'
import Slider from './Slider'
import Categories from './Categories'
import PrivateHospital from './PrivateHospital'
import GovernmentHospital from './GovernmentHospital'



export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Headerscreen/>
        <Searchbar setSearchText={(value)=>console.log(value)}/> 
        <Slider/>
        <Categories/>
        <PrivateHospital/>
        <GovernmentHospital/>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    marginTop:10,
    flex:1
  }
})