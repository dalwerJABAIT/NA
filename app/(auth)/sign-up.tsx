import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import na from '../../assets/images/na.png';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '@/lib/AppWrite';
const SignUp = () => {
    const [form, setForm] = useState({
        username:'',
        email: '',
        password:''
    })

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async() =>{

        if(!form.username || !form.email || !form.password){
          Alert.alert('Error', 'Please fill in all the fields')
        }

        setIsSubmitting(true);

        try{
          const result = await createUser(
            form.email,
            form.password,
            form.username
          )

          setUser(result);
          setIsLogged(true);
          //set it to global state...
          router.replace('/home');

        } catch (error){
          Alert.alert('Error', error.message)
        } finally{
          setIsSubmitting(false);
        }
    }

  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
                <Image source={na} resizeMode='contain' className="w-[115px] h-[45px]"/>
                <Text className="text-white text-2xl mt-10 font-semibold">Sign Up to NA</Text>

                <FormField 
                    title="Username"
                    value={form.username}
                    handleChangeText={(e) => setForm({...form, username:e})}
                    otherStyles="mt-7"
                />

                <FormField 
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({...form, email:e})}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />

                <FormField 
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({...form, password:e})}
                    otherStyles="mt-7"
                />

                <CustomButton 
                    title="Sign Up" 
                    handlePress={submit} 
                    containerStyles="mt-7" 
                    isLoading={isSubmitting} 
                />

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100">Have an account already?</Text>
                    <Link href="/sign-in" className='text-lg text-secondary'>Sign In</Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp