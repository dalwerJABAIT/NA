import { View, Text, Image } from 'react-native';
import React from 'react';
import empty from '../assets/images/no-data.png';
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
        <Image source={empty} className="w-[270px] h-[215px]" resizeMode='contain'/>
        <Text className="text-xl text-gray-100">{title}</Text>
        <Text className="text-sm text-secondary font-bold">{subtitle}</Text>
        <CustomButton 
            title="Create video"
            handlePress={()=>router.push('/create')}
            containerStyles="w-full my-5"
        />
    </View>
  )
}

export default EmptyState