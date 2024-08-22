import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
<Tabs
 screenOptions={{tabBarStyle:{
  backgroundColor:'white',
  borderTopWidth:0
},
tabBarShowLabel:false,
tabBarActiveTintColor:'black'
}}
 >
  <Tabs.Screen name='index' options={{tabBarIcon:()=>(
    <Ionicons name='home' size={24} color='black' />
  )}} />
  <Tabs.Screen name='Explore' options={{tabBarIcon:()=>(
    <View className='bg-orange-500 px-4 py-2 rounded-md '>
    <Ionicons name='search' size={24} color='white' />
      </View>
  )}} />
  <Tabs.Screen name='Profile' options={{tabBarIcon:()=>(
    <Ionicons name='people' size={24} color='black' />
  )}} />
  <Tabs.Screen name='Category' options={{tabBarIcon:()=>(
    <Ionicons name='menu' size={24} color='black' />
  )}} />


</Tabs>
  )
}

export default _layout