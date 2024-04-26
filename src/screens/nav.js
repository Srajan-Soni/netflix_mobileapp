import { StatusBar } from 'expo-status-bar';
import {Linking, StyleSheet, Text, View ,Image,Button,TouchableOpacity} from 'react-native';

export default function Nav() {

  return (
   <View style={styles.navbar}>

    <View style={styles.left}>
      <TouchableOpacity onPress={()=>Linking.openURL('https://www.netflix.com/in/')}>
         <Image 
            source={require('../../assets/netflixlogo.webp')}
            style={styles.imglogo}
            resizeMode='contain'

        ></Image>
      </TouchableOpacity>
       
    </View >
        <View style={styles.right}>
        <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL('https://www.netflix.com/login')}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: 'black',
      marginTop: 5
    },
    left: {
      flex: 1,
    },
    imglogo: {
      width: 100, 
      height: 40, 
    },
    right: {
      flex: 1,
      alignItems: 'flex-end',
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 5,
      backgroundColor: 'red', 
    },
    buttonText: {
      color: 'white', 
      fontWeight: 'bold',
    },
  });