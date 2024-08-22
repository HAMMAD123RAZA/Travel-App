import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router, Stack, useLocalSearchParams } from 'expo-router'
import ListData from '../Data/ListData.js';
import GroupData from '../Data/Group.js'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';


const {width}=Dimensions.get('window')

const ListingDetails = () => {

    const {id}=useLocalSearchParams()
    const listing=ListData.find((item)=>item.id===id)

  return (
    <>
    <Stack.Screen options={{
      headerTransparent:true,
      title:'',
      headerLeft:()=>(
        <TouchableOpacity onPress={()=>router.back()} >
          <View className='bg-gray-200 rounded-lg px-3 py-2 '  >
            <Feather name='arrow-left' color='black' size={20} />
          </View>
          </TouchableOpacity>
      ),
      headerRight:()=>(
        <TouchableOpacity onPress={()=>{}} >
          <View className='bg-gray-200 rounded-lg px-3 py-2 '  >
            <Ionicons name='bookmark-outline' color='black' size={20} />
          </View>
          </TouchableOpacity>
      ),
    }} />

{/* //content */}

    <View className=''>
      <Image source={{uri:listing.image}} width={width} height={300} />
      <View className='py-5 px-3' >
        <Text className='font-bold text-2xl ' >{listing.name}</Text>
      </View>
      <View className='flex-row px-3 gap-2'>
      <FontAwesome5 name='map-marker-alt' size={20} color='orange' />
      <Text>{listing.location}</Text>
      </View>

{/* //3 cols */}

<View className='flex-row justify-between px-2 py-8 ' >
    <View className='flex-row gap-3 py-2' >
      <Ionicons name='time' size={28} color='orange' />
      <View>
        <Text className='text-gray-400' >Duration</Text>
        <Text className='font-bold'>{listing.duration} days</Text>
      </View>
    </View>

    <View className='flex-row gap-3' >
      <Ionicons name='time' size={28} color='orange' />
      <View>
        <Text className='text-gray-400' >Duration</Text>
        <Text className='font-bold'>{listing.duration} days</Text>
      </View>
    </View>

    <View className='flex-row gap-3' >
      <Ionicons name='time' size={28} color='orange' />
      <View>
        <Text className='text-gray-400' >Duration</Text>
        <Text className='font-bold'>{listing.duration} days</Text>
      </View>
    </View>

</View>

{/* para */}

<View className='px-4 py-2 w-80'>
  <Text className='font-semibold' >{listing.description}</Text>
</View>

    </View>

    </>
  )
}

export default ListingDetails