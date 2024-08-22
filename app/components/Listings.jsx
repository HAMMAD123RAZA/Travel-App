import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Listings = ({ ListData,category }) => {
    const [loading, setloading] = useState(false)

    useEffect(()=>{
console.log('update listing')
setloading(true)

setTimeout(() => {
    setloading(false)
}, 200);

    },[category])
    const renderItem = ({ item }) => {
        return (
            <Link href={`/listing/${item.id}`} asChild>
                <TouchableOpacity>
                    <View className='py-2 px-2'>
                        <View className='bg-gray-200 rounded-lg w-56 h-72 p-3'>
                            <Image source={{ uri: item.image }} className='w-full h-36 rounded-md' />

                            <View className='absolute top-2 right-2'>
                                <View className='bg-orange-400 rounded-full w-12 h-12 border-2 border-white flex items-center justify-center'>
                                    <Ionicons name='bookmark-outline' size={24} color='white' />
                                </View>
                            </View>

                            <View className='mt-3'>
                                <Text className='font-bold text-lg'>{item.name}</Text>

                                {/* Price and Location */}
                                <View className='flex flex-row justify-between items-center mt-2'>
                                    <View className='flex flex-row items-center'>
                                        <Ionicons name='location-outline' size={20} color='orange' />
                                        <Text className='ml-2'>{item.location}</Text>
                                    </View>
                                    <Text className='font-bold text-lg'>${item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        );
    };

    return (
<FlatList
            data={ loading? []: ListData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 10 }}
        />

    );
};

export default Listings;
