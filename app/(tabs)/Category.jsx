import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import ListData from '../Data/CategoryCompData'

const Category = () => {
  const renderItem=({item})=>{
    return (

    
    <View className='grid grid-cols-2 w-1/2  ' >
                      <TouchableOpacity  >
                    <View className='py-2  px-2'>
                        <View className='bg-gray-200 rounded-lg  h-62 p-3'>
                            <Image source={{ uri: item.img }} className='w-full h-36 rounded-md' />

                            <View className='absolute top-2 right-2'>
                                <View className='bg-orange-400 rounded-full w-12 h-12 border-2 border-white flex items-center justify-center'>
                                    <Ionicons name='bookmark-outline' size={24} color='white' />
                                </View>
                            </View>

                            <View className='mt-3'>
                                <Text className='font-bold text-xsm'>{item.name}</Text>

                                {/* Price and Location */}
                                <View className='flex flex-row justify-evenly items-center my-2'>
                                    <View className='flex flex-row items-center'>
                                        <Ionicons name='location-outline' size={20} color='orange' />
                                        <Text className='ml-2 pr-5 '>{item.location}</Text>
                                    </View>
                                    <Text className='font-bold '>${item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
    </View>
    )
  }
  return (
    <View className='px-3 py-2' >
      <Text className='text-2xl font-bold'>Category</Text>
<FlatList data={ListData} numColumns={2} showsVerticalScrollIndicator={false} renderItem={renderItem} />
    </View>
  )
}

export default Category