import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import SeriesFlatList from './src/screens/SeriesFlatList';
import NetflixCard from './src/screens/NetflixCard';
import Nav from './src/screens/nav';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/netflix.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
    <View style={styles.container}>
        <Nav></Nav>
          <Text style={styles.heading}>List of Top Series of Netflix</Text>
          <SeriesFlatList ></SeriesFlatList>
          {/* <NetflixCard></NetflixCard> */}
          {/* <Accordion></Accordion> */}
          <StatusBar style="auto" />
        </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  background: {
    flex: 1, // Take up the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop: 50,
    padding: 5,
    fontWeight: '600',
    fontSize: 30,
    backgroundColor: 'black',
    color: 'red'
  }
  
});
