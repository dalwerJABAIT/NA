import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import na from '../../assets/images/na.png'
import SearchInput from '../../components/SearchInput.tsx'
import Trending from '@/components/Trending'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList 
        data={[]}
        keyExtractor={(item)=> item.$id}
        renderItem={({item}) => 
           <Text className="text-3xl text-white">{item.id}</Text>
        }
        ListHeaderComponent={()=>(
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-sm text-gray-100">Welcome Back</Text>
                <Text className="text-2xl text-secondary font-bold">Dalwer</Text>
              </View>
              <View>
                <Image source={na} className="w-9 h-10" resizeMode='contain' />
              </View>
            </View>
            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg text-gray-500 font-bold mb-3">Latest Videos</Text>
              <Trending posts={[{id:1}, {id:2}, {id:3}]??[]}/>
            </View>
          </View>
         )}

         ListEmptyComponent={() => (
          <Text className="text-white">Empty</Text>
         )}
       />
    </SafeAreaView>
  )
}

export default Home