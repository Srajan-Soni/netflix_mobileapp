import { StyleSheet, Text, View ,Image,Button,Linking} from 'react-native';

export default function NetflixCard({title,imgurl,year,genre,movieurl,series_desc}) {

  return (
   <View style={styles.container}>

        <View style={styles.poster}>
            <Image
                source={{uri: imgurl}}
                style={styles.imgStyle}
            />
        <View style={styles.posterinfo}>
                    <Text style={styles.postertitle}>{title}</Text>
                    <View style={styles.info}>
                        <Text style={styles.yeartext}>{year}</Text>
                        <Text style={styles.genretext}>{genre}</Text>
                    </View>
                    <Text style={styles.posterText}>{series_desc}</Text>
                </View>
                <Button color='red' style={styles.button} title='Watch Now' onPress={()=> Linking.openURL(movieurl)} />
        </View>
       
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  info: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    color: 'grey'
  
  },
  yeartext:{
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    marginHorizontal: 10
  },
  genretext:{
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    marginHorizontal: 10
  },
  button: {
    backgroundColor: 'black',
    color: 'black',
    marginBottom: 10,
    paddingBottom: 10

  },
  imgStyle:{
    alignItems: 'center',
    // padding: 5,
    // marginTop: 20,
    height: undefined,
    width: '100%',
    aspectRatio: 1
    
  },
  header: {
    fontSize: 30,
    borderWidth: 1,
    marginBottom: 20

    },
    poster: {
        width: 200,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white'
    },
    posterinfo: {
        marginVertical: 10,
        alignItems: 'center'
    },
    postertitle: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white'
    },
    posterText: {
        paddingHorizontal: 20,
        color: '#999',
        marginTop: 10
    }

});
