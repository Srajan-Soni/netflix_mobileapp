import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View ,FlatList} from 'react-native';
import NetflixCard from './NetflixCard';
export default function SeriesFlatList() {

    const series = [
        {
            name : "Money Heist",
            year: "2017-2021",
            imgurl: 'https://sm.ign.com/t/ign_jp/cover/m/money-heis/money-heist_ewps.1200.jpg',
            genre: 'Thriller',
            movieurl: 'https://www.netflix.com/in/title/80192098',
            desc : 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.'
        },
        {
            name : "Wednesday",
            year: "2022",
            imgurl: 'https://th.bing.com/th/id/OIP._WhhsxXn5dSe56ysfUgNvwHaNK?w=500&h=889&rs=1&pid=ImgDetMain',
            genre: 'Fantacy',
            movieurl: 'https://www.netflix.com/in/title/81231974',
            desc: 'Follows Wednesday Addams years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents'

        },
        {
            name : "Squid Game",
            year: "2021",
            imgurl: 'https://th.bing.com/th/id/OIP.ZJ1ARCmuZyv4H8Fj2DksPwAAAA?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            genre: 'Thriller',
            movieurl: 'https://www.netflix.com/in/title/81040344',
            desc: 'Hundreds of cash-strapped players accept a strange invitation to compete in children games. Inside, a tempting prize awaits — with deadly high stakes'
            
        },
        {
            name : "All of us are dead",
            year: "2022",
            imgurl: 'https://th.bing.com/th/id/OIP.rxQWJ988PC0YAMYmeRrVUwAAAA?rs=1&pid=ImgDetMain',
            genre: 'Horror',
            movieurl: 'https://www.netflix.com/in/title/81237994',
            desc: 'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected'

            
        },
        {
            name : "Stranger Things",
            year: "2023",
            imgurl: 'https://th.bing.com/th/id/R.addfcc0e08a9646400d6200cf3ef7ff1?rik=VAev4JAdcOH6sw&riu=http%3a%2f%2fwww.followingthenerd.com%2fsite%2fwp-content%2fuploads%2fstranger-things-poster.jpg&ehk=iwbfsqz7YDxu1ItfjJwqRfMSVtl2XljAdGrHqgU3ve8%3d&risl=&pid=ImgRaw&r=0',
            genre: 'Horror/Fantacy',
            movieurl: 'https://www.netflix.com/in/title/80057281',
            desc: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl'

            
        },
        {
            name : "Berlin",
            year: "2023",
            imgurl: 'https://assets.gadgets360cdn.com/pricee/assets/product/202302/Money-Heist-Berlin_1676093372.jpg',
            genre: 'Drama',
            movieurl: 'https://www.netflix.com/in/title/81586657',
            desc: 'Berlin is a Spanish action crime drama that follows the titular character and his gang in Paris before the events of Money Heist'
        },

    ]

  return (
    <FlatList

        data={series}
        style={styles.lineStyle}
        horizontal
        renderItem={({item})=>{
            return (

                // <View style={styles.viewStyle}>
                //     <Text style={styles.textStyle}>{item.name}</Text>
                //     <Text style={styles.textStyle}>{item.creater}</Text>
                //     <Text style={styles.textStyle}>{item.year}</Text>
                //     <Text style={styles.textStyle}>{item.genre}</Text>
                    
                // </View>
                <NetflixCard title={item.name} imgurl={item.imgurl} 
                            movieurl={item.movieurl} year={item.year} genre={item.genre} series_desc={item.desc}
                ></NetflixCard>
            )
            
            
        }}
    
    />

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle:{
    textAlign: 'center',
    padding: 5,
    marginTop: 20,
    fontSize: 30
  },
  textStyle: {
    color:'white',
    fontSize: 30,
    backgroundColor: 'purple',
    padding: 5

    },
    viewStyle: {
        marginTop: 20,
        padding: 5,
    }
});
