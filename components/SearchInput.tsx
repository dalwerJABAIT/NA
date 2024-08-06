import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import search from '../assets/images/search.png';

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (

            <View className="border-2 text-white text-base bg-black-100 w-full h-16 px-4 rounded-2xl flex-row items-center space-x-4">
                <TextInput
                    className="text-base mt-0.5 text-white flex-1"
                    value={value}
                    placeholder="Search for a video topic.."
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                <TouchableOpacity>
                    <Image source={search} className="w-5 h-5" resizeMode='contain'/>
                </TouchableOpacity>
            </View>

    );
};

export default SearchInput;
