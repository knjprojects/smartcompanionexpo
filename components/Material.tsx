import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-paper';
type Props = {}
import { useNavigation } from '@react-navigation/native';
//import { Button } from "@material-tailwind/react";
 import ChatAi from './ChatAi';
import { Image,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ErrorBoundary from 'react-native-error-boundary';
const Material = (props: Props) => {
  const navigation=useNavigation();
  const [isErrorComponentVisible, setIsErrorComponentVisible] =useState(false)
  return (
    <View>
      <Text>Material</Text>
      <Button className='text-red-300'>yoo this a button but this should not bre working as its materiakwind nextjs code</Button>
      <Text>We zre inside material but now im implementing the ai messages and tts functionalities. Material tailwind tyurns ut is for nextjs only</Text>
      <View>
         {/* title */}
         <View className="space-y-2">
            <Text style={{fontSize: wp(10)}} className="text-center font-bold text-gray-700">
                Jarvis
            </Text>
            <Text style={{fontSize: wp(4)}} className="text-center tracking-wider font-semibold text-gray-600">
                The future is here, powerd by AI.
            </Text>
        </View>
        
        {/* assistant image */}
        <View className="flex-row justify-center">
            <Image  
                source={require('../../assets/images/welcome.png')}
                style={{height: wp(75), width: wp(75)}}
            />
        </View>
        
        {/* start button */}
        <TouchableOpacity onPress={()=> {}} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
            <Text style={{fontSize: wp(6)}} className="text-center font-bold text-white">
                Get Started
            </Text>
        </TouchableOpacity>
        <ErrorBoundary>  <Button onPress={() => setIsErrorComponentVisible(true)} >Check if chatai works </Button>
        {isErrorComponentVisible &&  <ChatAi />}
        </ErrorBoundary>
       
      </View>
    </View>
  )
}

export default Material
