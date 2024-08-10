import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import na from '../../assets/images/na.png'
import SearchInput from '../../components/SearchInput.tsx'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
import { StatusBar } from 'expo-status-bar'
import { getAllPosts, getLatestPosts } from '@/lib/AppWrite'
import UseAppWrite from '@/lib/useAppWrite'
import VideoCard from '@/components/VideoCard'

const Home = () => {
  const { data: posts, refetch } = UseAppWrite(getAllPosts);
  const { data: latestPosts } = UseAppWrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () =>{
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList 
        data={posts}
        keyExtractor={(item)=> item.$id}
        renderItem={({item, key}) => 
          <VideoCard key={key} video={item} />
        }
        ListHeaderComponent={()=>(
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-sm text-gray-100">Welcome Back</Text>
                <Text className="text-2xl text-secondary font-bold">NA</Text>
              </View>
              <View>
                <Image source={na} className="w-9 h-10" resizeMode='contain' />
              </View>
            </View>
            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg text-gray-500 font-bold mb-3">Latest Videos</Text>
              <Trending posts={latestPosts ?? []}/>
            </View>
          </View>
         )}

         ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to upload a video"
          />
         )}

         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
       />
      <StatusBar backgroundColor='#161622'  style='light'/>
    </SafeAreaView>
  )
}

export default Home