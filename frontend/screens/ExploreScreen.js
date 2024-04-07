import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar';
import PostingCard from '../components/PostingCard';

const ExploreScreen = () => {

  return (
    <View>
      <TopBar></TopBar>
      <PostingCard style={styles.card}>

      </PostingCard>
      {/* <View style={styles.container}>
        <Text>Main Page</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 700,
  },
  card :{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    
  }
});

export default ExploreScreen;