


import { Stack, Link, router, Redirect } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import na from '../assets/images/na.png';
import emoji from '../assets/images/emoji.png';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function App() {
    const {isLoading, isLoggedIn} = useGlobalContext(); 
    
    if(!isLoading && isLoggedIn) return <Redirect href="/home" />
    
    return (
       <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height:'100%'}}>
            <View className='w-full justify-center items-center min-h-85vh px-4'>
                <Image  source={na} className="w-[130px] h-[84px]" resizeMode='contain'/>
                <Image  source={emoji} className="max-w-[380px] w-full h-[300px]" resizeMode='contain'/>

                <View className="relative mt-5">
                    <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with <Text className="text-blue-400">NA</Text></Text>
                </View>
                <Text className="text-sm text-gray-700 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with NA</Text>
                
                <CustomButton title="Continue with  Email" handlePress={()=>router.push('/sign-in')} containerStyles="w-full mt-7"/>
            </View>
        </ScrollView>

        <StatusBar backgroundColor='#161622'  style='light'/>
       </SafeAreaView>
    );
}
