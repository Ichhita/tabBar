import React from 'react';
import { Image, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const PackageList = ({ packages, onSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => onSelect(item)}>
      <Image source={{ uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text> Date: {item.date}</Text>
      <Text>Reviews: {item.reviews}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={packages}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PackageList;

