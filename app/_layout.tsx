import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import GlobalProvider from '@/context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
          <Stack>
            <Stack.Screen name='index' options={{headerShown:false}} />
            <Stack.Screen name='(auth)' options={{headerShown:false}} />
            <Stack.Screen name='(tabs)' options={{headerShown:false}} />
            {/* <Stack.Screen name='/search/[query]' options={{headerShown:false}} /> */}
          </Stack>
    </GlobalProvider>
  )
}

export default RootLayout

