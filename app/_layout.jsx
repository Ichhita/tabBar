import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs
        TabBar={props=> <tabBar{...props}/>}
    >
        <Tabs.Screen
        name="index"
        options={{
            title:"Home"
        }}
        />
       
        <Tabs.Screen
        name="PackageScreen"
        options={{
            title:"Packages"
        }}
        />
        <Tabs.Screen
        name="explore"
        options={{
            title:"Digital Diary"
        }}
        />
         <Tabs.Screen
        name="profile"
        options={{
            title:"Profile"
        }}
        />
    </Tabs>
  )
}

export default _layout