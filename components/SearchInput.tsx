import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import search from '../assets/images/search.png';
import { router, usePathname } from 'expo-router';

const SearchInput = () => {
    const pathname = usePathname();
    const [query, setQuery] = useState('');

    return (

            <View className="border-2 text-white text-base bg-black-100 w-full h-16 px-4 rounded-2xl flex-row items-center space-x-4">
                <TextInput
                    className="text-base mt-0.5 text-white flex-1"
                    value={query}
                    placeholder="Search for a video topic.."
                    placeholderTextColor="#CDCDE0"
                    onChangeText={(e)=>setQuery(e)}
                />

                <TouchableOpacity onPress={()=>{
                    if(!query){
                        return Alert.alert('Missing query', "Please input Something to search results across database")
                    }

                    if(pathname.startsWith('/search')){
                        router.setParams({query})
                    }else{ 
                        router.push(`/search/${query}`)
                    }
                }}>
                    <Image source={search} className="w-5 h-5" resizeMode='contain'/>
                </TouchableOpacity>
            </View>

    );
};

export default SearchInput;
