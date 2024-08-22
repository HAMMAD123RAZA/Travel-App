import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import img from '../../assets/images/favicon.png';
import { Ionicons } from '@expo/vector-icons';
import CatBtn from '../components/CatBtn.jsx';
import Listings from '../components/Listings.jsx';
import ListData from '../Data/ListData.js';
import GroupData from '../Data/Group.js'
import GroupListing from '../components/GroupListing'


const Index = () => {
    const [category, setCategory] = useState('All');

    const handleCatChange = (newCategory) => {
        setCategory(newCategory);
        console.log(newCategory);
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Image source={img} className='w-10 h-8 rounded-md' />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity className='bg-white px-4 py-2 rounded-md mr-3'>
                            <Ionicons name='notifications' size={23} color='black' />
                        </TouchableOpacity>
                    ),
                }}
            />

            <View className='mt-28 px-5'>
                <ScrollView showsVerticalScrollIndicator={false} >
                <Text className='text-2xl font-bold'>Explore The Beautiful World</Text>
                
                <View className='flex flex-row items-center bg-gray-200 rounded-md p-3 mt-8'>
                    <Ionicons name='search' size={24} />
                    <TextInput placeholder='Search...' className='flex-1 ml-3' />
                    <TouchableOpacity>
                        <Ionicons name='options' size={28} color='black' />
                    </TouchableOpacity>
                </View>

                <CatBtn handleCatChange={handleCatChange} />
                <Listings ListData={ListData} category={category} />
                <GroupListing listings={GroupData}  />

                </ScrollView>
            </View>


        </>
    );
};

export default Index;