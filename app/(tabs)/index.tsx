import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//above poackage gets the suze of our device's screen to make responsive components
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link
        href={{
          pathname: "/(tabs)/two",
          // /* 1. Navigate to the details route with query params */
          params: { essential: 'money' },
        }}
      >
        Go to Experience HomeScreen
      </Link>
      <View className="bg-yellow-400  p-20">
  <View className="block w-[192px] h-[280px] bg-black 
 rounded-[50%/60%_60%_40%_40%]drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)]">
 </View>
</View>
      <View>

     <Image source={{uri:'https://as2.ftcdn.net/v2/jpg/02/72/57/83/1000_F_272578302_Sxd56vPJVusXVI2lZYzYDQOdbbobXjFp.jpg'}} 
     height={hp(15)} width={hp(15)} 
     />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
