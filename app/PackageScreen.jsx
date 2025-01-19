import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import PackageList from '../components/PackageList';
import packagesData from '@/data/packages.json';

const PackageScreen = () => {

  const handleSelect = (selectedPackage) => {
    Alert.alert('Package Selected', `You chose the package ${selectedPackage.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Packages</Text>
      <PackageList packages={packagesData} onSelect={handleSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PackageScreen;
