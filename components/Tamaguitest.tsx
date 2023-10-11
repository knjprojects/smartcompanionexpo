
import { useFonts } from 'expo-font'
import { useColorScheme,StatusBar } from 'react-native'
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from 'tamagui'

import config from '../tamagui.config'
import TamaguiBottomSheet from './TamaguiBottomSheet'
import ErrorBoundary from 'react-native-error-boundary'
const Tamaguitest =()=>{
    const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }
  return (
      <ErrorBoundary> 
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor={'$backgroundSoft'}>
          <Paragraph color="$color" jc="center">
            {colorScheme}
          </Paragraph>
          <StatusBar barStyle={'light-content'} animated/>
        </YStack>
        <TamaguiBottomSheet/>
      </Theme></ErrorBoundary>
     
  
  )
}
export default Tamaguitest