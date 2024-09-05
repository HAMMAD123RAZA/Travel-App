import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import CatData from '../Data/CatData.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CatBtn = ({handleCatChange}) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef([]);

  const handleSelectCat = (id) => {
    setActiveIndex(id);
    console.log(id);
    handleCatChange(CatData[id].title)
  };

  return (
    <View>
      <Text className="text-xl font-bold  py-4">Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CatData.map((item, id) => (
          <View key={id} className="px-4 py-2">
            <TouchableOpacity
              onPress={() => handleSelectCat(id)}
              ref={(el) => (ref.current[id] = el)}
              className={`flex-row justify-center px-3 py-2 rounded-sm gap-3 items-center ${
                activeIndex === id ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <MaterialCommunityIcons
                name={item.iconName}
                size={20}
                color={activeIndex === id ? 'white' : 'black'}
              />
              <Text
                className={`text-base ${
                  activeIndex === id ? 'text-white' : 'text-black'
                }`}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CatBtn;
