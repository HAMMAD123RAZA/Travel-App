import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const GroupListing = ({listings}) => {

    const renderItem=({item})=>{
        return (
            <>
            <View className='py-2 bg-gray-200 mx-2 px-1 rounded-lg '>
                <View className=' px-2 flex-row py-2 justify-evenly items-center' >
                <View className='rounded-lg'>
                <Image source={{uri:item.image}} width={80 } height={80}  />

                </View>

                <View className='px-1'>
                <Text className='font-bold' >{item.name}</Text>
                <View className='flex-row gap-3 py-3 '>
                   <Ionicons name='star' size={14} color='orange' />
                    <Text className='font-bold' >{item.rating}</Text>
                    <Text className='font-bold' >{item.reviews}</Text>

                </View>

                </View>
                </View>

            </View>
            </>
        )}

  return (
    <View className='py-4'>
      <Text className='font-bold text-2xl py-5' >Top Travel Groups</Text>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={listings} renderItem={renderItem}  />
    </View>
  )
}

export default GroupListing