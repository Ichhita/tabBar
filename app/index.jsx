import {TextInput, StyleSheet,View, Text, Touchable, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useHeaderHeight} from '@react-navigation/elements';
import Listings from '../components/Listings';
import listingData from '@/data/homestays.json';

const Home = () => {
  const headerHeight = useHeaderHeight();
  const [text, setText] = useState('');
  return (
    <>
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle:"",
      headerLeft: () => (
        <TouchableOpacity onPress={()=>{}}>
        </TouchableOpacity>
      ),
      headerRight:() => (
        <TouchableOpacity onPress={()=>{}} style = {{
          marginRight:20,
          backgroundColor: 'white',
          padding:10,
          borderRadius:10,

        }}>
            <Ionicons name="notifications" size={20}/>
        </TouchableOpacity>
      )
    }} />
    <View style={[styles.container, {paddingTop: headerHeight}]}>
    <Text style={styles.headingTxt}>Explore the beautiful culture of Nepal!</Text>
    <View style={styles.searchSectionWrapper}>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18}/>
        <TextInput 
        style={
          {marginRight:5
          }}
        color='black'
        placeholder="Choose a city or town"
        value={text}
        onChangeText={(value)=> setText(value)}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
        <Ionicons name="options" size={28}/>
      </TouchableOpacity>
      <Listings listings={listingData}/>
    </View>
    </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-start",
    paddingHorizontal:15,
    
  },
  headingTxt:{
    fontSize:28,
    fontWeight:'800',
    marginTop:10,

  },
  searchSectionWrapper:{
    flexDirection:'row',
    marginVertical:20,
  },
  searchBar:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    padding:16,
    borderRadius:10,
  },
  filterBtn:{
    backgroundColor:'red',
    padding:12,
    borderRadius:10,
    marginLeft:20,
  }
});