import { StyleSheet, View,useColorScheme } from 'react-native'
import React from 'react'

type Props = {}
//import { ThemeProvider } from '@material-tailwind/react'
import { TamaguiProvider } from 'tamagui'
import {config as tamaconfig} from '../tamagui.config'

import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/react"
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'



const Providers = ({children}:any) => {
 const colorScheme=useColorScheme(); 
 return (
    
    
    //<ThemeProvider>{children}</ThemeProvider>
    <GluestackUIProvider config={config.theme}>
    <PaperProvider ><ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomSheetModalProvider><TamaguiProvider config={tamaconfig}>
      {children}
    </TamaguiProvider></BottomSheetModalProvider>
  </ThemeProvider> </PaperProvider>
  </GluestackUIProvider>
  )
  
}

export default Providers

