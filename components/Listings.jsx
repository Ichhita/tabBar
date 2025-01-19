import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const Listings = ({ listings }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>Reviews: {item.reviews}</Text>
      <Text>Location: {item.location}</Text>
    </View>
  );

  return (
    <FlatList
      data={listings}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  rating: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Listings;
