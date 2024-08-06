import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import eye from '../assets/images/eye.png';
import closeEye from '../assets/images/closeEye.png';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100">{title}</Text>
            <View className="border-2 text-white text-base bg-black-100 w-full h-16 px-4 rounded-2xl flex-row items-center">
                <TextInput
                    className="flex-1 h-16 px-4"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? eye : closeEye} className="w-6 h-6" resizeMode='contain' />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
